import 'bootstrap';


// PRELOADER
jQuery(window).load(function () {
	// will first fade out the loading animation
	jQuery(".sk-spinner").fadeOut();
	// will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
});

// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
	effect: 'fadeScale',
});

// ISOTOPE FILTER
jQuery(document).ready(function ($) {

	if ($('.iso-box-wrapper').length > 0) {

		var $container = $('.iso-box-wrapper'),
			$imgs = $('.iso-box img');

		$container.imagesLoaded(function () {

			$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
			});

			$imgs.load(function () {
				$container.isotope('reLayout');
			})

		});

		//filter items on button click

		$('.filter-wrapper li a').click(function () {

			var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});

			// don't proceed if already selected 

			if ($this.hasClass('selected')) {
				return false;
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

			return false;
		});

	}

});


// MAIN NAVIGATION
$('.main-navigation').onePageNav({
	scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
	scrollOffset: 75, //Height of Navigation Bar
	filter: ':not(.external)',
	changeHash: true
});

/* NAVIGATION VISIBLE ON SCROLL */
mainNav();
$(window).scroll(function () {
	mainNav();
});

function mainNav() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (top > 40) $('.sticky-navigation').stop().animate({
		"opacity": '1',
		"top": '0'
	});
	else $('.sticky-navigation').stop().animate({
		"opacity": '0',
		"top": '-75'
	});
}


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function () {
	$(".navbar-collapse").collapse('hide');
});


// WOW ANIMATED 
$(function () {
	new WOW().init();
});

$('.back-to-top').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 800);
});

$(window).scroll(function () {
	let scrolled = $(window).scrollTop();

	if (scrolled > 350) {
		$('.back-to-top').addClass('active');
	} else {
		$('.back-to-top').removeClass('active');
	}
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


$(document).ready(function () {

	$('#button').on('click', function () {
		alert('Hello, it`s JQuery!');
	});

});