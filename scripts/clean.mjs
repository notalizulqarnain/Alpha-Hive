import fs from "fs";
import path from "path";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!file.includes("node_modules") && !file.includes(".next") && !file.includes(".git")) {
        results = results.concat(walk(full));
      }
    } else if (/\.(tsx?|css|m?js|json)$/.test(file)) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(process.cwd());
for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  // Ensure no trailing BOM or weird control chars
  const clean = content.replace(/^\uFEFF/, "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  fs.writeFileSync(f, clean, "utf8");
  console.log("Cleaned:", f);
}
