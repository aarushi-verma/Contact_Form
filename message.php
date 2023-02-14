<?php
// lets get all form values

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$website= $_POST['website'];

if (!empty($email) && !empty($message))
{
   if(filter_var ($email,FILTER_VALIDATE_EMAIL )){//if user entered email is valid
      $receiver = "2005211@kiit.ac.in";//email receiver email address
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nWebsite: $website\nPhone: $phone\nMessage: $message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body))//nail() is an inbuilt php function to send mail
      {

      }else{
        echo "Sorry, failed to send message!";
      }
   }
   else{
    echo "Enter a valid email";
   }
}
else
{
    echo "Email and password field is required";
}

?>
