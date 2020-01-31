$(document).ready(() => {
	let $overlay = $('<div id="overlay"></div>');

	$('body').append($overlay);

	$('.header__icons button').click(() => {
		$('#overlay').show();
		$('.header__navbar').show('slow');
	})

	$('#overlay').click(() => {
		$('#overlay').hide();
		$('.header__navbar').hide('slow');
	})

	$(window).resize((e) => {
		if(window.innerWidth > 992) {
			$('.header__navbar').show();
			$('#overlay').hide();
		} else {
			$('.header__navbar').hide();
			$('#overlay').hide();
		}
	})

})