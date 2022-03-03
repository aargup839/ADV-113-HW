function preload() {
    
}
function setup() {
    canvas=createCanvas(800,500);
    canvas.position(110,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,210, 70,300,300);
    let c = color(0, 255, 255);
    ellipse(150, 40, 55);
    ellipse(570, 40, 55);
    ellipse(150, 420, 55);
    ellipse(570, 420, 55);
    fill(c);
    let x = color(255, 0, 255);
    rect(175, 25, 370, 30);
    rect(135, 65, 30, 330);
    rect(555, 65 , 30, 330);
    rect(175, 405, 370, 30);
    fill(x);
}
function take_snapshot() {
    save("myimage.png");
}