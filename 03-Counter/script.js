let number = document.getElementsByClassName("number")[0];

function display() {
  if (number.innerHTML > 0) {
    number.parentElement.style.color = "green";
  } else if (number.innerHTML < 0) {
    number.parentElement.style.color = "red";
  } else {
    number.parentElement.style.color = "#444";
  }
}
function increase() {
  let num = number.innerHTML;
  num++;
  number.innerHTML = num;
  display();
}
function decrease() {
  let num = number.innerHTML;
  num--;
  number.innerHTML = num;
  display();
}
function reset() {
  let num = number.innerHTML;
  num = 0;
  number.innerHTML = num;
  display();
}
