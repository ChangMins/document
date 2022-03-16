//
$(function(){
////////////////////////////////////////////////////////
$('.tabLink li').on('click', tabHandler);

function tabHandler() {
  var number = $(this).index();
  $('.tabLink li').removeClass('active');
  $(this).addClass('active')
  $('.tabContent>div').removeClass('active');
  $('.tabContent>div').eq(number).addClass('active');
}

$('.xi-close').on('click',function(){
  $('.headerWrap').slideToggle(1000);
})
////////////////////////////////////////////////////////
});