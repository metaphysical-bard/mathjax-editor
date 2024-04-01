/*

shortcut_matrix.js
  shortcut matrix

*/

class shortcut_matrix_M {
  reset() {
    this.ary = { row: 0, col: 0, xflag: false }
  }

  uncheck() {
    if (this.timer_id !== undefined) {
      clearTimeout(this.timer_id)
      this.timer_id = undefined
    }
  }

  check() {
    this.uncheck()
    this.timer_id = setTimeout(() => { this.reset() }, 3000)
  }

  constructor() {
    this.reset()
  }

  put(key) {
    let num = Number(key)
    if (num === num) {
      if (this.ary.xflag === false) {
        this.ary.row = 10 * this.ary.row + num
      }
      else {
        this.ary.col = 10 * this.ary.col + num
      }
      this.check()
    }
    else if (key === "x") {
      this.ary.xflag = true
      this.check()
    }
    else if (key === "Enter" && this.ary.row !== 0 && this.ary.col !== 0) {
      this.ary.col -= 1

      let str = "\\begin{bmatrix}\n"
      for (let j = 0; j < this.ary.row; j++) {
        for (let i = 0; i < this.ary.col; i++) { str += " & " }
        str += " \\\\\n"
      }
      str += "\\end{bmatrix}"

      this.reset()
      this.uncheck()
      return str
    }
    else {
      this.reset()
      this.uncheck()
    }
    return ""
  }
}

