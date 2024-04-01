/*

window.js
  control window

*/

class window_M {
  constructor(top_obj, middle_obj, bottom_obj, func) {
    this.to = top_obj
    this.mo = middle_obj
    this.bo = bottom_obj
    this.func = func
    this.area_ratio = { type: true, pw: 0.7, ph: 0.5, sh: 0.3, sh2: 0.3 }
    this.point_flag = [ false, false ]
    this.point = [ this.create_point(0), this.create_point(1) ]
    this.resize()

    window.addEventListener("resize", () => { this.resize() })
  }

  range(num, max = 0.9, min = 0.1) {
    return Math.min(Math.max(num, min), max)
  }

  create_point(id) {
    let obj = document.createElement("p")
    obj.id = "point" + id
    obj.style.position = "fixed"
    obj.classList.add("point")
    document.getElementById("domBox").appendChild(obj)
    let efunc = (event) => {
      let p = {
        x: event.clientX, w: document.documentElement.clientWidth,
        y: event.clientY, h: document.documentElement.clientHeight}
      if (this.area_ratio.type === true) {
        if (id === 1) { this.area_ratio.pw = this.range(p.x / p.w) }
        this.area_ratio.ph = this.range(p.y / p.h)
      }
      else {
        if (id === 0) { this.area_ratio.sh = this.range(p.y / p.h, 0.4) }
        else { this.area_ratio.sh2 = this.range(p.y /p.h - this.area_ratio.sh, 0.5) }
      }
      this.resize()
    }

    obj.addEventListener("pointerdown", (event) => {
      this.point_flag[id] = true
      efunc(event)
    })

    window.addEventListener("pointermove", (event) => {
      if(this.point_flag[id] === true) { efunc(event) }
    })

    window.addEventListener("pointerup", (event) => {
      if(this.point_flag[id] === true) {
        this.point_flag[id] = false
        efunc(event)
      }
    })
    return obj
  }

  move_point(index, x, y) {
    this.point[index].style.left = (x - 5) + "px"
    this.point[index].style.top = (y - 5) + "px"
  }

  design(flag) {
    return flag ? "1px solid #808080" : "none";
  }

  border(style, top, btm, rgt, lef) {
    style.borderTop = this.design(top)
    style.borderBottom = this.design(btm)
    style.borderRight = this.design(rgt)
    style.borderLeft = this.design(lef)
  }

  resize() {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    if(w / h > 1.0) {
      let pw = Math.floor(w * this.area_ratio.pw)
      let ph = Math.floor(h * this.area_ratio.ph)
      this.to.move(0, 0, pw, ph)
      this.mo.move(pw, 0, w - pw, h)
      this.bo.move(0, ph, pw, h - ph)
      this.border(this.to.obj.style, false, true, true, false)
      this.border(this.mo.obj.style, false, false, false, true)
      this.border(this.bo.obj.style, true, false, true, false)
      this.move_point(0, pw / 2, ph)
      this.move_point(1, pw, ph)
      this.area_ratio.type = true
    }
    else {
      let ph = Math.floor(h * this.area_ratio.sh)
      let ph2 = Math.floor(h * this.area_ratio.sh2)
      this.to.move(0, 0, w, ph)
      this.mo.move(0, ph, w, ph2)
      this.bo.move(0, ph + ph2, w, h - (ph + ph2))
      this.border(this.to.obj.style, false, true, false, false)
      this.border(this.mo.obj.style, true, true, false, false)
      this.border(this.bo.obj.style, true, false, false, false)
      this.move_point(0, w / 2, ph)
      this.move_point(1, w / 2, ph + ph2)
      this.area_ratio.type = false
    }
    this.func()
  }
}

