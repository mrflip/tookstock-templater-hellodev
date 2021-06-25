import _ /**/ from "lodash"
import FS from "fs"
//
export * from "./PurchaseData"

export function loadPurchaseTableMD() {
  const doc = FS.readFileSync("./tests/fixtures/PurchaseTable.md.txt").toString()
  const [header, headerSep, row1, row2, row3, row4, footerSep, footer] = doc.split(/\n/g)
  return { doc, header, headerSep, row1, row2, row3, row4, footerSep, footer }
}

export function loadPurchaseTableHtml() {
  const doc = FS.readFileSync("./tests/fixtures/PurchaseTable.html.txt").toString()
  return { doc }
}

export const PurchaseTableHtml = loadPurchaseTableHtml()
export const PurchaseTableMD = loadPurchaseTableMD()
