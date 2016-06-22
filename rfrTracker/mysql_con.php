<?php


$receipt = $_POST['output_receipt'];

echo $receipt;

?>
/*


$con = null;
$servername = "50.62.176.70";
$username = "ravenstudiosx";
$password = "4666basss";
$dbname = "buying";


$con = new mysqli($servername, $username, $password, $dbname);








/*

	
		global $con;
		
		connect_database();
	
		mysqli_select_db($con,"buying");
	
		$sql="SELECT * FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
		$result = mysqli_query($con,$sql);

		
		if (mysqli_num_rows($sql) >0) {
		
   			echo "Entry all ready exists";
   			
		} else {
		
    		echo "can be new";
		}
	
		mysqli_close($con);
		
		
	*/



/*

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
*/
?>


