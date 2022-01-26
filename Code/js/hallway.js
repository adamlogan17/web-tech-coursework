function textAppear(){
    gTimer();
    accessabilityOptions();
    startingText = sessionStorage.getItem('name')+': I better go to that keypad and get out of this house quickly before the restrictions change';
    consoleText(startingText,document.getElementById('textBox'));
}

function colourPadClick()
{
    window.open('colourPad.html','_self');
}

function basementClick()
{
    sessionStorage.setItem('gameCount',gameSecondCount);
    window.open('basement.html','_self');
}