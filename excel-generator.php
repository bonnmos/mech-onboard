<?php
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

/**
 * Upload the selected certificate.
 */
if (!empty($_FILES)) {
  uploadFile();
} else {
  echo 'No file attached!!\n';
}

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

$writer = new Xlsx($spreadsheet);

$string = $_POST['company-details'];

echo ('string from get: '. $string);

$companyDetailsObj = json_decode($string);

// echo('$companyDetailsObj: '. $companyDetailsObj);
// var_dump($companyDetailsObj);

// Column Headings
$sheet->setCellValue('A1', 'Account Type')->getStyle('A1')->getFont()->setBold(true);
$sheet->setCellValue('B1', 'Company Name')->getStyle('B1')->getFont()->setBold(true);
$sheet->setCellValue('C1', 'Trade Name')->getStyle('C1')->getFont()->setBold(true);
$sheet->setCellValue('D1', 'Registration #')->getStyle('D1')->getFont()->setBold(true);
$sheet->setCellValue('E1', 'Company Email')->getStyle('E1')->getFont()->setBold(true);
$sheet->setCellValue('F1', 'Website (URL)')->getStyle('F1')->getFont()->setBold(true);
$sheet->setCellValue('G1', 'Phone Number')->getStyle('G1')->getFont()->setBold(true);
$sheet->setCellValue('H1', 'Address')->getStyle('H1')->getFont()->setBold(true);
$sheet->setCellValue('I1', 'City')->getStyle('I1')->getFont()->setBold(true);
$sheet->setCellValue('J1', 'State')->getStyle('J1')->getFont()->setBold(true);
$sheet->setCellValue('K1', 'Country')->getStyle('K1')->getFont()->setBold(true);
$sheet->setCellValue('L1', 'Zip')->getStyle('L1')->getFont()->setBold(true);
$sheet->setCellValue('M1', 'Other Information Shared')->getStyle('M1')->getFont()->setBold(true);;
$sheet->setCellValue('N1', 'Main Contact First Name')->getStyle('N1')->getFont()->setBold(true);
$sheet->setCellValue('O1', 'Main Contact Last Name')->getStyle('O1')->getFont()->setBold(true);
$sheet->setCellValue('P1', 'Main Contact Position')->getStyle('P1')->getFont()->setBold(true);
$sheet->setCellValue('Q1', 'Main Contact Email')->getStyle('Q1')->getFont()->setBold(true);
$sheet->setCellValue('R1', 'Main Contact Mobile')->getStyle('R1')->getFont()->setBold(true);

// Column Values
$sheet->setCellValue('A2', $companyDetailsObj->accountType);
$sheet->setCellValue('B2', $companyDetailsObj->companyName);
$sheet->setCellValue('C2', $companyDetailsObj->tradeName);
$sheet->setCellValue('D2', $companyDetailsObj->registrationNumber);
$sheet->setCellValue('E2', $companyDetailsObj->companyEmail);
$sheet->setCellValue('F2', $companyDetailsObj->websiteUrl);
$sheet->setCellValue('G2', $companyDetailsObj->phoneNumber);
$sheet->setCellValue('H2', $companyDetailsObj->address1.', '.$companyDetailsObj->address2);
$sheet->setCellValue('I2', $companyDetailsObj->city);
$sheet->setCellValue('J2', $companyDetailsObj->state);
$sheet->setCellValue('K2', $companyDetailsObj->country);
$sheet->setCellValue('L2', $companyDetailsObj->zip);
$sheet->setCellValue('M2', $companyDetailsObj->otherInfo);
$sheet->setCellValue('N2', $companyDetailsObj->mainContactFirstName);
$sheet->setCellValue('O2', $companyDetailsObj->mainContactLastName);
$sheet->setCellValue('P2', $companyDetailsObj->mainContactPosition);
$sheet->setCellValue('Q2', $companyDetailsObj->mainContactEmail);
$sheet->setCellValue('R2', $companyDetailsObj->mainContactMobile);

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
  $mail->addAddress('bonnom@directpay.online');
  $mail->addAddress('dickson.chemjor@directpay.online');
  
  // Attachments
  $mail->addAttachment('Merchants to Onboard.xlsx');
  if (!empty($_FILES)) {
    // $mail->atta
  }

  // Content
  $mail->isHTML(true);
  $mail->Subject = 'Merchants to Onboard';
  $mail->Body = 'Please find attached an excel sheet with list of merchats';

  $mail->send();
  echo 'Message has been sent';

} catch(Exception $ex) {
  echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

function uploadFile() {
  $path = 'upload/' . $_FILES['file']['name'];
  if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
    echo 'File uploaded to: '. $path;
  } else {
    echo 'There was an error uploading file';
  }
}