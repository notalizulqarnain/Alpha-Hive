import fs from "fs";
import path from "path";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";

const outputDir = "scripts/pdf_renders";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function renderPdf(filePath, prefix) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  console.log(`${prefix}: ${doc.numPages} pages`);

  for (let i = 1; i <= Math.min(doc.numPages, 6); i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");

    await page.render({
      canvasContext: ctx,
      viewport: viewport,
    }).promise;

    const outPath = path.join(outputDir, `${prefix}_page_${i}.png`);
    fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
    console.log(`Saved: ${outPath}`);
  }
}

async function main() {
  const pdf1 = "C:\\Users\\Ali\\.gemini\\antigravity\\brain\\4b9cc9aa-ac70-4953-8bef-eab049e8817f\\.user_uploaded\\media_1787558718804.pdf";
  const pdf2 = "C:\\Users\\Ali\\.gemini\\antigravity\\brain\\4b9cc9aa-ac70-4953-8bef-eab049e8817f\\.user_uploaded\\media_1787558718439.pdf";

  await renderPdf(pdf1, "pdf1");
  await renderPdf(pdf2, "pdf2");
}

main().catch(console.error);
