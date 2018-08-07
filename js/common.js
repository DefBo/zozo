$(function() {

	// Preloader function
	$(document).ready(function($) {
	    var Body = $('body');
	    Body.addClass('preloader-site');
	});
	// $(window).on('load', function() {
	// 	setTimeout(function() {
	// 	    $('.preloader-wrapper').fadeOut(600);
	// 	    $('body').removeClass('preloader-site');
	//     }, 600);
	// });

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

});
