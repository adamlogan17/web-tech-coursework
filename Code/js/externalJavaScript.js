// currentButtonPressed initialized to 0 to show that there is no vaccine currently selected
var currentVaccine = '0';

// this is a timer to make the vaccine video hidden whenever it is done
var videoTimer;

/*
    startVideoTimer will play the vaccine video for 5.5 seconds before starting the fade animation
*/
function startVideoTimer() {
    topOfPage();
    accessabilityOptions();
    sessionStorage.setItem('answer', finalHexCode());
    videoTimer = setInterval('stopVideoTimer()', 5500);
}

/*
    stopVideoTimer() will stop the video and cause it to fade out
*/
function stopVideoTimer() {
    clearInterval(videoTimer);
    document.getElementById('videoContainer').style.animation =
        'fadeOff linear 2s';
    videoTimer = setInterval('transition()', 1900);
}

/*
    transition() will hide the videoContainer so that the whenever the video is over you cannot see the thumbnail of the video. It will fade in the rest of the content of the
*/
function transition() {
    clearInterval(videoTimer);
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
    col2Height();
}

/* 
    vaccineInfo(vaccineID) will be called whenever the user is hovering over one of the td elements and will place the corresponding text in .col2. It will display this text by checking the value of the vaccine variable.
*/
function vaccineInfo(vaccineID) {
    if(vaccineID == '1') {
        document.getElementById('vaccineInfo').innerHTML = 
            'This vaccine is brought to you by the brilliant engineers of Germany and the not so brilliant engineers from the USA and holds the title for the first coronavirus vaccine to have been approved.<br><br>Lots of research was put into this vaccine, however, it doesnt hurt to do a bit of research of your own by reading a <b>book</b> .';
    }
    if(vaccineID == '2'){
        document.getElementById('vaccineInfo').innerHTML = 
            'Between all the rowing the university of oxford managed to develop this great british vaccine. Sadly this vaccine comes with some side effects such as the sudden urge to have a cup of tea.<br><br>This vaccine gives you a craving for <b>tea</b>.';   
    }
    if(vaccineID == '3'){
        document.getElementById('vaccineInfo').innerHTML = 
            'The all American Moderna vaccine is one of the few American products that will not clog your arteries. This is one of only two of the vaccines to use RNA.<br><br>The effectiveness of this vaccine is dependant of LOTS of sunlight so go and sit by the <b>window</b>.';
    }
    if(vaccineID == '4'){
        document.getElementById('vaccineInfo').innerHTML = 
            'Named after the Sputnik space program, which was the first program to launch a man made object into space and was developed by the Gamaleya Research Institiuate located in Russia. A little known fact about this vaccine is that it si legally required to play <a href= "https://www.youtube.com/watch?v=YgGzAKP_HuM" target="_blank">Rasputin (Funk Overload) by Boney M</a> when recieving the injection.<br><br>This vaccine makes you as cold as it is in Sibria so make sure you bring a <b>hat</b> out!';
    }
    if(vaccineID == '5'){
        document.getElementById('vaccineInfo').innerHTML = 
            'As I write this on my Huawei laptop, this is by far the best vaccine that has ever been produced. Offering a stagering 200% immunity against covid it is a wonder why only mighty China is the only major nation to approve this vaccine.<br><br>Even if this vaccine is as good as the chinese government says it does give you shivers, go warm up by the <b>fireplace</b>.';
    }
    if(vaccineID == '6'){
        document.getElementById('vaccineInfo').innerHTML = 
            'This is the single best option that you can take. According to my extensive research on facebook vaccines were actually invented by Bill Gates so he can track you sitting in your house and your frequent trips to the local wetherspoons.<br><br>.';
    }
}
/*
    vaccineHover() is used to check if a vaccine has been selected while the user is hovering over a vaccine. If there is no vaccine selected then it will display the vaccine being hovered over information and if there has been a vacccine selected it will insure that the text does not change
*/
function vaccineHover(vaccineID){
    if(currentVaccine == '0'){
        vaccineInfo(vaccineID);
    }
}
/*
    noHover() is used to clear the text from .col2 whenever the user is no longer hovering over the vaccine
*/
function noHover() {
    if(currentVaccine == '0'){
        document.getElementById('vaccineInfo').innerHTML = '';
    }
}
/*
    vaccineSelected(vaccineID, vaccineName) is called whenever the user clicks on one of the td elements. It will make the td element flash, generate a border around the selected vaccine and will store the selected vaccine in session storage.
*/
function vaccineSelected(vaccineID, vaccineName) {
    // checks if a vaccine has already been selected then takes away the border and stops the flashing animation of the vaccine
    if(currentVaccine != '0'){
        document.getElementById(currentVaccine).style.animation = 
            'flash linear 0s infinite';
        document.getElementById(currentVaccine).style.border = 
            'transparent';
    }
    currentVaccine = vaccineID;
    vaccineInfo(vaccineID);
    
    // stores the current vaccine selected in session storage as vaccine
    sessionStorage.setItem('vaccineSelected',vaccineName);
    
    // this will place a border around the selected vaccine 
    document.getElementById(vaccineID).style.border = 
        '2px #FFFFFF solid';
    
    // this will start the flashing animation for the currently selected vaccine
    document.getElementById(vaccineID).style.animation = 
        'flash linear 1s infinite';
}
/*
    nextPageVaccineSelect() will check if the user has selected a vaccine and if they have entered a name, if they have not been selected the corresponding error message will be displayed. This function will also store the name that the user has selected and stores it in session storage as name and then sends the user to the next page.
*/
function nextPageVaccineSelect(){
    var name = document.getElementById('txtName').value; // gets the string within the input field
    // checks if anything has been entered
    if(name == ''){
        alert('Please enter name');
    }
    else if(name.includes('~')){
        alert('Please do not use the special character ~ in your name')
    }
    else if(name.length >= 10){
        alert('Please enter a name smaller than 10 characters');
    }
    // checks if the user has selected a vaccine
    else if(currentVaccine == '0'){
        alert('Please select a vaccine');
    }
    else {
        sessionStorage.setItem('name',name); // stores what the user ented into the input field as name in session storage
        window.open('FindItems.html', '_self'); // sends the user to intro.html 
    }
}

/*
    previousPageVaccineSelect() will send the user to the starting screen
*/
function previousPageVaccineSelect() {
    location.href = 'startScreen.html'; // sends the user to startScreen.html
    
}
/*
    getStoredInfo() will get the information in session storage and display it in the corresponding html element.
*/
function getNameAndVaccine(){
    document.getElementById('wrapper').style.visibility =
        'visible';
    var numOfNames = document.getElementsByClassName('name').length;
    for(var i=0; i<numOfNames; i++){
        document.getElementsByClassName('name')[i].innerHTML = 
            sessionStorage.getItem('name');
    }
    var numOfVaccine = document.getElementsByClassName('vaccine').length;
    for(var i=0; i<numOfVaccine; i++){
        document.getElementsByClassName('vaccine')[i].innerHTML = 
            sessionStorage.getItem('vaccineSelected');
    }

}

/*
    getChoice() will get what the user selected for their accessability options.
*/
function getChoice() {
    var fontSize = document.querySelector('#txt').value;
    var contrast = document.querySelector('#contrast').value;
    
    sessionStorage.setItem('fontSize',fontSize);
    sessionStorage.setItem('contrast',contrast);
    
    accessabilityOptions();
    checkIfSrollbarIsNeeded();
}

/*
    this will get the scores for each of the players for the globalLeaderboard page.
*/
function getScores(){
    var names = localStorage.getItem('names');
    var times = localStorage.getItem('times');
    if(names != null ){
        names = names.split('~');
        times = times.split('~');
        
        //this for loop will add all the times into a new array which will be sorted
        var timesInSecs = [];
        for(var i=0; i<times.length; i++){
            var time = times[i].split(':');
            var timeInSec = (parseInt(time[0]) * 60) + parseInt(time[1]);
            timesInSecs[i] = timeInSec;
        }
        //below is a bubble sort algorithm to sort the scores into lowest to highest order
        var swapp;
        var len = timesInSecs.length-1;
        do {
            swapp = false;
            for (var i=0; i < len; i++){
                if (timesInSecs[i] > timesInSecs[i+1]){
                    var temp1 = times[i];
                    times[i] = times[i+1];
                    times[i+1] = temp1;

                    var temp2 = names[i];
                    names[i] = names[i+1];
                    names[i+1] = temp2;
                    swapp = true;
                    
                    var temp3 = timesInSecs[i];
                    timesInSecs[i] = timesInSecs[i+1];
                    timesInSecs[i+1] = temp3;
                }
            }
            len--;
        } while (swapp);
        for(var i=0; i<times.length; i++){
            document.getElementById('score').innerHTML += '<br>'+names[i]+' '+times[i];
        }
    }
    topOfPage();
    checkIfSrollbarIsNeeded();
}
