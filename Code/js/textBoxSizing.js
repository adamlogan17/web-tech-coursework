function collideTextBox(keep) {
    var footer = document.getElementById('footer');
    var header = document.getElementById('header');
    var bottomOfHeader = header.offsetHeight + header.offsetTop;

    var textBox = document.getElementById('textBox');
    var allElements = document.getElementById('wrapper').children;
    for(var i = 0; i<allElements.length; i++) {
        var bottomOfElement = allElements[i].offsetTop + allElements[i].offsetHeight;
        // the if statement needs to disregard the header, footer and any elements within the header
        if (allElements[i] != textBox && allElements[i] != footer && allElements[i] != header
            && bottomOfElement >= bottomOfHeader) {
            if(keep) {
                //This code below makes the element clashing with the textBox
                //stop at the place in which it clashes
                allElements[i].style.position = 'initial';
                var rightOfText = textBox.offsetLeft + textBox.offsetWidth + 10; // the '+10' is so the element is not right beside the textBox
                var LeftOfElement = allElements[i].offsetLeft; 
                if(LeftOfElement <= rightOfText) {
                    allElements[i].style.position = 'absolute';
                    allElements[i].style.left = rightOfText + 'px';
                }
            } else {
                //This code below makes the textBox disappear and reappear
                textBox.style.display = 'initial';
                var rightOfText = textBox.offsetLeft + textBox.offsetWidth;
                var LeftOfElement = allElements[i].offsetLeft; 
                if(LeftOfElement <= rightOfText) {
                    textBox.style.display = 'none';
                    break;
                } 
            }
        } 
    }

    textBox.style.top = '22%';
    if((bottomOfHeader+10) > textBox.offsetTop) {
        textBox.style.top = (bottomOfHeader + 10) + 'px';
    }
}