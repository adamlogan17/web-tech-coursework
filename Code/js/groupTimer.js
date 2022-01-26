var timer;
var gameSecondCount;

function gameSeconds()
            {
                gameSecondCount--;
                
                if(gameSecondCount==0)
                     {
                         clearInterval(myEvent);
                         window.open('lose.html','_self');fjjf
                        document.getElementById('GTimer').innerHTML = "end";
                     }
                
                
                if(gameSecondCount < 300 && gameSecondCount > 239)
                    {
                        document.getElementById('GTimer').innerHTML = "04:" + (gameSecondCount-240);
                        if((gameSecondCount-240) < 10)
                            {
                                document.getElementById('GTimer').innerHTML = "04:0" + (gameSecondCount-240);
                            }
                        if((gameSecondCount-240) == 0)
                            {
                                document.getElementById('GTimer').innerHTML = "04:00";
                            }
                    }
                if(gameSecondCount < 240 && gameSecondCount > 179)
                    {
                        document.getElementById('GTimer').innerHTML = "03:" + (gameSecondCount-180);
                        if((gameSecondCount-180) < 10)
                            {
                                document.getElementById('GTimer').innerHTML = "03:0" + (gameSecondCount-180);
                            }
                        if((gameSecondCount-180) == 0)
                            {
                                document.getElementById('GTimer').innerHTML = "03:00";
                            }
                    }
                if(gameSecondCount < 180 && gameSecondCount > 119)
                    {
                        document.getElementById('GTimer').innerHTML = "02:" + (gameSecondCount-120);
                        if((gameSecondCount-120) < 10)
                            {
                                document.getElementById('GTimer').innerHTML = "02:0" + (gameSecondCount-120);
                            }
                        if((gameSecondCount-120) == 0)
                            {
                                document.getElementById('GTimer').innerHTML = "02:00";
                            }
                    }
                if(gameSecondCount < 120 && gameSecondCount > 59)
                    {
                       document.getElementById('GTimer').innerHTML = "01:" + (gameSecondCount-60);
                        if((gameSecondCount-60) < 10)
                            {
                                document.getElementById('GTimer').innerHTML = "01:0" + (gameSecondCount-60);
                            }
                        if((gameSecondCount-60) == 0)
                            {
                                document.getElementById('GTimer').innerHTML = "01:00";
                            }
                    }
                 if(gameSecondCount >= 10 && gameSecondCount < 60)
                     {
                         document.getElementById('GTimer').innerHTML = "00:" + gameSecondCount;
                     }
                 if(gameSecondCount < 10){
                    document.getElementById('GTimer').innerHTML = "00:0" + gameSecondCount;
                 }
                if(gameSecondCount < 0){
                    window.open('lose.html','_self');
                }
             }
             
function gTimer()
             {
                 timer = setInterval(gameSeconds, 1000);
                 gameSecondCount = sessionStorage.getItem('gameCount');
             }
             
             