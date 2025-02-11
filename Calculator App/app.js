const display = document.getElementById("display");
let calculator = document.querySelector(".calculator");
let darkButtons = document.querySelectorAll(".darktheme");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1000);
  }
}

let themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
calculator.style.backgroundColor = "black";
    calculator.style.color = "white";
    display.style.backgroundColor = "black";
    display.style.color = "white";

    darkButtons.forEach((button) => {
      button.style.backgroundColor = "black";
      button.style.color = "white";
      button.style.border = "none";
    });
  } else {
    calculator.style.backgroundColor = "aliceblue";
    calculator.style.color = "black";
    display.style.backgroundColor = "aliceblue";
    display.style.color = "black";

    darkButtons.forEach((button) => {
      button.style.backgroundColor = "#ebebeb";
      button.style.color = "black";
      button.style.border = "1px solid rgb(225, 225, 225)";
    });
  }
});
