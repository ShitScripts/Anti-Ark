console.log("Anti Ark");

const element = document.getElementById('ip_button')

element.addEventListener("click", () => {
	navigator.clipboard.writeText("play.pretty-hot.xyz").then(function() {
 	alert('ip has been set to clipboard')
}, function() {
  alert('samsung smart fridge user confirmed')
});
});
