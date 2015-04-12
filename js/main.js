$(document).ready(function(){
  $('.burger-button').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.navbar-sliding-menu').addClass('active');
    }
    else {
      $('.navbar-sliding-menu.active, .navbar-sliding-popup.active').removeClass('active');
    }

    return false;
  });

  $('.navbar-sliding-menu a').click(function() {
    $('.burger-button').click();
  });

  $('.show-popup').click(function() {
    var popupId = $(this).attr('data-popup-id');
    var popup = $('#' + popupId);

    if (popup.length === 1) {
      popup.addClass('active');
      $('.burger-button').addClass('active');
    }

    return false;
  });

  $('.wrapper').fullpage({
    anchors: ['main', 'plan', 'atmosphere', 'advantages', 'map', 'application'],
    sectionSelector: 'section',
    slideSelector: '.slide',
    slidesNavigation: true,
    paddingTop: 95
  });

  // Carousel in popup

  $('.slick-carousel').slick({
    speed: 500,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1
  });


  // Map related initializations

  var options = {
      zoom: 14,
      center:  new google.maps.LatLng(55.967967, 37.280199),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
  };

  map = new google.maps.Map($('.cover-frame-map-container')[0], options);
  map.setOptions({
    styles: [
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#66814D" }
        ]
      },{
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#566447" }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          { "color": "#000000" }
        ]
      },{
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          { "color": "#3E3A27" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          { "color": "#ffffff" },
          { "visibility": "simplified" },
          { "lightness": -22 }
        ]
      },{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#ffffff" },
          { "visibility": "on" },
          { "lightness": -22 }
        ]
      },{
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "color": "#000000" },
          { "lightness": 23 }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#ffffff" },
          { "lightness": -22 }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "color": "#000000" },
          { "lightness": 23 }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#000000" },
          { "lightness": 23 }
        ]
      }
    ]
  });

});
