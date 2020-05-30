$(document).ready(() => {
	$('.header__search').click(() => {
		$('.search').show('slow');
	})

	$('.search__close').click(() => {
		$('.search').hide('slow');
		$('.search input').val('');
	})

	$('.search input').keyup((e) => {
		if(e.keyCode === 13) {
			$('.search').hide('fast');
			$(e.target).val('');
		}
	})
})