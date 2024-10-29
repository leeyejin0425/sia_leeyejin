function preload() {
  img = loadImage('asset/doggy.jpg');
  }
  
  function setup() {
  createCanvas(800, 500, WEBGL);
  }
  
  function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  texture(img);
  box(200);
  }