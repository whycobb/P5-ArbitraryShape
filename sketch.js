//variables for the arrow
var myShape;
var aSize;

function setup() {
    //put setup code here
    createCanvas(500, 300);
    
    aSize = 4; //size multiplier for the arrow
    
    //creates the arrow object (you must have declared it at the top of your program!!)
    myShape = new ArbitraryShape(10, 10, aSize, 30, 255, 255, 0);
    
    myShape.addPoint(50, -20);
    myShape.addPoint(-50, -20);
    myShape.addPoint(0, 50);
}

function draw() {
    clear();
    noStroke();
    
    //!!!ALL CODE BELOW THIS POINT IS FOR DRAWING THE ARROW!!!
    
    
    //this draws the shape
    myShape.draw();
    
    //this moves the shape down and to the right each frame
    myShape.move(1, 1);
    
    //this rotates the shape one tenth of a radian counterclockwise
    myShape.rotate(0.1);
    
    //this sets the shape's size multiplier to lSize (a float)
    myShape.resize(aSize);
    
    //this is a demonstration of changing the shape's size, mess around with the value to see how it works.
    aSize *= 0.99;
}