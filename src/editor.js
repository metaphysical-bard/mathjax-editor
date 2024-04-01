/*

editor.js
  control text box obj

*/

class editor_M extends set_ele_M {
  constructor(parentElement, style, id, type, efunc) {
    super(parentElement, style, id, type)
    this.obj.contentEditable = "true"
    this.obj.spellcheck = false

    this.efunc = efunc
    this.short_mat = new shortcut_matrix_M()
    this.editor_isComposing = false

    this.observer = new MutationObserver(() => {
      let flag = true
      for (let i of this.obj.childNodes) {
        if (i.nodeName === "PRE") {
          flag = false
          break
        }
      }
      if (flag === true) {
        this.obj.innerHTML = ""
        this.add_ele()
        this.reform()
      }
    })
    this.observer.observe(this.obj, { childList: true, attributes: false, subtree: false })

    this.obj.addEventListener("click", () => { this.short_mat.reset() })
    this.obj.addEventListener("compositionstart", () => { this.editor_isComposing = true })
    this.obj.addEventListener("compositionend", () => { this.editor_isComposing = false })
    this.obj.addEventListener("dragover", (event) => { event.preventDefault() })
    
    this.obj.addEventListener("keydown", (event) => {
      let str = this.short_mat.put(event.key)
      let ch = this.move_caret(event.key, event.shiftKey)
      if (str !== "") {
        event.preventDefault()
        this.reform(str)
      }
      else if (ch === true) {
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
    })
    
    this.obj.addEventListener("keyup", (event) => {
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
    
    this.obj.addEventListener("paste", (event) => {
      event.preventDefault()
      let text = this.change_newline(event.clipboardData.getData("text/plain"))
      this.reform(text)
      this.short_mat.reset()
    })
    
    this.obj.addEventListener("drop", (event) => {
      event.preventDefault()
      let sel = window.getSelection()
      let text = this.change_newline(event.dataTransfer.getData("text/plain"))
      if (sel.rangeCount === 0) {
        let range = new Range()
        range.setStart(this.obj.childNodes[0], 0)
        range.setEnd(this.obj.childNodes[0], 0)
        sel.addRange(range)
        text += "\n"
      }
      this.reform(text)
      this.short_mat.reset()
    })
  }

  start() {
    this.add_ele()
    this.reform(
      "\n\\begin{align}\n" +
      "\te^{i\\theta}\n" +
      "\t\t&= \\cos{\\theta} + i\\sin{\\theta} \\\\\n" +
      "\te^{i\\pi}\n" +
      "\t\t&= -1 + 0 \\\\\n" +
      "\t\t&= -1\n" +
      "\\end{align}\n")
  }

  add_ele(str = "% write code here ") {
    let co = document.createElement("pre")
    co.textContent = str
    this.obj.appendChild(co)

    let sel = window.getSelection()
    let range = undefined
    if (sel.rangeCount === 0) {
      range = new Range()
      sel.addRange(range)
    }
    else { range = sel.getRangeAt(0) }
    range.setStart(co.childNodes[0], co.childNodes[0].length)
    range.setEnd(co.childNodes[0], co.childNodes[0].length)
    this.reform()
  }

  change_newline(str) {
    return str
      .replace(/(\r\n|¥r¥n)/gu, "\n")
      .replace(/(\r|¥n|¥r)/gu, "\n")
  }

  editor_focus(range) {
    let co = range.endContainer
    if (co.nodeName === "BR") {
      co.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" })
    }
    else {
      let obj = document.createElement("span")
      range.insertNode(obj)
      obj.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" })
      obj.parentElement.removeChild(obj)
    }
  }

  formatTex(str) {
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

  serch_caret(ps = { container: undefined, offset: 0, target: 0 }) {
    if (ps.container.nodeType === Node.TEXT_NODE) {
      ps.offset += ps.container.length
      if(ps.offset >= ps.target) {
        ps.offset = ps.target + ps.container.length - ps.offset
        ps.target = -1
      }
    }
    else {
      let node = ps.container
      for (let i of node.childNodes) {
        ps = this.serch_caret({ container: i, offset: ps.offset, target: ps.target })
        if (ps.target === -1) { break }
      }
    }
    return ps
  }

  get_row(tar) {
    let obj = this.obj.childNodes
    let row_num = 0
    while (true) {
      if (tar.parentNode === this.obj) {
        for (row_num = 0; row_num < obj.length; row_num++)
          { if (obj[row_num] === tar) { break } }
        break
      }
      tar = tar.parentNode
    }
    return row_num
  }

  move_caret(key, shift_key) {
    let row_add = 0
    if (key === "ArrowUp") { row_add-- }
    else if (key === "ArrowDown") { row_add++ }
    else {
      this.caret_offset = undefined
      return false
    }
    
    let obj = this.obj.childNodes
    let sel = window.getSelection()
    let range = sel.getRangeAt(0)
    let sa = { node: sel.anchorNode, offset: sel.anchorOffset }
    let sf = { node: sel.focusNode, offset: sel.focusOffset }

    let pf = { row: this.get_row(sf.node), offset: 0 }
    range.setStart(obj[pf.row], 0)
    range.setEnd(sf.node, sf.offset)
    pf.offset = range.toString().length

    if (this.caret_offset === undefined) { this.caret_offset = pf.offset }
    pf.offset = this.caret_offset

    pf.row += row_add
    if (pf.row < 0) { pf = { row: 0, offset: 0 } }
    else if (pf.row >= obj.length) { pf = { row: obj.length - 1, offset: Infinity } }
    let p = this.serch_caret({ container: obj[pf.row], offset: 0, target: pf.offset })
    if (p.target !== -1) {
      if (p.container.nodeName === "#text") { p.offset = p.container.length }
      else { p.offset = p.container.childNodes.length }
    }
    range.setStart(p.container, p.offset)
    range.setEnd(p.container, p.offset)
    this.editor_focus(range)

    if (shift_key === true) {
      range.setStart(sa.node, sa.offset)
      range.setEnd(sa.node, sa.offset)
      sel.extend(p.container, p.offset)
    }
    return true
  }

  get_caret(range) {
    let tar = range.endContainer
    let obj = this.obj.childNodes
    let row_num = 0
    let p = 0
    if (tar === this.obj) {
      console.log("error??")
      range.setStart(obj[0], 0)
      range.setEnd(obj[0], 0)
    }
    else {
      row_num = this.get_row(tar)
      range.setStart(obj[row_num], 0)
      p = range.toString().length
      range.setStart(range.endContainer, range.endOffset)
    }
    return { row: row_num, pos: p }
  }

  set_caret(range, tar = { row: 0, pos: 0 }) {
    let obj = this.obj.childNodes
    let p = this.serch_caret({ container: obj[tar.row], offset: 0, target: tar.pos })
    range.setStart(p.container, p.offset)
    range.setEnd(p.container, p.offset)
  }

  insertText(range, tar, str) {
    let obj = this.obj.childNodes[tar.row]
    let l = str.replace(/[^\n]/gu, "").length
    if (l > 0) { tar.pos = str.replace(/.*\n/gu, "").length }
    else { tar.pos += str.length }
    tar.row += l

    str = str.replace(/\n/gu, "\n\n")
    if (range.endContainer.nodeName === "BR") { obj.innerHTML = str + "\n" }
    else { range.insertNode(document.createTextNode(str)) }
    return tar
  }

  deleteContents(range) {
    let obj = this.obj.childNodes
    let sl = this.get_row(range.startContainer)
    let fl = this.get_row(range.endContainer)

    let so = { container: range.startContainer, offset: range.startOffset }
    let fo = { container: range.endContainer, offset: range.endOffset }
    range.setStart(obj[sl], 0)
    range.setEnd(so.container, so.offset)
    let pos = range.toString().length
    range.setStart(so.container, so.offset)
    range.setEnd(fo.container, fo.offset)

    range.deleteContents()
    if (sl !== fl) {
      obj[sl].innerText = obj[sl].innerText + obj[sl + 1].innerText
      obj[sl + 1].parentElement.removeChild(obj[sl + 1])
    }
    let ps = this.serch_caret({ container: obj[sl], offset: 0, target: pos })
    range.setStart(ps.container, ps.offset)
    range.setEnd(ps.container, ps.offset)
  }

  reform(str = "") {
    let range = window.getSelection().getRangeAt(0)
    if (str !== "") { this.deleteContents(range) }
    let tar = this.get_caret(range)
    if (str !== "") { tar = this.insertText(range, tar, str) }
    this.obj.innerHTML = this.formatTex(this.obj.innerText)
    this.set_caret(range, tar)
    this.editor_focus(range)
    this.efunc()
  }
}

