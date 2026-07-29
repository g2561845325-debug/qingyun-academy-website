import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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

test("ships every public page and the shared media configuration", async () => {
  const publicFiles = [
    "index.html",
    "about.html",
    "faculty.html",
    "curriculum.html",
    "academies.html",
    "admissions.html",
    "fees.html",
    "life.html",
    "styles.css",
    "editorial.css",
    "script.js",
    "subpage.js",
    "content/media-config.js",
    "content/media-runtime.js",
  ];

  await Promise.all(
    publicFiles.map((file) =>
      access(new URL(`../public/${file}`, import.meta.url)),
    ),
  );

  const [home, mediaConfig] = await Promise.all([
    readFile(new URL("../public/index.html", import.meta.url), "utf8"),
    readFile(
      new URL("../public/content/media-config.js", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(home, /青云书院初中部/);
  assert.match(home, /关于我们/);
  assert.match(home, /课程设置/);
  assert.match(home, /招生入学/);
  assert.match(home, /校园生活/);
  assert.match(mediaConfig, /window\.QINGYUN_MEDIA/);
  assert.match(mediaConfig, /heroSlides/);
  assert.match(mediaConfig, /campusVideo/);
});
