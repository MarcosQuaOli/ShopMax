$(document).ready(() => {
  $('.navbar__icon').click((e) => { 
    
    if($(window).width() < 768) {
      $dropdown = $(e.currentTarget).parent().parent();
      $arrow = $(e.currentTarget).children();
  
      if($($arrow).hasClass('fa-arrow-down')) {
        $($arrow).removeClass();
        $($arrow).addClass('fas fa-arrow-up');
      } else {
        $($arrow).removeClass();
        $($arrow).addClass('fas fa-arrow-down');
      }
  
      $target = $($dropdown).children('.dropdown');
      $subtarget = $($dropdown).find('.dropdown').eq(1);
      
      $($subtarget).slideUp();
      $($target).slideToggle();
    }    
  })
  
  if(window.innerWidth > 768) {
    $('#arrow-right').removeClass();
    $('#arrow-right').addClass('fas fa-arrow-right');

    $('.navbar__rel').on('mouseenter mouseleave', (e) => {
  
      $target = $(e.currentTarget).children('.dropdown');
  
      $($target).slideToggle();
      
    });
  }

  $(window).resize(() => {
    if(window.innerWidth > 768) {
      $('#arrow-right').removeClass();
      $('#arrow-right').addClass('fas fa-arrow-right');
    }
  })
  

})