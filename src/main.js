/*

main.js
  main code

*/

let top_obj
let middle_obj
let bottom_obj
let window_obj
let mathjax_working = false
let laststr = ""
let popstate = false
{
  let startStr =
    "% write code here " +
    "\n\\begin{align}\n" +
    "\te^{i\\theta}\n" +
    "\t\t&= \\cos{\\theta} + i\\sin{\\theta} \\\\\n" +
    "\te^{i\\pi}\n" +
    "\t\t&= -1 + 0 \\\\\n" +
    "\t\t&= -1\n" +
    "\\end{align}\n"
  let bottomEfunc = (log = true) => { refresh_top_obj(log) }
  let windowEfunc = (log = false) => { refresh_top_obj(log) }
  let formatTex = (str) => {
    str += "\n"
    return str
      .replace(/&/gu, "&amp;").replace(/</gu, "&lt;")
      .replace(/>/gu, "&gt;").replace(/"/gu, "&quot;")
      .replace(/(.+)\n/gu, "<pre>$1</pre>")
      .replace(/\n\n/gu, "<pre><br></pre>")
      .replace(/\n/gu, "")
      .replace(/(#[0-9a-fA-F]{6})/gu, "<span class=\"color\" style=\"background: $1;\"></span>$1")
      .replace(/(%[^<]*)/gu, "<span class=\"comment\">$1</span>")
      .replace(/(\{|\}|\[|\])/gu, "<span class=\"braces\">$1</span>")
      .replace(/\\\\/gu, "<span class=\"newline\">&#92;&#92;</span>")
      .replace(/(\\[^\s|\{|<|\[]+)(\s|\{|<|\[)/gu, "<span class=\"cmd\">$1</span>$2")
  }

  let params = new URLSearchParams(window.location.search)
  if (params.has("code")) { startStr = params.get("code") }

  let domBox = document.getElementById("domBox")
  top_obj = new set_ele_M(domBox, "main_screen", "main_screen", "p")
  bottom_obj = new editor_M(domBox, "editor", "editor", "div", formatTex,
    startStr, "pre", new shortcut_matrix_M(), bottomEfunc)
  bottom_obj.reform()
  middle_obj = new shortcut_M(domBox, "shortcut_buttons",
    "shortcut_buttons", "p", bottom_obj)

  window_obj = new window_M(top_obj, middle_obj, bottom_obj, windowEfunc)
}

function refresh_top_obj(log = false) {
  if (mathjax_working === true) {
    setTimeout(refresh_top_obj, 1000)
  }
  else {
    mathjax_working = true
    let str = bottom_obj.obj.innerText
    top_obj.set_content("\\[" + str + "\\]")
    MathJax.typesetPromise([top_obj.obj]).finally(() => { mathjax_working = false })
    if (laststr !== str) {
      laststr = str
      let nextUrl = location.href.split("?")[0] + "?" + (new URLSearchParams({ code : str })).toString()
      if (log === true && popstate === false) {
        history.pushState({}, "", nextUrl)
      }
      else {
        popstate = false
        history.replaceState({}, "", nextUrl)
      }
    }
  }
}

window.addEventListener("popstate", (event) => {
  popstate = true
  let str = "% write code here "
  let params = new URLSearchParams(window.location.search)
  if (params.has("code")) { str = params.get("code") }
  bottom_obj.ele.innerHTML = bottom_obj.formatStr(str)
  bottom_obj.range.focus()
  bottom_obj.efunc()
})

