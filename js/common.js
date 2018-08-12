$(function() {

	// Preloader function
	$(document).ready(function($) {
	    var Body = $('body');
	    Body.addClass('preloader-site');
	});

	$(window).on("load", function(){
		$('.preloader-wrapper').delay(600).fadeOut('600', function() {
		  $(this).delay(600).remove();
		});
	});

	$(document).ready(function(){
		$('.mainpage_navicon').click(function(){
			$(this).toggleClass('open');
			$('.mainpage_navbar').toggleClass('open');
		});
	});

	$(document).ready(function(){
		$('.menu_accordion-dish').click(function(){
			$('.menu_sheet').addClass('menu-shown');
		});
	});

	$(document).ready(function(){
		$('.menu_accordion-item-mobile').click(function(){
			$('.menu_accordion-item-mobile').not(this).toggle();
			$('.menu_accordion-panel').removeClass('fullheight');
		});
	});

	$(document).ready(function(){
		$('.menu_accordion-dish-btn').click(function(){
			$(this).closest('.menu_accordion-panel').addClass('fullheight');
		});
	});

});
