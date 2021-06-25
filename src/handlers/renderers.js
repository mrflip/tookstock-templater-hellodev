import Showdown from "showdown"
// showdown docs: https://www.npmjs.com/package/showdown\

export function MarkdownToHtml(data) {
  // remove the following line and make all unit tests pass.
  return MarkdownToHtml_fake(data)
}

export function MarkdownToHtml_fake(data) {
  return '<h1 id="helloworld">Hello World!</h1>'
}
