import _ /**/ from "lodash"
//
import * as Fixtures from "../fixtures"
//
import * as Templaters from "../../src/handlers/templaters"
import * as Templates from "../../src/templating/Templates"
import { expect } from "chai"

const { PurchaseTableMD } = Fixtures

describe("Templaters", () => {
  describe("for Markdown", () => {
    describe("tables", () => {
      it("handles a simple format simply", () => {
        const tableData = Fixtures.SimplePurchaseData
        const tableSpec = Templates.PurchaseTable

        const query = {
          templateName: "PurchaseTable",
          tableData,
          tableSpec,
        }
        const body = Templaters.MarkdownTable(query)
        expect(body).to.eql(PurchaseTableMD.doc)
      })
    })
  })
})
