$(document).ready(function(){
  $('.burger-button').click(function() {
    $(this).toggleClass('active');
    $('.navbar-sliding-menu').toggleClass('active');

    return false;
  });
});
