const gulp = require("gulp");
const notify = require("gulp-notify");
const sweetalert = require("sweetalert2");

sweetalert.fire({
  icon: 'success',
  title: 'ip copied to clipboard',
  showConfirmButton: false,
  timer: 1500
})
console.log("Anti Ark website made by Austin287856");
const element = document.getElementById('ip_button');
element.addEventListener("click", () => {
	navigator.clipboard.writeText("play.pretty-hot.xyz").then(function() {
 	alert('ip has been set to clipboard');
}, function() {
  alert('samsung smart fridge user confirmed');
});
});
