var setBookingStatuses = function(floor) {
  var building = parseInt($('.floor-plan').attr('selected-building'), 10) - 1;
  floor = floor || 0;

  if (buildings && buildings.length) {
    $('.floor-plan-content').each(function() {
      var floorPlan = $(this);

      floorPlan.find('.flat').each(function(flat) {
        var booked = buildings[building].floors[floor].flats[flat];
        var hover = $(this);
        var tooltip = floorPlan.find('.floor-plan-content-tooltips-item:eq(' + flat + ')');

        hover.off('click');
        tooltip.off('click');

        if (booked) {
          hover.attr('class', 'booked flat');
          tooltip.addClass('booked').text('Забронировано').show();
        }
        else {
          hover.attr('class', 'flat').click(showApplicationPopup);
          tooltip.removeClass('booked').text('Оставить заявку');
          tooltip.click(showApplicationPopup).hide();
        }
      });
    });
  }
};

var showApplicationPopup = function() {
  $('.navbar .navbar-contacts .show-popup.link').click();
};

var setTooltipPositions = function() {
  $('.flat').each(function(index) {
    var svgRect = $('svg.overlay')[0].getBoundingClientRect();
    var rect = this.getBoundingClientRect();
    var tooltip = $('.floor-plan-content-tooltips-item:eq(' + index + ')');

    tooltip.css({
      left: (rect.left - svgRect.left + rect.width / 2) + 'px',
      top: (rect.top - svgRect.top + rect.height / 2) + 'px'
    });
  });
};

var setHoverInteractions = function() {
  $('.flat').each(function(index) {
    var tooltip = $('.floor-plan-content-tooltips-item:eq(' + index + ')');
    $(this).mouseenter(function() {
      if (!tooltip.hasClass('booked')) {
        tooltip.show();
      }
    });
    $(this).mouseleave(function() {
      if (!tooltip.hasClass('booked')) {
        tooltip.hide();
      }
    });
  });
};

$(document).ready(function() {
  setTooltipPositions();
  setHoverInteractions();

  $('.floor-plan-selector li a').click(function() {
    var activeSelectorItem = $('.floor-plan-selector li.active');
    var selectorItem = $(this).parent();
    var selectorItems = $(this).parents('.floor-plan-selector').find('li');
    var selectedFloor = selectorItems.index(selectorItem);

    if (!selectorItem.hasClass('active')) {
      activeSelectorItem.removeClass('active');
      selectorItem.addClass('active');
    }

    setBookingStatuses(selectedFloor);

    return false;
  });
});
