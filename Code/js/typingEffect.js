var con = document.getElementById('console');
var visible = true;

var timing;
var con = document.getElementById('console');
var letterCount;
var x;
var waiting = false;

function playMusic() {
    var musicElement  = document.getElementById('music');
    musicElement.volume = 1;
    if (!musicElement.muted) {
        musicElement.muted = true;
    }
    else {
        musicElement.muted = false;
    }
    musicElement.play();   
}

    function stopMusic() {
        var musicElement  = document.getElementById('music');
        musicElement.volume = 0;
        musicElement.muted = true;
        stop = false;
    }    

    function removeText() {
        if(target.innerHTML != ''){
            playMusic();
            x = -1;
            letterCount += x;
            waiting = false;   
        }
    }

    function consoleText(word,target) {
        clearInterval(timing);
        playMusic();
        letterCount = 1;
        x = 1;
        var i = 0;
        waiting = false;
        timing = setInterval(function() {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = word.substring(0, letterCount);
            } 

            //responsible for text being removed condition
            else if (letterCount === word.length + 1 && waiting === false){
                waiting = true;
            } 

            else if (waiting === false) {
                i++;
                target.innerHTML = word.substring(0, letterCount);
                if(i >= word.length){
                    i=0;
                    stopMusic();
                }
                letterCount += x;
            }
        }, 60)
    }

    function cursor() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } 
        else {
            con.className = 'console-underscore'
            visible = true;
        }
    }

    function pageLoad(){
        window.setInterval('cursor();',400);   
    }  