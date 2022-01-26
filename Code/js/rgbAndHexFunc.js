function getValuesFromRGB(rgb) {
    var rgbValues = [];
    for(var i = 0; i < rgb.length; i++) {
        var rgbValue = "";
        if(rgb[i] == '(' || rgb[i] == ' ') {
            var nextChr = i+1;
            while(rgb[nextChr] != ',' && nextChr<rgb.length-1) {
                rgbValue = rgbValue + rgb[nextChr];
                nextChr++;
            }
            rgbValues.push(rgbValue);
        }
    }
    return rgbValues;
}

function hexToRgb(hex) {
    var r  = '0x' + hex.charAt(1) + hex.charAt(2);
    var g = '0x' + hex.charAt(3) + hex.charAt(4);
    var b = '0x' + hex.charAt(5) + hex.charAt(6);
    return [parseInt(r), parseInt(g), parseInt(b)];
}
  
function rgbToHex(rgb) {
    var hex = "";
    for(var i = 0; i<rgb.length; i++) {
        rgb[i] = parseInt(rgb[i]).toString(16);
        if (rgb[i].length == 1) {
            rgb[i] = "0" + rgb[i];
        }
        hex = hex + rgb[i];
    }
    return '#' + hex;
}

function randHexCode() {
    var hex_code_as_int = Math.random() * 0xFFFFFF;
    var hex_code = Math.round(hex_code_as_int).toString(16);
    
    if(hex_code.length < 6) {
        for(var i = hex_code.length; i<6; i++) {
            hex_code += '0';
        }
    }
    hex_code = '#' + hex_code;
    
    return hex_code;
}

function finalHexCode() {
    var colours = ['#0FF514', '#F50F0F', '#F78C05', 
    '#DDFF00', '#00FFFF', '#0204B5',
    '#FC03EC', '#693B0D', '#640BB3'];

    var opt = Math.random() * 9;
    opt = Math.floor(opt);
    
    return colours[opt];
}