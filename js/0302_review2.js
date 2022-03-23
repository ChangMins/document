$(function () {
///////////////////////////////////////////////////
  // topBanner start //
  $('.topBanner .container i').on('click',topBannerClose);
    
  function topBannerClose () {
    $('.topBanner').slideUp(1000)
  };
  // topBanner end //

    
  $('.toTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
    return false;
  });

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    if (sct > 250) {
      $('.toTop').fadeIn();
    }
    else {
      $('.toTop').fadeOut();
    }
    
})
///////////////////////////////////////////////////
});