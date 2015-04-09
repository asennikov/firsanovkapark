$(document).ready(function(){
  $('.burger-button').click(function() {
    $(this).toggleClass('active');
    $('.navbar-sliding-menu').toggleClass('active');

    return false;
  });

  $('.navbar-sliding-menu a').click(function() {
    $('.burger-button').click();
  });

  $('.wrapper').fullpage({
    anchors: ['main', 'plan', 'atmosphere', 'advantages', 'map', 'application'],
    sectionSelector: 'section',
    slideSelector: '.slide',
    slidesNavigation: true,
    paddingTop: 95
  });

});
