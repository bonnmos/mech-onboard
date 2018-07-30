<?php
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

$writer = new Xlsx($spreadsheet);

$string = $_POST['company-details'];

$companyDetailsObj = json_decode($string);
// var_dump($companyDetailsObj);

// Column Headings
$sheet->setCellValue('A1', 'Company Name')->getStyle('A1')->getFont()->setBold(true);
$sheet->setCellValue('B1', 'Trade Name')->getStyle('B1')->getFont()->setBold(true);
$sheet->setCellValue('C1', 'Registration #')->getStyle('C1')->getFont()->setBold(true);
$sheet->setCellValue('D1', 'Company Email')->getStyle('D1')->getFont()->setBold(true);
$sheet->setCellValue('E1', 'Website (URL)')->getStyle('E1')->getFont()->setBold(true);
$sheet->setCellValue('F1', 'Phone Number')->getStyle('F1')->getFont()->setBold(true);
$sheet->setCellValue('G1', 'Address')->getStyle('G1')->getFont()->setBold(true);
$sheet->setCellValue('H1', 'City')->getStyle('H1')->getFont()->setBold(true);
$sheet->setCellValue('I1', 'State')->getStyle('I1')->getFont()->setBold(true);
$sheet->setCellValue('J1', 'Country')->getStyle('J1')->getFont()->setBold(true);
$sheet->setCellValue('K1', 'Zip')->getStyle('K1')->getFont()->setBold(true);
$sheet->setCellValue('L1', 'Other Information Shared')->getStyle('K1')->getFont()->setBold(true);;
$sheet->setCellValue('M1', 'Main Contact First Name')->getStyle('L1')->getFont()->setBold(true);
$sheet->setCellValue('N1', 'Main Contact Last Name')->getStyle('M1')->getFont()->setBold(true);
$sheet->setCellValue('O1', 'Main Contact Position')->getStyle('N1')->getFont()->setBold(true);
$sheet->setCellValue('P1', 'Main Contact Email')->getStyle('O1')->getFont()->setBold(true);
$sheet->setCellValue('Q1', 'Main Contact Mobile')->getStyle('P1')->getFont()->setBold(true);

// Column Values
$sheet->setCellValue('A2', $companyDetailsObj->companyName);
$sheet->setCellValue('B2', $companyDetailsObj->tradeName);
$sheet->setCellValue('C2', $companyDetailsObj->registrationNumber);
$sheet->setCellValue('D2', $companyDetailsObj->companyEmail);
$sheet->setCellValue('E2', $companyDetailsObj->websiteUrl);
$sheet->setCellValue('F2', $companyDetailsObj->phoneNumber);
$sheet->setCellValue('G2', $companyDetailsObj->address1.', '.$companyDetailsObj->address2);
$sheet->setCellValue('H2', $companyDetailsObj->city);
$sheet->setCellValue('I2', $companyDetailsObj->state);
$sheet->setCellValue('J2', $companyDetailsObj->country);
$sheet->setCellValue('K2', $companyDetailsObj->zip);
$sheet->setCellValue('L2', $companyDetailsObj->otherInfo);
$sheet->setCellValue('M2', $companyDetailsObj->mainContactFirstName);
$sheet->setCellValue('N2', $companyDetailsObj->mainContactLastName);
$sheet->setCellValue('O2', $companyDetailsObj->mainContactPosition);
$sheet->setCellValue('P2', $companyDetailsObj->mainContactEmail);
$sheet->setCellValue('Q2', $companyDetailsObj->mainContactMobile);

/*foreach($companyDetailsObj as $key => $value) {
  echo($value.', ');
  $sheet->setCellValue('A1', 'Hello World !');
  
}*/

$writer->save('Merchants to Onboard.xlsx');

// Prepair the email.
$mail = new PHPMailer(true); // true to allow exceptions
try {
  // Server settings
  $mail->SMTPDebug = 2;
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'bonnmos@gmail.com';
  $mail->Password = 'bmw4mina1';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
  );

  // Recipient(s)
  $mail->setFrom('info@directpay.online');
  // $mail->addAddress('bonnom@directpay.online');
  // $mail->addAddress('dickson.chemjor@directpay.online');
  
  // Attachments
  $mail->addAttachment('Merchants to Onboard.xlsx');

  // Content
  $mail->isHTML(true);
  $mail->Subject = 'Merchants to Onboard';
  $mail->Body = 'Please find attached an excel sheet with list of merchats';

  $mail->send();
  echo 'Message has been sent';

} catch(Exception $ex) {
  echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}