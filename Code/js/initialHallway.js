var text = [sessionStorage.getItem('name')+': Just my luck, lockdown is over and I can\'t even leave my house.',sessionStorage.getItem('name')+': checks the key box and realises they need a code. ',sessionStorage.getItem('name')+': Hmmm.. I wonder what it could be&#8230; ',sessionStorage.getItem('name')+': All this thinking is making me hungry, maybe if I had some food I\'d be able to think better&#8230; Oh yeah! I have that leftover chocolate cake from my zoom bake off last week!'];

var nextcount = 0;
var time;
var myEvent;

function timer(){ 
    gTimer();
    accessabilityOptions();
    startingText = sessionStorage.getItem('name')+': heads towards the front door and realises it is locked';
    time = startingText.length * 60;
    consoleText(startingText, document.getElementById('textBox'));
    myEvent = setInterval('next()', 6000);
} 

function next(){
    if(nextcount < 4){
        document.getElementById('textBox').innerHTML += "<br /><br /> <span></span>";
        consoleText(text[nextcount], document.getElementsByTagName('span')[nextcount]);
        time = text[nextcount].length * 60;
    }
    nextcount++;
    
    if(nextcount == (6)){ 
        clearInterval(myEvent); 
        sessionStorage.setItem('gameCount',gameSecondCount);
        window.open('kitchen.html','_self');
    } 
}