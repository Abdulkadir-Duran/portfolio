<?php

$visitor_email = $_POST['email'];





$email_from = 'info@abdulkadirduranadan.com';
$email_subject = 'New Form Submission';
$email_body = 
               
               
               "User Email: $visitor_email.\n".
              
               
              
               $to = "abdulkadir5035190144@gmail.com";
               $headers = "From: $email_from \r\n";
               $headers ="Reply-To:$visitor_email\r\n";
            mail($to,$email_subjec,$email_body, $headers  );

            header("Location: index.html ");
            




?>