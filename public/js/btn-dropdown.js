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
  
  if(window.innerWidth > 992) {
    $('#arrow-right').removeClass();
    $('#arrow-right').addClass('fas fa-arrow-right');
  }

  $('.navbar__dropdown, dropdown').mouseenter((e) => {
    $target = $(e.currentTarget).parent().children('.dropdown');
    
    $($target).slideDown();
  })

  $('.navbar__dropdown, dropdown').mouseleave((e) => {
    $target = $(e.currentTarget).parent().children('.dropdown');
    
    $($target).slideUp();
  })

})