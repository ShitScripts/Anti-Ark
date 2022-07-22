
console.log("Anti Ark website made by Austin287856");
const element = document.getElementById('ip_button');
element.addEventListener("click", () => {
	navigator.clipboard.writeText("play.pretty-hot.xyz").then(function() {

	swal({
  	title: 'Copied to clipboard!',
  	button: {
	text: "OK",
	value: true,
	visible: true,
	className: "",
	closeModal: true,
	},
  	timer: 3500
	})
 	
}, function() {
  alert('samsung smart fridge user confirmed');
});
});

document.addEventListener('contextmenu', event => event.preventDefault());

