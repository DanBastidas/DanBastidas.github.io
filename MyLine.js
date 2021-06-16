class MyLine {
  
  constructor(){
    this.px = pwinMouseX
    this.py = pwinMouseY
    this.x = winMouseX
    this.y = winMouseY
    this.color = colorPicker.color()
  }
  
  show(){
    strokeWeight(2)
    stroke(this.color)
    line(this.px,this.py,this.x,this.y)
  }
}