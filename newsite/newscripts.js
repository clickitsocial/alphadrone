// grab elements
var mobileNav = document.querySelector('.mobile-nav');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var menu = document.querySelector('#large-nav');
// add event listener

mobileNav.addEventListener('click',function(){
  line1.classList.toggle('change');
  line2.classList.toggle('change');
  line3.classList.toggle('change');
  menu.classList.toggle('change');
})

$('#webTicker').webTicker();