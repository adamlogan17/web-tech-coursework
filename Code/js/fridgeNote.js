
function buttonClick() {
    sessionStorage.setItem('gameCount',gameSecondCount);
    window.open("basement.html","_self"); 
}

var text = [sessionStorage.getItem('name')+': Hmmmm… where could the rest of it be?',sessionStorage.getItem('name')+': Ah ha! The first thing I would do when leaving the house pre-lockdown was get my coat! Maybe the rest of the code is in my coat!'];

var nextcount = 0;
var time;
var myEvent;

function timer(){ 
    gTimer();
    accessabilityOptions();
    startingText = sessionStorage.getItem('name')+': ' + sessionStorage.getItem('answer').slice(1, 4) + '… that must be part of the code for the key box!'
    time = startingText.length * 60;
    consoleText(startingText, document.getElementById('textBox'));
    myEvent = setInterval('next()',time);
} 

function next(){
    document.getElementById('textBox').innerHTML += "<br /><br /> <span></span>";
    consoleText(text[nextcount], document.getElementsByTagName('span')[nextcount]);
    time = text[nextcount].length * 60;
    nextcount++;
    
    if(nextcount== text.length){ 
        clearInterval(myEvent);
    } 
}

function getAnswer() {
    var code = sessionStorage.getItem('answer');
    document.getElementById('code').innerHTML = code.slice(1, 4);
}