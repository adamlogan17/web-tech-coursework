window.addEventListener('load', function() {
  gTimer();
  setConnectorColours();
  timeSpent();
  positionElements();
  startingText = sessionStorage.getItem('name')+': Maybe if I connect these wires the lights will turn on.';
  consoleText(startingText,document.getElementById('textBox'));
});

document.getElementById('torchBox').addEventListener('mousemove',updateTorch);
document.getElementById('torchBox').addEventListener('touchmove',updateTorch);

document.getElementById('torchGameContainer').addEventListener('mousemove', continueToDraw);
document.getElementById('torchGameContainer').addEventListener('mouseup', endDrawing);

window.addEventListener('resize', function() {
  collideTextBox(false);
  positionElements();
});

var colour;

var startingPoint = [];

var canvas = document.getElementById('c1');

var ctx = null;

var connection = false;

var timer;

var time = 0;

function setConnectorColours() {
  var connecters = document.getElementById('torchTopRow').children;
  var endConnecters = document.getElementById('torchBottomRow').children;

  var visibleConnectors = document.getElementsByClassName('endPoint');

  var colours = [];

  var beenSelected = [];

  for(var i = 0; i<connecters.length; i++) {
    var similar = true;
    /* the following do while loop will check if if the random colour
      chosen is similar (I have decided to say it is similar if the r,g and b 
      values are within a 100 values of each other) to a colour already chosen */
    do {
      var hex = randHexCode();
      var rgb = hexToRgb(hex);
      // loops through each of the already chosen colours
      for(var i = 0; i<colours.length; i++) {
        var rgbOfExisting = hexToRgb(colours[i]);
        // loops through the rgb values to check if at least 1 value is not within the 100 range
        for(var j = 0; j<rgb.length; j++) {
          var difference = Math.abs(rgb[j] - rgbOfExisting[j]);
          if(difference < 100) {
            similar = true;
          } else {
            similar = false;
            break;
          }
        }
        /* if the colour chosen is found to be similar to one 
        there is no need to check the rest as it cannot be used */
        if(similar) {
          break;
        }
      }
    } while(similar && colours.length != 0);
    connecters[i].style.backgroundColor = hex; // as the invisible connectors will be used to trigger the event
    // the colour needs to be stored to make the drawn line the same colour
    colours.push(hex);
    connecters[i].style.opacity = 0; // needs to be made invisible again
    visibleConnectors[i].style.backgroundColor = hex;
    connecters[i].addEventListener('mousedown', startDrawing);
  }

  for(var i=0; i<colours.length; i++) {
  }

  for(var i = 0; i<endConnecters.length; i++) {
    do {
      var randColour = Math.random() * 3;
      randColour = Math.round(randColour);
    } while(beenSelected.includes(randColour));

    beenSelected.push(randColour);
    endConnecters[i].style.backgroundColor = colours[randColour];
    endConnecters[i].style.opacity = 0;
    visibleConnectors[i + 4].style.backgroundColor = colours[randColour];
    endConnecters[i].addEventListener('mouseup', connectionMade);
  }
}

function startDrawing(e) {
    ctx = canvas.getContext('2d');

    colour = this.style.backgroundColor;

    canvas.style.display = 'initial';
    canvas.style.zIndex = 1;
  
    var x = e.pageX - canvas.offsetLeft; // both of these values should be correct and yet x is incorrect
    var y = e.pageY - canvas.offsetTop; 
  
    startingPoint = [x, y]; // stores the point at which the mouse was clicked

    e.preventDefault();
}

function continueToDraw(e) {
  // if the context (ctx) is null that means the user has not clicked on the page
  // and therefore should not be able to draw.
  if(ctx != null) {
    // the 2 lines below get the current position of the mouse and 
    // tracks this as the mouse moves
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight); /* clears the canvas every time the mouse 
                                                                     moves and therefore there is only ever 
                                                                     1 line of the canvas at one time */
    ctx.strokeStyle = colour;
    ctx.lineWidth = document.getElementsByClassName('torchEndPoint')[0].offsetWidth;

    ctx.beginPath(); // starts the drawing
    ctx.moveTo(startingPoint[0], startingPoint[1]); // starts the line of the position where the mouse is clicked
    ctx.lineTo(x, y); // draws the line to the current position of the mouse
    ctx.stroke(); // ends the drawing
  }
}

function endDrawing() {
  if(ctx != null) {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx = null;
  }
}

function connectionMade() {
  if(ctx != null) {
    var rgbOfBackground = getValuesFromRGB(this.style.backgroundColor);
    var hexOfBackground = rgbToHex(rgbOfBackground);
    // ctx.strokeStyle always returns a hex and therefore the rgb value needs to be converted
    if(hexOfBackground != ctx.strokeStyle) {
      endDrawing();
    } else {
      connection = true;
      ctx = null;
      var audio = new Audio('audio/Buzzer1.mp3');
      audio.play();
      var currentID = canvas.id;
      if ((parseInt(currentID[1]) + 1) < 5) {
        var nextID = 'c' + (parseInt(currentID[1]) + 1);
        canvas = document.getElementById(nextID);
      } else {
        var torchBox = document.getElementById('torchBox');
        torchBox.style.opacity = 0;
        sessionStorage.setItem('isLightsOn', 'true');

        var text = sessionStorage.getItem('name')+': Now the lights are back on I can go look for my coat!'; 
        consoleText(text,document.getElementById('textBox'));
        setTimeout(function() {
          sessionStorage.setItem('fuseBoxTime', time);
          clearInterval(timer);
          sessionStorage.setItem('gameCount',gameSecondCount);
          window.open('basement.html', '_self');
        }, (text.length+1)*60);
      }
    }
  }
}

function positionDrawingArea() {
  var areas = document.getElementsByClassName('drawingArea');
  for(var i = 0; i<areas.length; i++) {
    areas[i].style.display = 'initial'; // this will display each canvas inturn to keep the offset value the same for all canvas'
    
    areas[i].style.position = 'absolute';
    areas[i].style.top = document.getElementById('gameContainer').offsetTop + 'px';
    areas[i].style.left = document.getElementById('gameContainer').offsetLeft + 'px';

    // Note that the canvas height and width needs to be set as html attributes
    // as drawing on the canvas will not work otherwise. 
    areas[i].width = document.getElementById('gameContainer').offsetWidth;
    areas[i].height = document.getElementById('gameContainer').offsetHeight;
  }
}

function placeElementOnAnother(element, existingElement) {
    
  element.style.position = 'absolute';

  element.style.top = existingElement.offsetTop + 'px';
  element.style.left = existingElement.offsetLeft + 'px';

  // Note that the canvas height and width needs to be set as html attributes
  // as drawing on the canvas will not work otherwise. 
  if(element.tagName == 'CANVAS') {
    element.width = existingElement.offsetWidth;
    element.height = existingElement.offsetHeight;
  } else {
    element.style.position = 'absolute';
    element.style.width = existingElement.offsetWidth + 'px';
    element.style.height = existingElement.offsetHeight + 'px';
  }

  element.style.display = 'initial'; // this will display each canvas inturn to keep the offset value the same for all canvas'
}

function positionElements() {
  placeElementOnAnother(document.getElementById('torchBox'), document.getElementById('fuseBox'));
  var canvases = document.getElementsByClassName('drawingArea');
  var gameContainer = document.getElementById('gameContainer');
  canvas = document.getElementById('c1');
  if(connection) {
    alert('All connections have been erased!');
    connection = false;
  }
  for(var i = 0; i<canvases.length; i++) {
    placeElementOnAnother(canvases[i], gameContainer);
  }
}

function timeSpent() {
  timer = setInterval(function() {
    time++;
  }, 1000);
}