function updateTorch(e){
    var y = e.pageY - this.offsetTop;
    var x = e.pageX - this.offsetLeft;
    
    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
}