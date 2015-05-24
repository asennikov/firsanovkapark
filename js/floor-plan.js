var setBookingStatuses = function(floor) {
  var building = parseInt($('.floor-plan').attr('selected-building'), 10) - 1;
  floor = floor || 0;

  if (buildings && buildings.length) {
    $('.flat').each(function(flat) {
      var booked = buildings[building].floors[floor].flats[flat];

      if (booked) {
        $(this).attr('class', 'booked flat');
      }
      else {
        $(this).attr('class', 'flat');
      }
    });
  }

  powertipInit();
};

var powertipInit = function() {
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
};

$(document).ready(function(){
  $('.flat:not(.booked)').click(function() {
    $('.navbar .navbar-contacts .show-popup.link').click();
  });

  $('.floor-plan-selector li a').click(function() {
    var activeSelectorItem = $('.floor-plan-selector li.active');
    var selectorItem = $(this).parent();
    var selectedFloor = selectorItem.index('.floor-plan-selector li');
    var activeContentItem = $('.floor-plan-content-item.active');
    var selectedContentItem = $('.floor-plan-content-item:eq(' + selectedFloor + ')');

    if (!selectorItem.hasClass('active')) {
      activeSelectorItem.removeClass('active');
      selectorItem.addClass('active');

      activeContentItem.removeClass('active');
      selectedContentItem.addClass('active');
    }

    setBookingStatuses(selectedFloor);

    return false;
  });
});
