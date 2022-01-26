var myTimer;

function noHover(img1, img2) {
    document.getElementById(img1).style.visibility =
        'hidden';
    document.getElementById(img2).style.visibility =
        'hidden';
    document.getElementById(img1).style.animation = 
        'flash linear 0s infinite';
    document.getElementById(img2).style.animation = 
        'flash linear 0s infinite';
}

function hoverEffect(img1, img2) {
    document.getElementById(img1).style.visibility =
        'visible';
    document.getElementById(img2).style.visibility =
        'visible';
    document.getElementById(img1).style.animation = 
        'flash linear 0.8s infinite';
    document.getElementById(img2).style.animation = 
        'flash linear 0.8s infinite';
}

function startVideoTimer() {
    topOfPage();
    accessabilityOptions();
    sessionStorage.setItem('isLightsOn', 'false'); // turns the lights off in the basement for the next play-through
    sessionStorage.setItem('lRoomTime','0');
    sessionStorage.setItem('kTime','0');
    sessionStorage.setItem('bTime','0');
    sessionStorage.setItem('cTime','0');
    sessionStorage.setItem('beenToPage','0');
    var pageVisted = sessionStorage.getItem('pageVisted');
    if(pageVisted != 'true'){
        sessionStorage.setItem('pageVisted', false);
        myTimer = setInterval('stopVideoTimer()', 19500); 
    }
    else{
        transition();
    }
}

function stopVideoTimer() {
    clearInterval(myTimer);
    document.getElementById('videoContainer').style.animation =
        'fadeOff linear 2s';
    sessionStorage.setItem('pageVisted', true);
    myTimer = setInterval('transition()', 1900);
}

function transition() {
    clearInterval(myTimer);
    document.getElementById('videoContainer').style.visibility =
        'hidden';
    document.getElementById('wrapper').style.visibility =
        'visible';
    document.getElementById('videoBackground').style.visibility =
        'visible';
    document.getElementById('videoBackground').style.animation =
        'fadeOn linear 3s';
    document.getElementById('wrapper').style.animation =
        'fadeOn linear 4s';
    fixingTitleLayout();
}


function fixingTitleLayout() {
    var imgs = document.getElementsByTagName('img');
    if(window.innerWidth < 855){
        document.getElementById('title').innerHTML = 'Covid<br>Cr!s!s';
        var aTags = document.getElementsByTagName('a');
        document.querySelector('*').style.fontSize = '1em';
        for (var i=0; i<imgs.length; i++){
            imgs[i].style.display='none';
        }
    }
    else {
        document.getElementById('title').innerHTML = 'Covid Cr!s!s';
        accessabilityOptions();
        for (var i=0; i<imgs.length; i++){
            imgs[i].style.display='inline';
        }
    }
    checkIfSrollbarIsNeeded();
}