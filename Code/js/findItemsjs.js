
var text = [sessionStorage.getItem('name')+": Could it really be true? Is it really over? Let’s escape this house and take on the world!",
sessionStorage.getItem('name')+": scans the living room.",
sessionStorage.getItem('name')+": Better find these items before I head out…"];

if(sessionStorage.getItem('vaccineSelected') == 'No Vaccine') {
    text.push(sessionStorage.getItem('name')+": Oh I better not forget my fake vaccine passport!");
}
var nextcount = 0;
var myEvent;
var RoomTimer;
var secondCount = 42;
var thirtySecs = 30;
var GameTimer;
var mClick = false;
var vpClick = false;
var hsClick = false;
var vClick = false;
var fClick = false;
var wClick = false;
var tClick = false;
var hClick = false;
var bClick = false;
var oClick = false;
var optionItem;
var TimerText;
var btnClick;

// hatClick() is called once the hat is clicked - it plays audio, shows a green tick and calls the check() function
function hatClick(){
    if(sessionStorage.getItem('vaccineSelected') == 'Sputnik V'){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickh').style.display = 'inline';
            //setTimeout('check()', 250);
            hClick = true;
            check();
        }
    }
}

// bookClick() is called once the book is clicked - it plays audio, shows a green tick and calls the check() function
function bookClick(){
    if(sessionStorage.getItem('vaccineSelected') == 'Pfizer-BioNTech'){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickb').style.display = 'inline';
            //setTimeout('check()', 250);
            bClick = true;
            check();
        }  
    }
}

//// teaClick() is called once the tea cup is clicked - it plays audio, shows a green tick and calls the check() function
function teaClick(){
    if(sessionStorage.getItem('vaccineSelected') == 'Oxford-AstraZeneca'){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickt').style.display = 'inline';
            //setTimeout('check()', 250);
            tClick = true;
            check();
        }   
    }
}

// maskClick() is called once the mask is clicked - it plays audio, shows a green tick and calls the check() functio
function maskClick(){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickM').style.display = 'inline'; 
            mClick = true;
            check();
        }   
}

// vaccinepClick() is called once the vaccine passport is clicked - it plays audio, shows a green tick and calls the check() function
function vaccinepClick(){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickVP').style.display = 'inline';
            vpClick = true;
            check();
        }   
}

// handsClick() is called once the hand sanitiser is clicked - it plays audio, shows a green tick and calls the check() function
function handsClick(){
        btnClick = document.getElementById('audio');
        btnClick.play();
        TimerText = document.getElementById('GameTimerText').style.display;
        if(TimerText == 'inline'){
            document.getElementById('GreenTickHS').style.display = 'inline';
            hsClick = true;
            check();
        }
}

// visorClick() is called once the visor is clicked - it plays audio, shows a green tick and calls the check() function
function visorClick(){
    btnClick = document.getElementById('audio');
    btnClick.play();
    TimerText = document.getElementById('GameTimerText').style.display;
  if(TimerText == 'inline'){
  vClick = true;
  document.getElementById('GreenTickV').style.display = 'inline';
      check();
  }
}

// fireClick() is called once the fire is clicked - it plays audio, shows a green tick and calls the check() function
function fireClick(){
    if(sessionStorage.getItem('vaccineSelected') == 'Corona-Vac'){
    btnClick = document.getElementById('audio');
    btnClick.play();
    TimerText = document.getElementById('GameTimerText').style.display;
  if(TimerText == 'inline'){
  fClick = true;
  document.getElementById('GreenTickf').style.display = 'inline';
        check();    
        }
    }
}

// windowClick() is called once the window is clicked - it plays audio, shows a green tick and calls the check() function   
function windowClick(){
     if(sessionStorage.getItem('vaccineSelected') == 'Mordena'){
    btnClick = document.getElementById('audio');
    btnClick.play();
    TimerText = document.getElementById('GameTimerText').style.display;
  if(TimerText == 'inline'){
  wClick = true;
  document.getElementById('GreenTickw').style.display = 'inline';
      check();
        }
     }
}

//the check() function checks that all of necassary items have been clicked by the user - showing the user a success message and their time
//through an alert
 function check()
 {     
     switch(sessionStorage.getItem('vaccineSelected'))
         {
             case 'Mordena': if (wClick == true){oClick = true;};
                 break;
            case 'Corona-Vac': if (fClick == true){oClick = true;};
                 break;
            case 'Oxford-AstraZeneca': if (tClick == true){oClick = true;};
                 break;
            case 'Pfizer-BioNTech': if (bClick == true){oClick = true;};
                 break;
             case 'Sputnik V': if (hClick == true){oClick = true;};
                 break;   
             case 'No Vaccine': oClick = true;
                 break;
             default: oClick = false;
                 break;
         }
     if(mClick == true && vpClick == true && hsClick == true && vClick == true && oClick == true){
         sessionStorage.setItem('lRoomTime',(30-thirtySecs));
         sessionStorage.setItem('gameCount',gameSecondCount);
         clearInterval(GameTimer);
         clearInterval(RoomTimer);
        clearInterval(myEvent);

        document.getElementById('textBox').innerHTML += "<br /><br /> <span></span>";
        var endText = sessionStorage.getItem('name')+': Now that I have found all my stuff I can leave!';
        text.push(endText);
        consoleText(text[nextcount],document.getElementsByTagName('span')[nextcount]);
        setTimeout(function() {
            window.open('initialHallway.html', '_self'); 
        }, ((text[nextcount].length+1)*60) + 500);
     }
 }

//fourtyTwoSeconds() gives the user an alert after 42 seconds
 function fourtyTwoSeconds()
{
    thirtySecs--;
    if(thirtySecs==0)
         {
            clearInterval(GameTimer);
            alert("Find and click on the objects listed in the red box at the right-hand side of the screen");


         }
}

//the next() function is responsilbe for showing the script and changing images
 function next()
 {
     document.getElementById('textBox').innerHTML += "<br /><br /> <span></span>";
     consoleText(text[nextcount], document.getElementsByTagName('span')[nextcount]);
     
     nextcount++;

     if(nextcount==2)
         {
             document.getElementById('LockdownOver').style.display = 'none';
            document.getElementById('LivingRoom').style.display = 'inline';
             document.getElementById('instruction').style.display = 'inline';
         }
     if(nextcount== text.length)
         {
            clearInterval(myEvent);
         }
     else{

     }
 }

//The second() function is responsible for calling the thirty seconds option and preventing a response if the user clicks on the wrong item
function second()
{     
    secondCount--;
     if(secondCount == 30)
         {
            document.getElementById('GameTimerText').style.display = 'inline';
             GameTimer = setInterval(fourtyTwoSeconds, 1000);
         }

    if(secondCount==0)
         {
            clearInterval(RoomTimer);
         }
 }


//timer() starts the timers for the script and images, as well as starting the timer of the whole escape room and displaying the correct optionItem for the vaccine chosen.
 function timer()
 {
      switch(sessionStorage.getItem('vaccineSelected'))
         {
             case 'Mordena': optionItem = "Window";
                 break;
            case 'Corona-Vac': optionItem = "Fireplace";
                 break;
            case 'Oxford-AstraZeneca': optionItem = "Tea Cup";
                 break;
            case 'Pfizer-BioNTech': optionItem = "Book";
                 break;
             case 'Sputnik V': optionItem = "Hat and Scarf";
                 break;
             case 'No Vaccine': optionItem = " ";
                 break;
             default: optionItem = " ";
                 break;
         }
     sessionStorage.setItem('gameCount',300);
     gTimer();
     accessabilityOptions();
     startingText = sessionStorage.getItem('name')+': stares at the screen in disbelief';
     consoleText(startingText, document.getElementById('textBox'));
     document.getElementById('option').innerHTML = optionItem;
     myEvent = setInterval(next, 6000);
     RoomTimer = setInterval(second, 1000);
 }