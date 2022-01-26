/*
    col2Height() will make sure that the height of the 2 cols are the same.
*/
function col2Height(){
    var colHeight = document.getElementsByClassName('col1')[0].offsetHeight;
    document.getElementsByClassName('col2')[0].style.height = colHeight+'px';
    if(videoTimer == 2){
        checkIfSrollbarIsNeeded();   
    }
    else{
        topOfPage();
    }
}

/*
    chekIfScrollBarIsNeeded() will check if the buttons at the bottom of the page is still visible in the window then (if they are not visible) will add in a scrollbar on the y axis of the page.
*/
function checkIfSrollbarIsNeeded() {
    topOfPage();
    accessabilityOptions();
    if(sessionStorage.getItem('pageVisted') == 'true' || document.titlw != 'Start Screen'){
        //gets footer and window height
        var height = window.innerHeight;
        var footerHeight = document.getElementById('footer').offsetTop;
        var width = window.innerWidth;
        videoWidths = document.getElementById('backgroundVideo').clientWidth;
        videoHeights = document.getElementById('backgroundVideo').clientHeight;

        //checks the difference between the footer and window height then sets the scroll bar based on this differnece
        if(height-footerHeight <= 30){
            document.querySelector('body').style.overflowY = 'auto';
            videoFormat(footerHeight);
        }
        else if(height-footerHeight >= 36) {
            document.querySelector('body').style.overflowY = 'hidden';
            document.getElementById('backgroundVideo').style.width = '';
            document.getElementById('backgroundVideo').style.height = '';
        }
    }
    if(window.innerWidth > 1900){
        document.getElementById('backgroundVideo').style.height = ''; 
        document.getElementById('backgroundVideo').style.width = '100vw';
    }
}

/*
    videoFormat(footerHeight) will change the width or the height of the background video based on the size of the window.
*/
function videoFormat(footerHeight) {
    var width = window.innerWidth;
    if(width > 1350){
        document.getElementById('backgroundVideo').style.height = ''; 
        document.getElementById('backgroundVideo').style.width = '130vw';
        videoWidths = document.getElementById('backgroundVideo').clientWidth;
    }
    else{
        document.getElementById('backgroundVideo').style.width = '';
        document.getElementById('backgroundVideo').style.height = footerHeight+55+'px';
    }
}

/*
    topofPage() will send the user to the top of the page whenever the page loads
*/
function topOfPage(){
    scroll(0,0);
    try{
        document.getElementById('introVideo').style.width = '';
        document.getElementById('introVideo').style.height = '100vh';
    }
    catch{}
}
