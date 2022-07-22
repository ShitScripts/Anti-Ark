console.log("Anti Ark");

var btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function(event) {
  console.log('detected click');
  navigator.clipboard.writeText('play.pretty-hot.xyz');
});