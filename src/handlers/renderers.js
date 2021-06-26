import Showdown from "showdown"
// showdown docs: https://www.npmjs.com/package/showdown\

// given an object with one field:
//
// - markdownDoc, a blob of markdown text
//
// Directly return that text formatted as HTML.
//
export function MarkdownToHtml(data) {
  const { markdownDoc } = data
  // remove the following line and make all unit tests pass.
  return MarkdownToHtml_fake(data)
}

export function MarkdownToHtml_fake(data) {
  return '<h1 id="helloworld">Hello World!</h1>'
}
