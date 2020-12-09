// var time = 10 * 300;
// setInterval(function() {
//   var seconds = time % 60;
//   var minutes = (time - seconds) / 60;
//   if (seconds.toString().length == 1) {
//     seconds = "0" + seconds;
//   }
//   if (minutes.toString().length == 1) {
//     minutes = "0" + minutes;
//   }
//   document.getElementById("time").innerHTML = minutes + ":" + seconds;
//   time--;
//   if (time == 0) {
//     window.location.href = "https://www.w3schools.com";
//   }
// }, 1000);

var urlIos = "itms-apps://apps.apple.com/us/app/door-captain/id1515558947";
var urlAndroid =
  "http://play.google.com/store/apps/details?id=com.ops.traxvalet";

window.onload = function (event) {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    // console.log("android");
    setTimeout(function () {
      window.open(urlAndroid, "_blank");
    }, 250);
  }
  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    // console.log("ios");
    setTimeout(function () {
      window.location = urlIos;
    }, 250);
  } else {
  }
};
