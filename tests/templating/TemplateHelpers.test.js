import * as Fixtures from "../fixtures"
//
import * as TemplateHelpers from "../../src/templating/TemplateHelpers"
import * as Templates from "../../src/templating/Templates"

const { PurchaseTableMD } = Fixtures

const { formatTable } = TemplateHelpers

describe("TemplateHelpers toolkit", () => {
  describe("formatting Markdown", () => {
    describe("table", () => {
      const tbl = formatTable(Templates.PurchaseTable, Fixtures.SimplePurchaseData)

      const [header, headerSep, row1, row2, row3, row4] = tbl.split(/\n/g)

      it("renders a purchase order", () => {
        const output = formatTable(Templates.PurchaseTable, Fixtures.SimplePurchaseData)
        const expected = PurchaseTableMD.doc
        expect(output).to.eql(expected)
      })

      it("header", () => {
        expect(header).to.eql(PurchaseTableMD.header)
      })
      it("headerSep", () => {
        expect(headerSep).to.eql(PurchaseTableMD.headerSep)
      })
      it("row1", () => {
        expect(row1).to.eql(PurchaseTableMD.row1)
      })
      it("row2", () => {
        expect(row2).to.eql(PurchaseTableMD.row2)
      })
      it("row3", () => {
        expect(row3).to.eql(PurchaseTableMD.row3)
      })
      it("row4", () => {
        expect(row4).to.eql(PurchaseTableMD.row4)
      })
    })
  })
})
