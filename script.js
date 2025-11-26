let ctof = document.getElementById("unit-c-to-f");
let ftoc = document.getElementById("unit-f-to-c");
let resultDisplay = document.getElementById("result");
let input = document.getElementById("tempInput");

console.log("Hello");

function convertBtn() {
  console.log("CtoF " + ctof);
  console.log("FtoC " + ftoc);

  if (input.value == "") {
    resultDisplay.textContent = "Bitte gib ein was du Umrechnen möchtest!";
  } else if (ctof.checked) {
    convert(true);
  } else if (ftoc.checked) {
    convert(false);
  }
}

function convert(unit) {
  let result = 0;
  let value = input.valueAsNumber;
  if (unit) {
    result = value * 1.8 + 32;
    resultDisplay.textContent = value + "°C sind " + result.toFixed(2) + "°F";
  } else {
    result = (value - 32) / 1.8;
    resultDisplay.textContent = value + "°F sind " + result.toFixed(2) + "°C";
  }
}
