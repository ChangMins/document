//
$(function(){
  //$('selector').on('event', to do(function))//
  $('.popUp button').on('click',popClose);

  function popClose() {
    $(this).parent().hide();
  }
});