/*

main.js
  main code

*/

let top_obj
let middle_obj
let bottom_obj
let window_obj
let mathjax_working = false
{
  let efunc = () => { refresh_top_obj() }
  let domBox = document.getElementById("domBox")
  top_obj = new set_ele_M(domBox, "main_screen", "main_screen", "p")
  bottom_obj = new editor_M(domBox, "editor", "editor", "div", efunc)
  bottom_obj.start()
  middle_obj = new shortcut_M(domBox, "shortcut_buttons",
    "shortcut_buttons", "p", bottom_obj)

  window_obj = new window_M(top_obj, middle_obj, bottom_obj, efunc)
}

function refresh_top_obj() {
  if (mathjax_working === true) {
    setTimeout(refresh_top_obj, 1000)
  }
  else {
    mathjax_working = true
    top_obj.set_content("\\[" + bottom_obj.obj.innerText + "\\]")
    MathJax.typesetPromise([top_obj.obj]).finally(() => { mathjax_working = false })
  }
}

