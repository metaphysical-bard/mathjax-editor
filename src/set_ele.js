/*

set_ele.js
  control dom obj

*/

class set_ele_M {
  constructor(parentElement, style, id, type) {
    this.obj = document.createElement(type)
    this.obj.id = id
    this.obj.style.position = "fixed"
    this.obj.classList.add(style)
    parentElement.appendChild(this.obj)
  }

  move(x, y, w, h) {
    this.obj.style.left = x + "px"
    this.obj.style.top = y + "px"
    this.obj.style.width = w + "px"
    this.obj.style.height = h + "px"
  }

  set_content(str){
    this.obj.textContent = str
  }
}

