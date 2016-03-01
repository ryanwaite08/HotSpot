// New

$(document).ready(function(){

	// Get the modal
	var modal = $('#signup-modal');

	// Get the button that opens the modal
	var btn = $("#signup-btn");

	// Get the <span> element that closes the modal
	var span = $("#close-modal");

	// When the user clicks on the button, open the modal 
	btn.click(function() {
		modal.css('display', 'block');
	})

	// When the user clicks on <span> (x), close the modal
	span.click(function() {
		modal.css('display', 'none');
	})

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.css('display', 'none');
		}
	}
	
	/* --- Sign In Form DropDown --- */

	var signInBtn = $('#signin-btn');
	var signInForm = $('#signin-form1');
	
	signInBtn.click(function(){
		
		if(signInForm.css('display') == 'none') {
			signInForm.css('display', 'block')
		}
		else {
			signInForm.css('display', 'none')
		}
		
	});
	
	/* --- Mobile Menu DropDown --- */
	
	var menuIcon = $('#menu-icon');
	
	var navList = $('.nav-list');
	
	var navListItems = $('.nav-list li');
	
	var signDiv = $('.signing-div');
	
	var signBtn = $('.sign-btn');
	
	var topBar = $('#top-div');
	
	var mainContain = $('#main-contain');
	
	menuIcon.click(function () {

		if(topBar.css("height") == "51px") {
			topBar.css("height", "100vh");
			mainContain.css("height", "0px");
			$('.navigate').css('width', '100%');
			navList.css({
				'display': 'block',
				'overflow-y': 'scroll',
				'width': '100%',
				'max-height': '50vh',
				'border-top': '1px solid black',
				'border-bottom': '1px solid black',
			});
			navListItems.css("display", "block");
			$('.signing-div').css({
				'display': 'block',
				'position': 'relative',
				'width': '100%',
			})
			signBtn.css({
				'display': 'inline-block',
				'width': '',
			})
			$('#signin-form1').css('left', '0px')
		}
		else {
			topBar.css("height", "51px");
			mainContain.css("height", "calc(100vh - 51px)");
			$('.navigate').css('width', '0px');
			navList.css("display", "none");
			navListItems.css("display", "none");
			$('.signing-div').css({
				'display': 'none',
				'position': 'absolute',
				'width': '0px',
			})
			signBtn.css({
				'display': 'none',
				'width': '',
			})
		}
		
	});

});

$(function(){
	$("#slides").slidesjs({
		width: 1200,
		height: 650,
		start: 1,
		navigation: {
			active: true,
			effect: "fade"
		},
		play: {
			active: true,
			effect: "fade",
			interval: 3000,
			auto: true,
			swap: true,
			pauseOnHover: false,
			restartDelay: 2500
		}
	});
});