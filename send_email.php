<?php
  if (isset($_REQUEST['send_email'])) {
    require_once 'mandrill/src/Mandrill.php';

    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];

    try {
      $mandrill = new Mandrill('6JAVfM-xFK1Joz10qv1oEw');
      $message = array(
        'html' => '<h1>Новая заявка!</h1><p>Имя: '.$name.'<br />Телефон: '.$phone.'</p>',
        'text' => 'Новая заявка!\n\nИмя: '.$name.'\nТелефон: '.$phone,
        'subject' => 'Новая заявка',
        'from_email' => 'request@firsanovkapark.ru',
        'from_name' => 'Фирсановка Парк',
        'to' => array(
          array(
            'email' => 'gseno88@gmail.com',
            'type' => 'to'
          ),
          array(
            'email' => 'i.lyskina@deluxe-interactive.com',
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