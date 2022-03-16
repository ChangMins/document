//
$(function(){
///////////////////////////////////////////////////
$('.xi-close').on('click',function(){
  $('.popUp').hide();
})

$('.topMenu li').on('click', tabHandler);

function tabHandler() {
  var number = $(this).index();
  $('.topMenu li').removeClass('active');
  $(this).addClass('active')
}

///////////////////////////////////////////////////
});