$(document).ready(() => {

	/*-----Click with menu responsive-----*/
	$('.home-btn').click(() => {
		if($(window).width() < 991) {
			$('.dropdown').slideToggle();
			$('.dropdown__sub').slideUp();

			arrowClick('.home-btn i');

			if($('.submenu-btn i').hasClass('fa-arrow-up')) {
				addArrowDown('.submenu-btn i');
			}
		}		
	})

	$('.submenu-btn').click(() => {
		if($(window).width() < 991) {
			$('.dropdown__sub').slideToggle();

			arrowClick('.submenu-btn i');
		}
	})

	/*-----Hover in home-----*/

	hoverDropdown('.home-hover', '.dropdown', '.home-btn');
	
	/*-----Hover in submenu-----*/

	hoverDropdown('.submenu-hover', '.dropdown__sub', '.submenu-btn');

	
	$(window).resize((e) => {
		if(window.innerWidth > 992) {
			changeDisplay('block');
			addArrowDown('.home-btn i');
			addArrowRight('.submenu-btn i');
		} else {
			changeDisplay('none');
			addArrowDown('.submenu-btn i');
		}
	})

	if(window.innerWidth > 992) {
		addArrowRight('.submenu-btn i');
	}

	function arrowClick(element) {
		if($(element).hasClass('fa-arrow-down')) {
			addArrowUp(element);
		} else {
			addArrowDown(element);
		}
	}

	function addArrowDown(button) {
		$(button).removeClass();
		$(button).addClass('fas fa-arrow-down');
	}

	function addArrowUp(button) {
		$(button).removeClass();
		$(button).addClass('fas fa-arrow-up');
	}

	function addArrowRight(button) {
		$(button).removeClass();
		$(button).addClass('fas fa-arrow-right');
	}

	function changeDisplay(element) {
		$('.dropdown').css('display', element);
		$('.dropdown__sub').css('display', element);
	}

	function hoverDropdown(link, ul, arrow) {
		$(link+','+ul+','+arrow).mouseenter(() => {
			if($(window).innerWidth() > 992) {
				$(ul).addClass('dropdown-animate');
			}
		})

		$(link+','+ul+','+arrow).mouseleave(() => {
			if($(window).width() > 992) {
				$(ul).removeClass('dropdown-animate');
			}
		})
	}
})