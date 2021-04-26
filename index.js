
const userInput = process.argv[2];

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

let result = hexToRgb(userInput);
console.log(`rgb(${result.r},${result.g},${result.b})`);
