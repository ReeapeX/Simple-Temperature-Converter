let ctof = document.getElementById("unit-c-to-f");
let ftoc = document.getElementById("unit-f-to-c");
let resultDisplay = document.getElementById("result");
let input = document.getElementById("tempInput");

console.log("Hello");

function convertBtn() {
  console.log("Hello");
  console.log("CtoF " + ctof);
  console.log("FtoC " + ftoc);

  if (ctof.checked) {
    convert(true);
  } else if (ftoc.checked) {
    convert(false);
  }
}

function convert(unit) {
  let result = 0;

  let value = input.value;
  if (unit == true) {
    result = value * 1.8 + 32;
    resultDisplay.textContent = value + "°C sind " + result.toFixed(2) + "°F";
  } else if (unit == false) {
    result = (value - 32) / 1.8;
    resultDisplay.textContent = value + "°F sind " + result.toFixed(2) + "°C";
  }
}
