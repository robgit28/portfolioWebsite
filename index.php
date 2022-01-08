<?php

  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

$mailTo = "robert@robertgarner.co.uk";
$headers = "From: ".$mailFrom;
$txt = "You have received email from ".$name.".\r\n".$subject.".\r\n".$message;
// mail function - all content from email
    mail($mailTo, $subject, $txt, $headers);
    // takes us back to homepage
    header("Location: index.php?mailsend");
  }
?>
