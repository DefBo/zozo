$(function() {

	// Preloader function
	// $(document).ready(function($) {
	//     var Body = $('body');
	//     Body.addClass('preloader-site');
	// });
	// $(window).on('load', function() {
	// 	setTimeout(function() {
	// 	    $('.preloader-wrapper').fadeOut(800);
	// 	    $('body').removeClass('preloader-site');
	//     }, 1000);
	// });

	$(document).ready(function(){
		$('.mainpage_navicon').click(function(){
			$(this).toggleClass('open');
			$('.mainpage_navbar').toggleClass('open');
		});
	});
});
