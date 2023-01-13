$(function() {

	new WOW().init();

	// hamburger
	$(".hamburger").click(function() {
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.nav__list').slideDown(300);
		}else{
			$('.nav__list').slideUp(300);
		}
	});

	// yakors
	$('a.yakor').on('click', function (event) {
		var $anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	// reviews tab
	$('.partners__item').click(function() {
		const revID = $(this).data('revid');

		$('.partners__item').not(this).removeClass('active');
		$(this).addClass('active');

		$('.reviews__item').not(revID).removeClass('active');
		$(revID).addClass('active');
	});

});