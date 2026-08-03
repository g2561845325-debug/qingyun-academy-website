import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server renders the Qingyun Academy entry page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<title>青云书院初中部 \| 深圳国际化学校<\/title>/i);
  assert.match(html, /href="\/index\.html"/i);
  assert.match(html, /进入青云书院初中部官网/);
});

test("ships every public page and the shared navigation system", async () => {
  const publicDirectory = new URL("../public/", import.meta.url);
  const htmlFiles = (await readdir(publicDirectory)).filter((file) =>
    file.endsWith(".html"),
  );

  assert.equal(htmlFiles.length, 53);

  const sharedFiles = [
    "styles.css",
    "editorial.css",
    "navigation-v2.css",
    "detail-pages.css",
    "script.js",
    "subpage.js",
    "unified-nav.js",
    "detail-pages.js",
    "content/media-config.js",
    "content/media-runtime.js",
  ];

  await Promise.all(
    sharedFiles.map((file) => access(new URL(`../public/${file}`, import.meta.url))),
  );

  const [home, detailPage, mediaConfig] = await Promise.all([
    readFile(new URL("../public/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/ai-school.html", import.meta.url), "utf8"),
    readFile(new URL("../public/content/media-config.js", import.meta.url), "utf8"),
  ]);

  assert.match(home, /青云书院初中部/);
  assert.match(home, /校长寄语/);
  assert.match(home, /unified-nav\.js/);
  assert.match(detailPage, /AI School/);
  assert.match(detailPage, /detail-pages\.js/);
  assert.match(mediaConfig, /window\.QINGYUN_MEDIA/);
  assert.match(mediaConfig, /heroSlides/);
  assert.match(mediaConfig, /campusVideo/);
});
