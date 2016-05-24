$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})






$(document).on('ready', function(){
	$(".menu a").smoothscrolling();

	$(window).scroll(function(){
		if ($(this).scrollTop()>100){
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	})
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




  $(window).scroll(function() {
    if($(this).scrollTop() < 350)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.navbar').addClass('barra');
    } else {
        $('.navbar').removeClass('barra');
    }
});