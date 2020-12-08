export function htmlDecodeByRegExp (v) {
    if (v.length == 0) return ""
    let temp = v.replace(/&amp;/g, "&")
    temp = temp.replace(/&lt;/g, "<")
    temp = temp.replace(/&gt;/g, ">")
    temp = temp.replace(/&nbsp;/g, " ")
    temp = temp.replace(/&#039;/g, "'")
    temp = temp.replace(/&quot;/g, "\"")
    return temp
}