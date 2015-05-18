<?php
  if (isset($_REQUEST['send_email'])) {
    require_once 'mandrill/src/Mandrill.php';

    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];
    $comment = $_REQUEST['comment'];

    try {
      $mandrill = new Mandrill('6JAVfM-xFK1Joz10qv1oEw');
      $message = array(
        'html' => '<h1>Новая заявка!</h1><p>Имя: '.$name.'<br />Телефон: '.$phone.'<br />Комментарий: '.$comment.'</p>',
        'text' => 'Новая заявка!\n\nИмя: '.$name.'\nТелефон: '.$phone.'\nКомментарий: '.$comment,
        'subject' => 'Новая заявка',
        'from_email' => 'request@firsanovkapark.ru',
        'from_name' => 'Фирсановка Парк',
        'to' => array(
          array(
            'email' => '2205972@mail.ru',
            'type' => 'to'
          )
        )
      );
      $async = true;
      $result = $mandrill->messages->send($message, $async);
      echo(json_encode($result));

    } catch(Mandrill_Error $e) {
      // Mandrill errors are thrown as exceptions
      echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    }

    die();
  }
?>
