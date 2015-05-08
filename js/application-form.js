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
    var url = window.location.origin;
    var name = $('.application-form input:first').val();
    var phone = $('.application-form input:last').val();
    var data = {
      send_email: true,
      name: name,
      phone: phone
    };

    var onSuccess = function() {
      $('.application-form').fadeOut(300, function() {
        $('.application-success').text('Данные получены, ожидайте звонка!').fadeIn(300);
      });
    };
    var onFail = function() {
      $('.application-success').text('Заявка не отправлена, перезагрузите страницу и попробуйте ещё раз!').fadeIn(300);
    };

    $.post(url, data).done(onSuccess).fail(onFail);

    return false;
  });

  $('.application-form-textarea textarea').keydown(function() {
    var textarea = $(this);
    setTimeout(function(){
      textarea.css({ height: '25px', padding: 0 });
      textarea.css({ height: textarea[0].scrollHeight + 'px'});
    },0);
  });

});
