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

  $('.flat:not(.booked)').click(function() {
    $('.navbar .navbar-contacts .show-popup.link').click();
  });

  $('.floor-plan-selector li a').click(function() {
    var activeSelectorItem = $('.floor-plan-selector li.active');
    var selectorItem = $(this).parent();
    var selectorItemIndex = selectorItem.index('.floor-plan-selector li');
    var activeContentItem = $('.floor-plan-content-item.active');
    var selectedContentItem = $('.floor-plan-content-item:eq(' + selectorItemIndex + ')');

    if (!selectorItem.hasClass('active')) {
      activeSelectorItem.removeClass('active');
      selectorItem.addClass('active');

      activeContentItem.removeClass('active');
      selectedContentItem.addClass('active');
    }

    return false;
  });
});
