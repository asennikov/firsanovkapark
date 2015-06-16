var selectedBuilding;

var setFloorPlan = function(floor) {
  var floorPlanType = selectedBuilding.floors[floor].floor_plan;
  var floorPlanOptions = floorPlans[floorPlanType];
  var overlay = $('.floor-plan-content .overlay');
  var tooltips = $('.floor-plan-content-tooltips');


  $('.floor-plan-content-item').css({
    'background-image': 'url(' + floorPlanOptions.img + ')'
  });

  overlay.html('');
  tooltips.html('');

  floorPlanOptions.flats.forEach(function(flatShape) {
    overlay.append('<path class="flat" d="' + flatShape + '"/>');
    tooltips.append('<div class="floor-plan-content-tooltips-item"></div>');
  });
  $(".floor-plan-content").html($(".floor-plan-content").html());
};

var setBookingStatuses = function(floor) {
  floor = floor || 0;

  if (buildings && buildings.length) {
    var floorPlan = $('.floor-plan-content');

    floorPlan.find('.flat').each(function(flat) {
      var booked = selectedBuilding.floors[floor].flats[flat];
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

var initFloorPlanSelector = function() {
  $('.floor-plan-selector li a').click(function() {
    var activeSelectorItem = $('.floor-plan-selector li.active');
    var selectorItem = $(this).parent();
    var selectorItems = $(this).parents('.floor-plan-selector').find('li');
    var selectedFloor = selectorItems.index(selectorItem);

    if (!selectorItem.hasClass('active')) {
      activeSelectorItem.removeClass('active');
      selectorItem.addClass('active');

      $('.floor-plan-content-item').fadeTo(200, 0.8, function() {
        $(this).fadeTo(200, 1);
      });
    }

    setFloorPlan(selectedFloor);

    setTooltipPositions();
    setHoverInteractions();

    setBookingStatuses(selectedFloor);

    return false;
  });
};
