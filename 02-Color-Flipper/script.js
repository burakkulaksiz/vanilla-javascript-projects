const color = document.getElementById("body");
const click = document.getElementById("click");
const colorCode = document.getElementById("color-code");

function generateColor() {
  let newColor = "#";
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    newColor += arr[randomNum];
  }
  return newColor;
}

function changeColor() {
  newColor = generateColor();
  colorCode.innerHTML = newColor;
  body.style.backgroundColor = newColor;
  click.style.backgroundColor = newColor;
}
