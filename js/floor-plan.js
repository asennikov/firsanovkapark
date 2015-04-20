$(document).ready(function(){
  $('.floor-plan-selector li a').click(function() {
    var selectorItem = $(this).parent();
    var selectorItemIndex = selectorItem.index('.floor-plan-selector li');
    var selectedContent = $('.floor-plan-content:eq(' + selectorItemIndex + ')');

    if (!selectorItem.hasClass('active')) {
      $('.floor-plan-selector li.active').removeClass('active');
      $('.floor-plan-content.active').removeClass('active');

      selectorItem.addClass('active');
      selectedContent.addClass('active');
    }

    return false;
  });
});
