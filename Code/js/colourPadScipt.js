document.getElementById('submit').addEventListener('click',submitFunc);
document.getElementById('colourBlind').addEventListener('click', colourBlindFunc);

window.addEventListener('resize', function() {
    checkSize(1100, 475, document.getElementById('colourPad'));
    collideTextBox(true);
});

window.addEventListener('load', function() {
    gTimer();
    timeSpent();
    accessabilityOptions();
    checkSize(1100, 475, document.getElementById('colourPad'));
    collideTextBox(true);
    changeButtonBackground();
    timerForText();
});

var timer;

var time = 0;

var colours = ['#0FF514', '#F50F0F', '#F78C05', 
    '#DDFF00', '#00FFFF', '#0204B5',
    '#FC03EC', '#693B0D', '#640BB3'];

var isColourBlind = false;

function changeButtonBackground() {
    var colourButtons = document.getElementsByClassName('colourButton');
    for(var i = 0; colourButtons.length > i; i++) {
        colourButtons[i].style.backgroundColor = colours[i];
        colourButtons[i].onclick = colourButtonClicked;
    }
}

function colourBlindFunc() {
    isColourBlind = true;
}

function submitFunc() {
    var colourButtons = document.getElementsByClassName('colourButton');
    var textScreen = document.getElementById('padScreen');
    var correctHex = sessionStorage.getItem('answer');
    for(var i = 0; colourButtons.length > i; i++) {
        if(colourButtons[i].clicked && colours[i] == correctHex) {
            textScreen.innerHTML = 'Success';
            setTimeout(function() {
                sessionStorage.setItem('cTime', time);
                clearInterval(timer);
                sessionStorage.setItem('gameCount',gameSecondCount);
                window.open('escape.html','_self');
            }, 1500);
        } else if(colourButtons[i].clicked) {
            textScreen.innerHTML = 'Wrong';
        }
        colourButtons[i].clicked = false;
    }
}

function colourButtonClicked() {
    var textScreen = document.getElementById('padScreen');
    var rgbOfButton = this.style.backgroundColor;

    textScreen.style.backgroundColor = rgbOfButton;

    var colourButtons = document.getElementsByClassName('colourButton');
    for(var i = 0; colourButtons.length > i; i++) {
        if(this == colourButtons[i]) {
            if (isColourBlind) {
                switch(colours[i]) {
                    case '#0FF514':
                        textScreen.innerHTML = 'Green';
                        break;
                    case '#F50F0F': 
                        textScreen.innerHTML = 'Red';
                        break;
                    case '#F78C05':
                        textScreen.innerHTML = 'Orange';
                        break;
                    case '#DDFF00':
                        textScreen.innerHTML = 'Yellow';
                        break;
                    case '#00FFFF':
                        textScreen.innerHTML = 'Cyan';
                        break;
                    case '#0204B5':
                        textScreen.innerHTML = 'Blue';
                        break;
                    case '#FC03EC':
                        textScreen.innerHTML = 'Pink';
                        break;
                    case '#693B0D':
                        textScreen.innerHTML = 'Brown';
                        break;
                    case '#640BB3':
                        textScreen.innerHTML = 'Purple';
                        break;
                    default:
                        textScreen.innerHTML = 'Unknown Colour';
                        break;
                }
            } else {
                textScreen.innerHTML = 'Select';
            }
        } 
        colourButtons[i].clicked = false;
    }

    this.clicked = true;
}

function checkSize(maxX, maxY, element) {
    var x = window.innerWidth;
    var y = window.innerHeight;

    if(x <= maxX) {
        element.style.width = element.offsetWidth + 'px';
    } else {
        element.style.width = '';
    }

    if(y <= maxY) {
        element.style.height = element.offsetHeight + 'px';
    } else {
        element.style.height = '';
    }
}

function timeSpent() {
    timer = setInterval(function() {
      time++;
    }, 1000);
}


/* The code below is XXXXX's code */

function timerForText() { 
    var startingText = sessionStorage.getItem('name')+': heads back over towards the front door and stops at the keypad';
    consoleText(startingText, document.getElementById('textBox'));
    setTimeout(next, 5000); 
} 

function next() {
    document.getElementById('textBox').innerHTML += "<br /><br /> <span></span>";
    var text =  sessionStorage.getItem('name')+': What could ' + sessionStorage.getItem('answer') + ' mean?';
    consoleText(text, document.getElementsByTagName('span')[0]);
}