
var sideNavBar = document.querySelector('.side-nav');
var navList = document.querySelector('aside ul');
var navListLi = document.querySelector('aside ul li');
var ham = document.querySelector('#nav-icon3');
// Hamburger nav transition
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    });
    
    // add width
    ham.addEventListener('click',function(){
        sideNavBar.classList.toggle('toggle-nav');
        navList.classList.toggle('side-nav-links-closed');
        console.log(sideNavBar);
        console.log(navList);
    })
});