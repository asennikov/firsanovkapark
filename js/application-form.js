$(document).ready(function(){

  $('.application-form-editable').bind('change keyup', function() {
    var dummy = $(this).parent().find('.application-form-input-dummy');

    if ($(this).val().trim().length === 0) {
      dummy.text($(this).attr('placeholder'));
    }
    else {
      dummy.text($(this).val());
    }
  });

  $('.application-form').submit(function() {
    // send request to the server

    var onSuccess = function() {
      $('.application-form').fadeOut(300, function() {
        $('.application-success').fadeIn(300);
      });
    };

    onSuccess();

    return false;
  });
  
});
