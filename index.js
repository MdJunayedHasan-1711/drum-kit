// store total number of drums
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  // for each drum in .drum array add an event listener
  // for click execute the anonymouse function which executes makeSound()
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  // for every keydown execute the anonymous function for makeSound()
  makeSound(event.key);
});

function makeSound(key) {
  // show the animation
  makeAnimation(key);
  // for various key execute the respective sound
  switch (key) {
    case "a":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;
  }
}

function makeAnimation(currentKey) {
  // select the button with given currentKey
  var activeButton = document.querySelector("." + currentKey);
  // change style to pressed
  activeButton.classList.add("pressed");
  // set a time INterval after which style changes to normal
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
