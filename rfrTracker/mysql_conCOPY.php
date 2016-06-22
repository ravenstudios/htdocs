<?php
$servername = "50.62.176.70";
$username = "ravenstudiosx";
$password = "4666basss";
$dbname = "buying";

echo "hi php";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "<br></br>";
echo "connected";

$receipt = $_POST['output_receipt'];
$store_purchased = $_POST['output_store_purchased'];
$date_purchased = $_POST['output_date_purchased'];
$transfered = $_POST['output_transfered_to'];
$date_transfered = $_POST['output_date_transfered'];
$received = $_POST['output_received'];
$date_received = $_POST['output_date_received'];
$rfr_or_parts = $_POST['output_rfr_or_parts'];
$date_rfr_or_parts = $_POST['output_date_rfr_or_parts'];
$sku = $_POST['output_sku'];

 





$sql = "INSERT INTO rfr_tracker (receipt, store_purchased, date_purchased, transfered, date_transfered, received, date_received, rfr_or_parts, date_rfr_or_parts, sku) 
VALUES ('$receipt', '$store_purchased', '$date_purchased', '$transfered', '$date_transfered', '$received', '$date_received', '$rfr_or_parts', '$date_rfr_or_parts', '$sku')";

echo $sql;

echo "<br></br>";
if ($conn->query($sql) === TRUE) {
   echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
echo "connected";
$conn->close();
?>


