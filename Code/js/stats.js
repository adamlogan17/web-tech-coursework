function getInfo(){
    accessabilityOptions();  
    checkIfSrollbarIsNeeded();
    document.getElementById('livingRoomTime').innerHTML = sessionStorage.getItem('lRoomTime');
    document.getElementById('kitchenTime').innerHTML = sessionStorage.getItem('kTime');
    document.getElementById('basementTime').innerHTML = sessionStorage.getItem('bTime');
    document.getElementById('colourPadTime').innerHTML = sessionStorage.getItem('cTime');
    
    //getting the total time of the player and adding it to the leaderboard
    if(sessionStorage.getItem('gameCount') > '0' && sessionStorage.getItem('beenToPage') != '1'){
        sessionStorage.setItem('beenToPage','1');
        var leaderboard = localStorage.getItem('times'); 
        var modGameCount = parseInt(sessionStorage.getItem('gameCount')) % 60;
        modGameCount = 60 - modGameCount;
        if(modGameCount <= 9){
            modGameCount = String('0'+modGameCount);
        }
        
        var stat = Math.trunc(sessionStorage.getItem('gameCount')/60);
        if(stat == 0){
                totalTime = 4 + ':' + modGameCount;
        }
        else{
            totalTime = (5-stat) + ':' + modGameCount;   
        }
        
        if(leaderboard !=null){
            localStorage.setItem('times',leaderboard+'~'+totalTime);    
        }
        else{
            localStorage.setItem('times',totalTime); 
        }
        
        var previousNames = localStorage.getItem('names');
        if(previousNames != null){
            localStorage.setItem('names', previousNames+'~'+sessionStorage.getItem('name'));
        }
        else{
            localStorage.setItem('names',sessionStorage.getItem('name'));
        }
    }
    videoFormat();
}


function getLeaderBoard(){
    accessabilityOptions();
    
    var table = document.getElementsByTagName('tbody')[0];  
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
            table.innerHTML += '<tr><td class="room">'+names[i]+'</td><td>'+times[i]+'</td></tr>';
        }
    }
    heightCheck();
}

function heightCheck(){
    var table = document.getElementsByTagName('tbody')[0];
    var width = window.innerWidth;
    checkIfSrollbarIsNeeded();
    if(table.clientHeight > 250){
        var footerHeight = document.getElementById('footer').offsetTop;
        document.getElementById('backgroundVideo').style.width = '';
        document.getElementById('backgroundVideo').style.height = footerHeight+55+'px';
    }
    if(width > document.getElementById('backgroundVideo').clientWidth){
        document.getElementById('backgroundVideo').style.height = '';
        document.getElementById('backgroundVideo').style.width = '110vw';
    }
}