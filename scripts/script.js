
var sideNavBar = document.querySelector('.side-nav');
var navList = document.querySelector('aside ul');
var navListLi = document.querySelector('aside ul li');
var ham = document.querySelector('#nav-icon3');

// mobile nav elements
var mobileNav = document.querySelector('#landing-page-nav');
var mobileNavList = document.querySelector('#landing-page-nav ul');
var mobileListLi = document.querySelector('#landing-page-nav ul li');
var mobileHam = document.querySelector('#mobile-ham-nav')
// Hamburger nav transition
$(document).ready(function(){
	$('#mobile-ham-nav,#nav-icon3').click(function(){
		$(this).toggleClass('open');
    });
    
    // Add Width

    // bigger screens
    ham.addEventListener('click',function(){
        sideNavBar.classList.toggle('toggle-nav');
        navList.classList.toggle('side-nav-links-closed');
    })

    // mobile screen
    mobileHam.addEventListener('click',function(){
        mobileNav.classList.toggle('open');
        mobileNavList.classList.toggle('open');
    })

});