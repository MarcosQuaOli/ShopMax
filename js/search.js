$(document).ready(() => {
	$('.search-btn').click(() => {
		$('.header__search').show('slow');
	})

	$('.close-search').click(() => {
		$('.header__search').hide('slow');
		$('.header__search input').val('');
	})

	$('.header__search input').keyup((e) => {
		if(e.keyCode === 13) {
			$('.header__search').hide('fast');
			$(e.target).val('');
		}
	})
})