
var sideNavBar = document.querySelector('.side-nav');
var ham = document.querySelector('#nav-icon3');
// Hamburger nav transition
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    });
    
    // add width
    ham.addEventListener('click',function(){
        sideNavBar.classList.toggle('toggle-nav');
         
    })
});