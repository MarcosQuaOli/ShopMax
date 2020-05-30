$(document).ready(() => {
	let $overlay = $('<div class="navbar__overlay"></div>');

	$('body').append($overlay);

	$('.bar-btn').click(() => {
		$('.navbar__overlay').show();
		$('.navbar').show().animate({width: '200px'});
	})

	$('.navbar__overlay').click(() => {
		$('.navbar__overlay').hide();
		$('.navbar').hide(400).animate({width: '0'});
	})

	$(window).resize((e) => {
		if(window.innerWidth > 768) {
			$('.navbar').css({'width': 'auto', 'display': 'flex'});

		} else {
			$('.navbar').hide().css('width', '0');
		}
		
		$('.navbar__overlay').hide();
	})
})