import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";
import process from "node:process";

const root = process.cwd();
const contentRoot = join(root, "content");
const allowedGroups = new Set(["academic", "hp", "business", "art", "shared"]);
const allowedStatuses = new Set(["collecting", "draft", "review", "approved"]);
const requiredFields = ["title", "group", "module", "owner", "status", "publish", "updated"];

async function listMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listMarkdown(path)));
    if (entry.isFile() && extname(entry.name) === ".md") files.push(path);
  }
  return files;
}

function parseValue(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "[]") return [];
  return trimmed.replace(/^(["'])(.*)\1$/, "$2");
}

function parseFrontmatter(source) {
  if (!source.startsWith("---\n") && !source.startsWith("---\r\n")) return null;
  const normalized = source.replaceAll("\r\n", "\n");
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return null;
  const values = {};
  for (const line of normalized.slice(4, end).split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    values[line.slice(0, separator).trim()] = parseValue(line.slice(separator + 1));
  }
  return values;
}

const files = (await listMarkdown(contentRoot)).filter((file) => {
  const name = file.split(sep).at(-1);
  return name !== "README.md" && !name.startsWith("_");
});

const errors = [];
let publishable = 0;

for (const file of files) {
  const label = relative(root, file).replaceAll(sep, "/");
  const metadata = parseFrontmatter(await readFile(file, "utf8"));
  if (!metadata) {
    errors.push(`${label}: missing YAML frontmatter.`);
    continue;
  }

  for (const field of requiredFields) {
    if (metadata[field] === undefined || metadata[field] === "") {
      errors.push(`${label}: missing required field '${field}'.`);
    }
  }

  if (metadata.group && !allowedGroups.has(metadata.group)) {
    errors.push(`${label}: invalid group '${metadata.group}'.`);
  }
  if (metadata.status && !allowedStatuses.has(metadata.status)) {
    errors.push(`${label}: invalid status '${metadata.status}'.`);
  }
  if (typeof metadata.publish !== "boolean") {
    errors.push(`${label}: publish must be true or false without quotation marks.`);
  }

  const folderGroup = relative(contentRoot, file).split(sep)[0];
  if (metadata.group && allowedGroups.has(folderGroup) && metadata.group !== folderGroup) {
    errors.push(`${label}: group '${metadata.group}' does not match folder '${folderGroup}'.`);
  }

  if (metadata.publish === true) {
    publishable += 1;
    if (metadata.status !== "approved") {
      errors.push(`${label}: publish can be true only when status is approved.`);
    }
    if (!metadata.reviewer) errors.push(`${label}: approved content requires reviewer.`);
    if (!metadata.approval_date) errors.push(`${label}: approved content requires approval_date.`);
  }
}

if (errors.length) {
  console.error("\nContent validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content validation passed: ${files.length} submission(s), ${publishable} approved for publication.`);
