<?php
// Replace with your real email
$receiving_email_address = 'machahdavis@gmail.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
  include($php_email_form);
} else {
  die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address; // Fix here
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Optional: Uncomment to enable SMTP (required by some hosting providers)
 /*
$contact->smtp = array(
  'host' => 'smtp.your-email-provider.com',
  'username' => 'your-email@example.com',
  'password' => 'your-email-password',
  'port' => '587' // or 465 for SSL
);
*/

$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

echo $contact->send();
?>
