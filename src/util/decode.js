export function htmlDecodeByRegExp(v) {
  if (v.length == 0) return ''
  let temp = v
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
  return temp
}
