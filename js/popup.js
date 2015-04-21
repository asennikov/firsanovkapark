$(document).ready(function(){

  $('.burger-button').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('#menu-popup').addClass('active');
    }
    else {
      $('.sliding-popup.active').removeClass('active');
    }

    return false;
  });

  $('#menu-popup a').click(function() {
    $('.burger-button').click();
  });

  $('.show-popup').click(function() {
    var popupId = $(this).attr('data-popup-id');
    var popup = $('#' + popupId);

    if (popup.length === 1) {
      popup.addClass('active');
      $('.burger-button').addClass('active');

      if (popupId === 'application-popup') {
        $('.application-success').hide();
        $('.application-form').show();
      }
      else if (popupId === 'floor-plan-popup') {
        var selectedBuildingIndex = $(this).data('building-index');
        $('.floor-plan-caption-index').text(selectedBuildingIndex);
        
        setBookingStatuses();
      }
    }

    return false;
  });

});
