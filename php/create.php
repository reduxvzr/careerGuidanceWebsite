<?php 

require_once('./connect.php');

$lastname = $POST['last-name'];
$firstname = $POST['first-name'];
$middlename = $POST['middle-name'];
$birthdate = $POST['birth-date'];

mysqli_query($connect, "INSERT INTO `RESULT` (`id`, `lastname`, `name`, `surname`, `birth_date`) VALUES (NULL, $lastname, $firstname, $middlename, $birthdate");