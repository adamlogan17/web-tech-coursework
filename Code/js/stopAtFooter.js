/* Occasionally when the footer is on position initial it does not reach to the 
   bottom of the page and therefore needs to have a position of absolute but this 
   creates another error as when the page is shrunk the footer will cover some or
   all of the room/game. This script fixes this issue by switching between the two 
   positions. Whenever the footer would cover the room/game it switches to initial 
   and when the footer should be at the bottom of the screen it will switch to back. */

function checkFooter() {
    var footer = document.getElementById('footer');
    var allElements = document.getElementById('wrapper').children;
    var count = 0;
    for(var i = 0; i<allElements.length; i++) {
        if (allElements[i] != footer) {
            /* The footer is changed to the default of 'absolute' then it checks 
               if this would cause the footer to be within any elements and if so
               it changes the position of 'footer' to initial */
            footer.style.top = '';
            footer.style.position = 'absolute';
            var topOfFooter = footer.offsetTop;
            var bottomOfElement = allElements[i].offsetTop + allElements[i].offsetHeight; /* this is the bottom 
                                                                                             position of the element */
            if(topOfFooter <= bottomOfElement) {
                count++;
                if(allElements[i].style.position != 'initial' && allElements[i].id != 'torchBox') {
                    var wrapper = document.getElementById('wrapper');
                    footer.style.position = 'relative';
                    footer.style.top = allElements[i].offsetTop + allElements[i].offsetHeight + 'px';
                    document.body.style.backgroundColor = wrapper.style.backgroundColor;
                } else {
                    footer.style.position = 'initial';
                }
                break;
            }
        }
    }
}

window.addEventListener('resize', checkFooter);
window.addEventListener('load', checkFooter);