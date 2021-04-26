
// function converts hex to rgb
// @param {string} hex - user input hex value.
// returns rgb value
  
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// function converts rgb to hex
// @param {string} c - user input value for one color.
// returns hex value of that color.
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// function returns string of result hex value
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// @param, color(string)
// returns hsl value of the color
function colorToHsl(color){
  	if(color==='red'){
      return `hsl(0, 100%, 50%)`;
    }
    if(color==='green'){
      return `hsl(120, 100%, 50%)`;
    }
    if(color==='blue'){
      return `hsl(240, 100%, 50%)`;
    }
}

let colorsArr =['red', 'green', 'blue'];

// if second argument is 'rgbhex' call the reg to hex converter.
if (process.argv[2]=== 'rgbhex'){
  const inputInRgb = process.argv[3];
  let indexOfStartChar = inputInRgb.indexOf('(');
  let indexOfEndChat = inputInRgb.indexOf(')');
  let rgbNumString = inputInRgb.slice(indexOfStartChar+1,indexOfEndChat);
  let rgbNumArr = rgbNumString.split(',');
  let r = Number(rgbNumArr[0]);
  let g= Number(rgbNumArr[1]);
  let b= Number(rgbNumArr[2]);

  console.log(rgbToHex(r, g, b));
}

else if(colorsArr.includes(process.argv[2])){
  let inputColor = process.argv[2];
  console.log(colorToHsl(inputColor));

}

// else call the hex to rgb converter
else {
  const userInputInHex = process.argv[2];
  let result = hexToRgb(userInputInHex);
  console.log(`rgb(${result.r},${result.g},${result.b})`);
}