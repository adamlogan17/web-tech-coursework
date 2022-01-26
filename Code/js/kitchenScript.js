var myEvent;
var roomTime;
var timing;

function buttonClick() {
    sessionStorage.setItem('gameCount',gameSecondCount);
    window.open('closedFridge.html','_self');
}

function load(text){
    gTimer();
    accessabilityOptions();
    if(sessionStorage.getItem('kTime') == 'NaN'){
        sessionStorage.setItem('kTime',0);
    }
    roomTime = setInterval('roomTimer()',1000);
    text = sessionStorage.getItem('name')+text;
    consoleText(text,document.getElementById('textBox'));
    if(document.title == 'Closed Fridge'){
        initialPosition();
        document.getElementById('circle').style.backgroundColor = sessionStorage.getItem('answer');
    }
}

function roomTimer(){
    timing = parseInt(sessionStorage.getItem('kTime'))+1;
    timingString = String(timing);
    sessionStorage.setItem('kTime',timingString);
    if(document.title == 'Basement'){
        clearInterval(roomTime);
    }
}