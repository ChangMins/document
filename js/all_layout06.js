//
$(function(){
///////////////////////////////////
// topBanner start //
$('.topBanner .container i').on('click',topBannerClose)

function topBannerClose () {
  $('.topBanner').slideUp(1000)
}
// topBanner end //

// visual slide  start //
$('.visualSlide').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
})
// visual slide  end //
///////////////////////////////////
});