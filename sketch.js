
var brain;

function setup(){

    brain = new NeuralNetwork(3,3,1);
}
function draw(){
    background(100,500);
    circle(mouseX, mouseY, 50); 
}