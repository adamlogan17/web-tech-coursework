/*
    accessabilityOptions() will get what the user has selected in the accessabilityOptions page and change the layout of the current page based on these options.
*/
function accessabilityOptions(){
    var fontSize = sessionStorage.getItem('fontSize');
    var contrast = sessionStorage.getItem('contrast');
    
    //checks the users option for their font size
    switch(fontSize) {
        case 'small':
            document.querySelector('*').style.fontSize = '0.5em';
            try{document.getElementById('txt').selectedIndex=0}catch{}
            break;
        case 'medium':
            document.querySelector('*').style.fontSize = '1em';
            try{document.getElementById('txt').selectedIndex=1}catch{}
            break;
        case 'large':
            document.querySelector('*').style.fontSize = '1.5em';
            try{document.getElementById('txt').selectedIndex=2}catch{}
            break;
        default:
            break;
    }
    //checks the users option for the contrast
    if(contrast == 'high'){
        try{document.getElementById('contrast').selectedIndex=1}catch{}
        try{
            document.getElementById('banner').style.backgroundColor = '#000000';
            document.getElementsByClassName('col1')[0].style.backgroundColor = '#000000';
            document.getElementsByClassName('col2')[0].style.backgroundColor = '#000000';   
        }
        catch{
            try{
                if(document.title != "Statistics" && document.title != "Rankings"){
                    document.getElementById('text').style.backgroundColor = '#000000';
                }      
            }
            catch{}
        }
    }
    else{
        try{document.getElementById('contrast').selectedIndex=0}catch{}
        try{
            document.getElementById('banner').style.backgroundColor = '';
            document.getElementsByClassName('col1')[0].style.backgroundColor = '';
            document.getElementsByClassName('col2')[0].style.backgroundColor = '';   
        }
        catch{
            try{
                if(document.title != "Statistics" && document.title != "Rankings"){
                    document.getElementById('text').style.backgroundColor = '';
                }      
            }
            catch{}
        }
    }
}