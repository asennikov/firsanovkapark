$(document).ready(function(){
  $('.flat.booked').data('powertip', 'Забронировано');
  $('.flat:not(.booked)').data('powertip', 'Оставить заявку');

  $('.flat').powerTip({
    followMouse: true,
    offset: 30,
    fadeInTime: 150,
    fadeOutTime: 150,
    closeDelay: 100,
    intentPollInterval: 100,
    intentSensitivity: 100
  });

  $('.floor-plan-selector li a').click(function() {
    var selectorItem = $(this).parent();
    var selectorItemIndex = selectorItem.index('.floor-plan-selector li');

    if (!selectorItem.hasClass('active')) {
      $('.floor-plan-selector li.active').removeClass('active');
      selectorItem.addClass('active');

      $('.floor-plan-content').fadeOut(150, function() {
        $(this).fadeIn(150);
      });
    }

    return false;
  });
});
