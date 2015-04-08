$(document).ready(function(){
  $('.burger-button').click(function() {
    $(this).toggleClass('active');
    $('.navbar-sliding-menu').toggleClass('active');

    return false;
  });

  $('.navbar-sliding-menu').click(function() {
    $('.burger-button').click();
  });
});
