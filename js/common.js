$(function() {

	// Preloader function
	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('preloader');
			if( !preloader.classList.contains('done') )
			{
				preloader.classList.add('done');
			}
		}, 1000);
	};

	$(document).ready(function(){
		$('.mainpage_navicon').click(function(){
			$(this).toggleClass('open');
			$('.mainpage_navbar').toggleClass('open');
		});
	});

});
