//
$(function(){
///////////////////////////////////
// topBanner start //
$('.topBanner .container i').on('click',topBannerClose);

function topBannerClose () {
  $('.topBanner').slideUp(1000)
};
// topBanner end //

// visual slide  start //
$('.visualSlide').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: '<div class="msLeft"></div>',
  nextArrow: '<div class="msRight"></div>'
  
});
$('.visualSlide figure').eq(1).addClass('oo');
$('.visualSlide').on('afterChange',function(e,s,c){
  console.log(e,s,c);
  $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
  if(c===1) {
    $('.msLeft').addClass('oo')
  }else {
    $('.msLeft').removeClass('oo')
  }
});

// visual slide  end //

// eventSlide start //
$('.ProductSlide').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed : 2000
});

$('.eventProduct i:nth-of-type(1)').on('click',function(){
  $('.ProductSlide').slick('slickPause')
});
$('.eventProduct i:nth-of-type(2)').on('click',function(){
  $('.ProductSlide').slick('slickPlay')
});
// eventSlide end //

// all product slide //
$('.allProductSlide').slick({
  arrows: false,
  dots: true,
  slidesToShow: 5,
  centerMode: true,
});

$('.allProduct i:first-child').on('click', function(){
  $('.allProductSlide').slick('slickPrev')
});

$('.allProduct i:last-child').on('click', function(){
  $('.allProductSlide').slick('slickNext')
});
///////////////////////////////////
});