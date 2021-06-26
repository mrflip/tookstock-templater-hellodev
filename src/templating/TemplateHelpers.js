import _ from "lodash"

// Given a field configuration
//
// ```
//   { fields: {
//     productCode: { len: 16, human: "Product Code" },
//     title: { len: 28, human: "Product Name" },
//     unitPrice: { len: 12, as: "price" },
//     quantity: { len: 8, as: "int" },
//     totalPrice: { len: 14, as: "price" },
//   } }
// ```
//
// and matching data
//
// ```
// [
//   { title: "Apples", unitPrice: "1.25", quantity: 7, totalPrice: "8.75", productCode: "A45738" },
//   { title: "Really Expensive Thing", unitPrice: "123,456.78", quantity: 10, totalPrice: "1,234,567.80" productCode: "A9683/BK/W" },
// ]
// ```
//
// Return a markdown-formatted table:
//
// ```
// |   Product Code   |         Product Name         |  Unit Price  | Quantity |  Total Price   |
// | ---------------- | ---------------------------- | ------------ | -------- | -------------- |
// | A45738           | Apples                       | $       1.25 |        7 | $         8.75 |
// | A9683/BK/W       | Really Expensive Thing       | $ 123,456.78 |       10 | $ 1,234,567.80 |
// | LONG-TITLE       | This Title is just way too long but we're ready for it anyway | $       1.00 |        4 | $         4.00 |
// | YIKES            | SUUUPER Expensive Thing      | $ 1,234,567.89 |       10 | $ 12,345,678.90 |`
// ```
//
//
// - if the fieldSpec has a 'human' value, use that as the title; otherwise, use the startCase helper from lodash to format it using the field name.
// - Lodash has methods for _.pad, _.padStart, \_.padEnd to center/left/right align a string.
// - titles should be centered
// - for a `price` field, right-align it and prepend '\$ '
// - for an `int` field, right-align it.
// - all other data rows should be left-aligned
//
export function formatTable(tableSpec, tableData) {
  //
  // !! IMPORTANT !!
  //
  // You do not need to satisfy the whole spec above --
  // just make all the tests pass.

  return dummyData
}

const dummyData = `|   Product Code   |         Product Name         |  Unit Price  | Quantity |  Total Price   |
| ---------------- | ---------------------------- | ------------ | -------- | -------------- |
| A45738           | Apples                       | 1.25         | 7        | 8.75           |
| A9683/BK/W       | Really Expensive Thing       | 123,456.78   | 10       | 1,234,567.80   |
| LONG-TITLE       | This Title is just way too long but we're ready for it anyway | 1.00         | 4        | 4.00           |
| YIKES            | SUUUPER Expensive Thing      | 1,234,567.89 | 10       | 12,345,678.90  |`
