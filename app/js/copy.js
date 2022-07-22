var btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function(event) {
  try {
    navigator.clipboard.writeText('play.pretty-hot.xyz');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});