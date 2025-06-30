/*

range.js

*/

class range_M {
  constructor(ele) {
    this.ele = ele
  }

  setup() {
    this.sel = window.getSelection()
    if (this.sel.rangeCount === 0) {
      this.range = new Range()
      this.sel.addRange(this.range)
      this.range.setStart(this.ele.childNodes[0], 0)
      this.range.setEnd(this.ele.childNodes[0], 0)
    }
    else { this.range = this.sel.getRangeAt(0) }
  }

  getRow(tar) {
    let obj = this.ele.childNodes
    let row_num = 0
    while (true) {
      if (tar.parentNode === this.ele) {
        for (row_num = 0; row_num < obj.length; row_num++)
          { if (obj[row_num] === tar) { break } }
        break
      }
      tar = tar.parentNode
    }
    return row_num
  }

  getEle(ps = { container: undefined, offset: 0, target: 0 }) {
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
        ps = this.getEle({ container: i, offset: ps.offset, target: ps.target })
        if (ps.target === -1) { break }
      }
    }
    return ps
  }

  get() {
    let obj = this.ele.childNodes
    let pos = {}
    this.setup()
    let rng_log = {
      startContainer : this.sel.anchorNode,
      startOffset : this.sel.anchorOffset,
      endContainer : this.sel.focusNode,
      endOffset : this.sel.focusOffset
    }

    pos.endRow = this.getRow(rng_log.endContainer)
    this.range.setStart(obj[pos.endRow], 0)
    this.range.setEnd(rng_log.endContainer, rng_log.endOffset)
    pos.endCol = this.range.toString().length

    pos.startRow = this.getRow(rng_log.startContainer)
    this.range.setStart(obj[pos.startRow], 0)
    this.range.setEnd(rng_log.startContainer, rng_log.startOffset)
    pos.startCol = this.range.toString().length

    this.sel.setBaseAndExtent(rng_log.startContainer, rng_log.startOffset, rng_log.endContainer, rng_log.endOffset)
    return pos
  }

  set(pos = { startRow : 0, startCol : 0, endRow : 0, endCol : 0 }) {
    let obj = this.ele.childNodes
    let ps = this.getEle({ container: obj[pos.startRow], offset: 0, target: pos.startCol })
    let pe = this.getEle({ container: obj[pos.endRow], offset: 0, target: pos.endCol })

    if (ps.target !== -1) {
      if (ps.container.nodeName === "#text") { ps.offset = ps.container.length }
      else { ps.offset = ps.container.childNodes.length }
    }
    if (pe.target !== -1) {
      if (pe.container.nodeName === "#text") { pe.offset = pe.container.length }
      else { pe.offset = pe.container.childNodes.length }
    }

    this.setup()
    this.sel.setBaseAndExtent(ps.container, ps.offset, pe.container, pe.offset)
  }

  deleteContents(pos = { startRow : 0, startCol : 0, endRow : 0, endCol : 0 }) {
    let obj = this.ele.childNodes
    if (pos.startRow === pos.endRow) {
      if (pos.startCol > pos.endCol) {
        [pos.endCol, pos.startCol] = [pos.startCol, pos.endCol]
      }
      let str = obj[pos.startRow].innerText
      obj[pos.startRow].innerText = str.slice(0, pos.startCol) + str.slice(pos.endCol)
    }
    else {
      if (pos.startRow > pos.endRow) {
        [pos.endRow, pos.startRow] = [pos.startRow, pos.endRow],
        [pos.endCol, pos.startCol] = [pos.startCol, pos.endCol]
      }
      obj[pos.startRow].innerText = obj[pos.startRow].innerText.slice(0, pos.startCol) + obj[pos.endRow].innerText.slice(pos.endCol)
      let srow = pos.startRow + 1
      for (let i = srow; i < (pos.endRow + 1); i++)
        this.ele.removeChild(obj[srow])
    }
    pos.endRow = pos.startRow
    pos.endCol = pos.startCol
    return pos
  }

  insertText(pos, str) {
    let obj = this.ele.childNodes[pos.endRow]
    let l = str.replace(/[^\n]/gu, "").length
    if (l > 0) { pos.endCol = str.replace(/.*\n/gu, "").length }
    else { pos.endCol += str.length }
    pos.endRow += l

    str = str.replace(/\n/gu, "\n\n")
    if (obj.innerText === "\n") { obj.innerHTML = str + "\n" }
    else {
      obj.innerHTML = obj.innerText.slice(0, pos.startCol) + str + obj.innerText.slice(pos.startCol)
    }
    
    pos.startRow = pos.endRow
    pos.startCol = pos.endCol
    return pos
  }

  focus() {
    this.setup()
    let co = this.range.endContainer
    if (co.nodeName === "BR") {
      co.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" })
    }
    else {
      let obj = document.createElement("span")
      this.range.insertNode(obj)
      obj.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" })
      obj.parentElement.removeChild(obj)
    }
  }
}

