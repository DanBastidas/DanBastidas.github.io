
var lines = []

function setup() {
  img = loadImage('lol_map.jpg')
  createCanvas(800, 800);
  sliders()
}

function draw() {
  background(220);
  showMap()
  mouseClick()
  for(let line of lines){
    line.show()
  }
}

function mouseClick(){
  if(mouseIsPressed && winMouseY < 569){

    lines.push(new MyLine())
  }
}

function sliders(){
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(0, 600);
}

function loadMap(){
  
}

function showMap(){
  image(img,0,0)
}