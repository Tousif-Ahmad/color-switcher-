let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector(".colorInput");
let applyBtn = document.querySelector(".applyBtn");
let colorName = document.querySelector(".colorName");
let body = document.querySelector("body");

const colorArray = [
  "black",
  "seagreen",
  "coral",
  "yellow",
  "tomato",
  "blue",
  "green",
  "teal",
  "brown",
];

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  // console.log(colorArray[randomNumber]);
  return colorArray[randomNumber];
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
}

function handleRandomBtn() {
  let color = generateRandomNumber();
  changeColor(color);
}

function handleApplyBtn() {
  let color = colorInput.value.trim();
  // check if valid color
  let tester = new Option().style;
  tester.color = color;
  if (tester.color === "") {
    alert("please enter a valid css color name or hex codes!");
    return;
  }
  changeColor(color);
}

randomBtn.addEventListener("click", handleRandomBtn);
applyBtn.addEventListener("click", handleApplyBtn);
