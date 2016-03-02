$(document).ready(function() {
	$(".mobile-menu-button").click(function() {
		$(".navigation").slideToggle();
	});
	$('ul > li').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).fadeIn();
	}, function() {
	    $(this).find('.dropdown-menu').stop(true, true).fadeOut();

	});
});
