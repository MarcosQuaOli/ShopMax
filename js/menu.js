$(document).ready(() => {
	let $overlay = $('<div id="overlay"></div>');

	$('body').append($overlay);

	$('.header__icons button').click(() => {
		$('#overlay').show();
		$('.header__navbar').show().animate({width: '250px'});
	})

	$('#overlay').click(() => {
		$('#overlay').hide();
		$('.header__navbar').hide(400).animate({width: '0'});
	})

	$(window).resize((e) => {
		if(window.innerWidth > 992) {
			$('.header__navbar').show().css('width', 'auto');
			$('#overlay').hide();
		} else {
			$('.header__navbar').hide().css('width', '0');
			$('#overlay').hide();
		}
	})
})