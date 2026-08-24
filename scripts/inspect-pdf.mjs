import fs from "fs";
import path from "path";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const pdf1Path = "C:\\Users\\Ali\\.gemini\\antigravity\\brain\\4b9cc9aa-ac70-4953-8bef-eab049e8817f\\.user_uploaded\\media_1787558718804.pdf";
const pdf2Path = "C:\\Users\\Ali\\.gemini\\antigravity\\brain\\4b9cc9aa-ac70-4953-8bef-eab049e8817f\\.user_uploaded\\media_1787558718439.pdf";

async function dumpPdf(filePath, label) {
  console.log(`=== Inspecting ${label} ===`);
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  console.log(`Pages: ${doc.numPages}`);
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    console.log(`--- Page ${i} (items: ${textContent.items.length}) ---`);
    const strings = textContent.items.map(item => item.str).filter(Boolean);
    console.log(strings.join(" "));
  }
}

async function main() {
  await dumpPdf(pdf1Path, "PDF 1");
  await dumpPdf(pdf2Path, "PDF 2");
}

main().catch(console.error);
