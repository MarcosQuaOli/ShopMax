$(document).ready(() => {
	let left = 0;

	$('.btn-prev').click(() => {
		if(window.innerWidth > 992) {
			previus(52.5);
		} else {
			previus(100);
		}
	})

	$('.btn-next').click(() => {
		if(window.innerWidth > 992) {
			next(52.5, 210);
		} else {
			next(100, 400);
		}
	})

	$(window).resize(() => {
		if(window.innerWidth > 992) {
			left = 0;
			$('.rated__container').css('left', '-'+left+'%');
		} else {
			left = 0;
			$('.rated__container').css('left', '-'+left+'%');
		}
	})


	function next(e, val) {
		left += e;

		if(left >= val) {
			left = val;
		}

		$('.rated__container').css('left', '-'+left+'%');
	}

	function previus(e) {
		left -= e;

		if(left <= 0) {
			left = 0;
		}

		$('.rated__container').css('left', '-'+left+'%');
	}
})