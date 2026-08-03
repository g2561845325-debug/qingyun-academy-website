import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(projectRoot, "public");
const htmlFiles = (await readdir(publicRoot)).filter((file) => file.endsWith(".html"));
const idsByFile = new Map();
const failures = [];
let inspectedLinks = 0;

for (const file of htmlFiles) {
  const html = await readFile(path.join(publicRoot, file), "utf8");
  const ids = new Set(
    [...html.matchAll(/\s(?:id|name)=["']([^"']+)["']/gi)].map((match) => match[1]),
  );
  idsByFile.set(file, ids);
}

function isExternal(value) {
  return /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(value);
}

for (const file of htmlFiles) {
  const html = await readFile(path.join(publicRoot, file), "utf8");
  const references = [
    ...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/gi),
  ].map((match) => match[1].trim());

  for (const reference of references) {
    if (!reference || isExternal(reference)) continue;
    inspectedLinks += 1;

    const [rawTarget, rawHash = ""] = reference.split("#", 2);
    const cleanTarget = decodeURIComponent(rawTarget.split("?", 1)[0]);
    const sourcePath = path.join(publicRoot, file);
    const targetPath = cleanTarget
      ? path.resolve(path.dirname(sourcePath), cleanTarget)
      : sourcePath;

    try {
      await access(targetPath);
    } catch {
      failures.push(`${file}: missing target "${reference}"`);
      continue;
    }

    if (!rawHash || path.extname(targetPath).toLowerCase() !== ".html") continue;

    const targetFile = path.basename(targetPath);
    const targetIds = idsByFile.get(targetFile);
    if (targetIds && !targetIds.has(decodeURIComponent(rawHash))) {
      failures.push(`${file}: missing fragment "${reference}"`);
    }
  }
}

if (failures.length) {
  console.error(`Link audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Link audit passed: ${htmlFiles.length} pages and ${inspectedLinks} local references checked.`,
  );
}
