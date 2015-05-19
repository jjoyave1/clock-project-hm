var time = document.querySelector("#logColor");
var clock = document.querySelector("#clock");
var hexColor = document.querySelector("#hexColor");

function hexConvert(x) {
  var result = x.toString(16);
  while (result.length < 2) {
    result = '0' + result;
  }
  return result;
};

var timer = window.setInterval(function getTime() {
  var date_time = new Date();
  var hours = date_time.getHours();
  var minute = date_time.getMinutes();
  var seconds = date_time.getSeconds();

  if (hours <= 9) {
    hours = '0' + hours;
  }

  if (minute <= 9) {
    minute = '0' + minute;
  }

  if (seconds <= 9) {
    seconds = '0' + seconds;
  }

  var color = '#' + hours + minute + seconds;
  clock.style.backgroundColor = color;
  baseColor.innerHTML = color;


  if (hours === 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = '0' + (hours - 12);
  }

  var hex_color = '#' + hexConvert(hours) + hexConvert(minute) + hexConvert(seconds);
  clock.style.backgroundColor = hex_color;
  hexColor.innerHTML = hex_color;

  return currentTime;
}, 1000);
