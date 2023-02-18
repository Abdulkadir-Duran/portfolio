<?php

           
               $name = $_POST['name'];
               $email = $_POST['email'];
               $phone = $_POST['phone'];
               $message = $_POST['message'];
               $email_from = 'info@abdulkadirduranadan.com';
               
              
               $select_subject = $_POST['subject'];
               $to = "abdulkadir5035190144@gmail.com";
              
               $headers = "From: $name: $email  \r\n";
               $headers = "From: $name \r\n";
               $headers ="Reply-To:$email\r\n";
           
               $email_body =" Name: $name\n E-Mail: $email\n Phone:$phone\n  Message: $message\n ";
               
               mail($to, $select_subject, $email_body, $headers  );
               $email_from = 'info@abdulkadirduranadan.com';

               header("Location: index.html ");
           
           
               // If there are no e
               
          
           
           

?>

