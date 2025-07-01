/*

editor_M.js

*/

class editor_M extends set_ele_M {
  constructor(parentElement, style, id, type, formatStr = () => {}, str = "", tag = "pre", keyEvent = { put : () => { return "" }, reset : () => {} }, efunc = () => {}) {
    super(parentElement, style, id, type)
    this.ele = this.obj
    this.formatStr = formatStr
    this.keyEvent = keyEvent
    this.efunc = efunc
    this.range = new range_M(this.ele)

    this.ele.contentEditable = "true"
    this.ele.spellcheck = false
    this.editor_isComposing = false

    let co = document.createElement(tag)
    co.textContent = str
    this.ele.appendChild(co)

    this.obj.addEventListener("click", () => { this.keyEvent.reset() })
    this.ele.addEventListener("compositionstart", () => { this.editor_isComposing = true })
    this.ele.addEventListener("compositionend", () => { this.editor_isComposing = false })
    this.ele.addEventListener("dragover", (event) => { event.preventDefault() })
    
    this.ele.addEventListener("keydown", (event) => {
      let str = this.keyEvent.put(event.key)
      if (str !== "") {
        event.preventDefault()
        this.reform(str)
      }
      else if (this.moveCaret(event.key, event.shiftKey) === true) {
        event.preventDefault()
      }
      else if (event.key === "Tab") {
        event.preventDefault()
        this.reform("\t")
      }
      else if (event.key === "Enter") {
        event.preventDefault()
        this.reform("\n")
      }
      else if (event.key === "Backspace") {
        event.preventDefault()
        this.reform("", -1)
      }
      else if (event.key === "Delete") {
        event.preventDefault()
        this.reform("", 1)
      }
    })
    
    this.ele.addEventListener("keyup", (event) => {
      let flag = true
      if (event.isComposing === true || event.key === "Process"
        || event.keyCode === 229 || this.editor_isComposing === true) {
        flag = false
      }
      else if (event.shiftKey === true
          || event.ctrlKey === true
          || event.altKey === true) {
        flag =false
      }
      else {
        let ary = [
          "Enter", "Backspace", "Delete", "Shift", "Control",
          "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft",
          "Home", "End", "PageUp", "PageDown", "Alt",
          "Hankaku", "Zenkaku", "Convert", "NonConvert",
          "ContextMenu", "Meta", "Escape", "Dead" ]
        for (let i = 0; i < ary.length; i++) {
          if(event.key === ary[i]) {
            flag = false
            break
          }
        }
      }
    
      if (flag === true) { this.reform() }
      this.efunc()
    })
    
    this.ele.addEventListener("paste", (event) => {
      event.preventDefault()
      let text = this.changeNewline(event.clipboardData.getData("text/plain"))
      this.reform(text)
      this.keyEvent.reset()
    })
    
    this.ele.addEventListener("drop", (event) => {
      event.preventDefault()
      let sel = window.getSelection()
      let text = this.changeNewline(event.dataTransfer.getData("text/plain"))
      if (sel.rangeCount === 0) {
        let range = new Range()
        range.setStart(this.ele.childNodes[0], 0)
        range.setEnd(this.ele.childNodes[0], 0)
        sel.addRange(range)
        text += "\n"
      }
      this.reform(text)
      this.keyEvent.reset()
    })
  }

  changeNewline(str) {
    return str
      .replace(/(\r\n|¥r¥n)/gu, "\n")
      .replace(/(\r|¥n|¥r)/gu, "\n")
  }

  moveCaret(key, shiftKey) {
    let rowAdd = 0
    if (key === "ArrowUp") { rowAdd-- }
    else if (key === "ArrowDown") { rowAdd++ }
    else {
      this.caretOffset = undefined
      return false
    }
    
    let obj = this.ele.childNodes
    let pos = this.range.get()

    if (this.caretOffset === undefined) { this.caretOffset = pos.endCol }
    pos.endCol = this.caretOffset

    pos.endRow += rowAdd
    if (pos.endRow < 0) { pos.endRow = 0, pos.endCol = 0 }
    else if (pos.endRow >= obj.length) { pos.endRow = obj.length - 1, pos.endCol = Infinity }
    if (shiftKey === false) { pos.startRow = pos.endRow, pos.startCol = pos.endCol }

    this.range.set(pos)
    this.range.focus()
    return true
  }

  deleteContents(pos, offset) {
    let obj = this.ele.childNodes
    if(offset !== 0 && pos.startRow === pos.endRow && pos.startCol === pos.endCol) {
      pos.startCol += offset
      if (pos.startCol < 0) {
        if (pos.startRow === 0) { pos.startCol = 0 }
        else {
          pos.startRow -= 1
          pos.startCol = obj[pos.startRow].innerText.length
        }
      }
      else if (pos.startCol > obj[pos.startRow].innerText.length) {
        if (pos.startRow === (obj.length - 1)) { pos.startCol -= offset }
        else {
          pos.startRow += 1
          pos.startCol = 0
        }
      }
    }
    let flag = true
    if (offset === 1 && obj[pos.startRow].innerText === "\n") {
      if (pos.startRow < obj.length - 1) { flag = false }
    }
    pos = this.range.deleteContents(pos)
    if (obj[pos.startRow].innerHTML === "" && flag) {
      obj[pos.startRow].innerHTML = "<br>"
    }
    return pos
  }

  reform(str = "", offset = 0) {
    let obj = this.ele.childNodes
    let pos = this.range.get()
    pos = this.deleteContents(pos, offset)
    if (str !== "") {
      pos = this.range.insertText(pos, str)
    }
    this.ele.innerHTML = this.formatStr(this.ele.innerText)
    this.range.set(pos)
    this.range.focus()
    this.efunc()
  }
}

