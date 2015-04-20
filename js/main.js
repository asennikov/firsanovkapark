$(document).ready(function(){

  // Calculate hovers for buildings positions on 'plan' frame

  var recalcHoverPositions = function() {
    $('.cover-frame-plan .cover-frame-slide').each(function() {
      var frame = $(this);
      var fullImageWidth = frame.attr('data-full-width');
      var fullImageHeight = frame.attr('data-full-height');
      var frameWidth = frame.width();
      var frameHeight = frame.height();
      var sizedImageWidth;
      var sizedImageHeight;

      var fullImageApectRatio = fullImageWidth / fullImageHeight;
      var frameApectRatio = frameWidth / frameHeight;

      if (fullImageApectRatio > frameApectRatio) {
        sizedImageHeight = frameHeight;
        sizedImageWidth = sizedImageHeight * fullImageApectRatio;
      }
      else {
        sizedImageWidth = frameWidth;
        sizedImageHeight = sizedImageWidth / fullImageApectRatio;
      }

      var scale = sizedImageWidth / fullImageWidth;

      frame.find('img').each(function() {
        var offsetX = $(this).attr('data-offset-x');
        var offsetY = $(this).attr('data-offset-y');
        var width = $(this).attr('data-width');
        var height = $(this).attr('data-height');

        var offsetFromCenterX = - (fullImageWidth / 2 - offsetX);
        var offsetFromCenterY = - (fullImageHeight / 2 - offsetY);

        $(this).css({
          'margin-left': (offsetFromCenterX * scale) + 'px',
          'margin-top': (offsetFromCenterY * scale)  + 'px',
          'width': (width * scale) + 'px',
          'height': (height * scale) + 'px'
        });
      });
    });
  };

  // For some reason css3 transitions produce glitches in desktop Safari
  var cssUnfriendlyBrowser = bowser.safari && !bowser.ios;
  var timeout;

  // Init Fullpage.js plugin

  $('.wrapper').fullpage({
    anchors: ['main', 'plan', 'atmosphere', 'advantages', 'map', 'application'],
    sectionSelector: 'section',
    slideSelector: '.slide',
    slidesNavigation: true,
    css3: !cssUnfriendlyBrowser,
    easing: 'linear',
    verticalCentered: false,
    paddingTop: 95,

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      var hidingContent = loadedSection.find('.cover-frame-wrapper');

      if(anchorLink == 'plan'){
        clearTimeout(timeout);
        hidingContent.show();

        timeout = setTimeout(function() {
          hidingContent.fadeOut(300);
        }, 2000);
      }
    },
    onLeave: function(index, nextIndex, direction){
      var loadedSection = $(this);
      var hidingContent = loadedSection.find('.cover-frame-wrapper');

      if(index == 2){
        clearTimeout(timeout);
        hidingContent.fadeIn(300);
      }
    },
    afterResize: recalcHoverPositions,
    afterRender: recalcHoverPositions
  });

  // Init Slick.js carousel in popup

  $('.slick-carousel').slick({
    speed: 500,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1
  });

});
