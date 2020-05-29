$(document).ready(() => {
  $('.navbar__icon').click((e) => { 
    
    if($(window).width() < 768) {
      $dropdown = $(e.currentTarget).parent().parent();
      $arrow = $(e.currentTarget).children();
  
      if($($arrow).hasClass('fa-arrow-up')) {
        $($arrow).removeClass();
        $($arrow).addClass('fas fa-arrow-down');
      } else {
        $($arrow).removeClass();
        $($arrow).addClass('fas fa-arrow-up');
      }
  
      $target = $($dropdown).children('.dropdown');
      $subtarget = $($dropdown).find('.dropdown').eq(1);
      
      $($subtarget).slideUp();
      $($target).slideToggle();
    }

	})
})