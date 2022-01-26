
var dragValue;
const box = document.querySelector("div.mazeContainer");
const rect = box.getBoundingClientRect();

var innerWalls = new Array(); // Declaring an array of the inner walls of the maze
setInnerWallRects();

function innerWall(xmin, xmax, ymin, ymax) {
    this.xmin = Math.round(xmin); //The left most part of the inner wall. (x coordinate)
    this.xmax = Math.round(xmax); //The right most part of the inner wall. (x coordinate)
    this.ymin = Math.round(ymin); //The highest part of the inner wall. (y coordinate)
    this.ymax = Math.round(ymax); //The lowest part of the inner wall. (y coordinate)
}

function setInnerWallRects() {
   var width = rect.width;
   var height = rect.height;

   //1st container is 70%, 15%
   // innerwall 1
   var xmax = rect.x + 0.7*width;
   var xmin = rect.x;
   var ymin = rect.top + 0.13*height;
   var ymax = ymin + 0.02*height;  // box is 2% thick
   var innerwall = new innerWall(xmin, xmax, ymin, ymax);
   innerWalls.push(innerwall);

   // innerwall 2
   xmin = rect.x + 0.3*width;
   xmax = rect.x + width;
   ymin = rect.top + 0.27*height;
   ymax = ymin + 0.01*height;  // box is 2% thick but 1% actually made it look better
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

   // innerwall 3
   xmin = rect.x;
   xmax = rect.x + 0.4*width;
   ymin = rect.top + 0.43*height;
   ymax = ymin + 0.01*height;  // box is 2% thick
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

   // innerwall 4
   xmin = rect.x + 0.7*width;
   xmax = rect.x + width;
   ymin = rect.top + 0.43*height;
   ymax = ymin + 0.01*height;  // box is 2% thick
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

   // innerwall 5
   xmin = rect.x + 0.3*width;
   xmax = rect.x + width;
   ymin = rect.top + 0.58*height;
   ymax = ymin + 0.01*height;  // box is 2% thick
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

   // innerwall 6
   xmin = rect.x;
   xmax = rect.x + 0.7*width;
   ymin = rect.top + 0.71*height;
   ymax = ymin + 0.01*height;  // box is 2% thick
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

   // endHole
   xmin = rect.x + 0.09*width;
   xmax = xmin + 0.05*width;
   ymin = rect.top + 0.83*height;
   ymax = ymin + 0.1*height; // Placing the ymax into the middle of the hole to ensure the circle goes into it.
   innerWalls.push(new innerWall(xmin, xmax, ymin, ymax));

}

function initialPosition(){
    var element = document.getElementById("circle")
    element.style.position = "absolute";
    element.style.top = "50%";
    element.style.left = "44%";
    move(element);
    drag = false;  // ***comment this out to cheat***
}

function move(element){
        element.onmousedown = function(){ // When mouse is down you can drag the circle
        dragValue = element;
    }
}

function elementDimensions(element){ // To retrieve the dimensions of the maze container and circle
    var widthOfElement = element.offsetWidth;
    var heightOfElement = element.offsetHeight;
    var leftOfElement = element.offsetLeft;
    var rightOfElement = element.offsetLeft + widthOfElement;
    var topOfElement = element.offsetTop;
    var bottomOfElement = element.offsetTop + heightOfElement;

    var dimensions = [leftOfElement, rightOfElement, topOfElement, bottomOfElement];
    return dimensions;
}

var drag = false; // Initialises the drag variable
document.onmouseup = function(e) { // When the mouse is up you cannot drag the circle
    dragValue = null;
    drag = false;
}

document.onmousedown = function(e) {
    drag = true;
    // we're only interested in mouse down and mouse move events (ie drag)
}



document.onmousemove = function(e) {
    var x = e.pageX; // The x coordinate of the circle relative to the whole page
    var y = e.pageY;

    if (drag == true) { // Only goes into here if you are dragging
        var container = document.getElementsByClassName('mazeContainer')[0];
        var containerDimensions = elementDimensions(container);

        var item = document.getElementById('circle');
        var itemDimensions = elementDimensions(item);

        //checks if they are touching
        checkInsideMaze(x, y, itemDimensions, containerDimensions);
    }

}

function checkInsideMaze(x, y, itemDimensions, mazeDimensions) {
    if (x > mazeDimensions[0] // Only goes in here if the circle is within the maze container
        && x + (itemDimensions[1] - itemDimensions[0]) < mazeDimensions[1]
        && y > mazeDimensions[2]
        && y + (itemDimensions[3] - itemDimensions[2]) < mazeDimensions[3]){

        let value = touchWall(x, y, itemDimensions); // Checks if the circle is touching any inner walls
        if (value>=1) { // Only goes into here if the circle has touched an inner maze wall
            initialPosition();
            return;
        }
        dragValue.style.left = x + "px"; // else the can move
        dragValue.style.top = y + "px";
    }
    else{
        initialPosition();
    }
}

function touchWall(x, y, circle) {
   var radius = Math.round(( circle[3] - circle[2] )/2); // finds the radius of the circle to check if the circle has touched the wall
   var values = 0;
   var numOfWalls = 0;
   this.innerWalls.forEach(function check(wall) {
        numOfWalls++;
        if (y + radius >= wall.ymin && y - radius <= wall.ymax  // checks if any part of the circle is in between the ymin and ymax of the wall.
        && wall.xmin < x && x < wall.xmax) { // x is in between the xmin and xmax of the wall. Don't need to use the radius here.
            if (numOfWalls == 7) { // If the circle touches the end hole it directs the user to the openFridge page.
                buttonClick();
                return values;
            }
           values = values+1;
        }

   });
   return values; // values will remain zero if the circle doesn't touch any walls
}

function buttonClick() { // goes to the open fridge page
    sessionStorage.setItem('gameCount',gameSecondCount);

    window.location.href = "openFridge.html";
}