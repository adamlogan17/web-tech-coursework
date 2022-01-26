window.addEventListener('resize', function() {
    keepAspectRatio();
    collideTextBox(true);
});
window.addEventListener('load', function() {
    gTimer();
    accessabilityOptions();
    timeSpent();
    checkLights();
    keepAspectRatio();
    collideTextBox(true);
});

document.getElementById('basement').addEventListener('mousemove',updateTorch);
document.getElementById('fuseButton').addEventListener('click', fuseClick);

var timer;

var time = 0;

function fuseClick() {
    if (sessionStorage.getItem('isLightsOn') != 'true') {
        sessionStorage.setItem('bTime', time);
        clearInterval(timer);
        sessionStorage.setItem('gameCount',gameSecondCount);
        window.open('fuseBox.html', "_self"); // with this the user can use the back button to return to basement.html
    }
}

function coatClick() {
    var lightsOffTime = sessionStorage.getItem('bTime');
    var fuseBoxTime = sessionStorage.getItem('fuseBoxTime');
    time = parseInt(time) + parseInt(lightsOffTime) + parseInt(fuseBoxTime);
    sessionStorage.setItem('bTime', time);
    clearInterval(timer);
    sessionStorage.setItem('gameCount',gameSecondCount);
    window.open('coatNote.html','_self');
}

function checkLights() {
    if(sessionStorage.getItem('isLightsOn') == 'true') {
        document.getElementById('coatButton').addEventListener('click', coatClick);
        var basement = document.getElementById('basement');
        basement.className = 'lightsOn';

        var buttons = document.getElementsByClassName('buttonInBasement');
        for(var i=0; i<buttons.length; i++) {
            buttons[i].style.cursor = 'initial';
        }

        var text2 = sessionStorage.getItem('name')+': Now the lights are back on I can find that note!';
        consoleText(text2,document.getElementById('textBox'));
    } 
    else {
        var startingText = sessionStorage.getItem('name')+': Oh no! The power is out down here! I should fix it BEFORE I find my coat! Maybe if I find the fuse box, I can turn the lights on';
        consoleText(startingText,document.getElementById('textBox'));
    }
}

function keepAspectRatio() {
    var basement = document.getElementById('basement');
    var width = window.innerWidth;
    var height = window.innerHeight;
    aspectRatio = width/height;
    if(aspectRatio < 2 || aspectRatio > 2.3) {
        basement.style.width = basement.offsetWidth + 'px';
        basement.style.height = basement.offsetHeight + 'px';
    } else {
        basement.style.height = '67%';
        basement.style.width = '40%';
    }
}

function timeSpent() {
    timer = setInterval(function() {
      time++;
    }, 1000);
}