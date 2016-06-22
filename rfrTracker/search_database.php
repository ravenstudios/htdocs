<?php

  $con = null;
  static $servername = "50.62.176.70";
  $username = "ravenstudiosx";
  $password = "4666basss";
  $dbname = "buying";
  $var0;
  $var1;
  $var2;
  $var3;
  $var4;
  $var5;
  $var6;
  $var7;
  $var8;
  $var9;
  


switch($_GET['function']) {
case 'loadTable':
    load_table($_GET['var']);
    break;
    
case 'checkForEntry':
    checkForEntry($_GET['var']);
    break; 

case 'saveData':
    
    $var0 = $_GET['v0'];
    $var1 = $_GET['v1'];
    $var2 = $_GET['v2'];
    $var3 = $_GET['v3'];
    $var4 = $_GET['v4'];
    $var5 = $_GET['v5'];
    $var6 = $_GET['v6'];
    $var7 = $_GET['v7'];
    $var8 = $_GET['v8'];
    $var9 = $_GET['v9'];
    saveData();
    break;        
    
}

function connect_database(){

	global $con,$servername,$username,$password,$dbname;

	$con = mysqli_connect($servername,$username,$password,$dbname);
	
	if (!$con){
	    	die('Could not connect: ' . mysqli_error($con));
	}
	
}





	
	function load_table($receiptInputNumber){
	
		global $con;
		
		connect_database();
	
		mysqli_select_db($con,"buying");
	
		$sql="SELECT * FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
		$result = mysqli_query($con,$sql);

		$strings = mysqli_fetch_array($result);
		echo json_encode($strings);
		
		
	
		mysqli_close($con);
		
	
	}
	
	
	
	function checkForEntry($receiptInputNumber){
	
	
	global $con;
		
		connect_database();
	
		mysqli_select_db($con,"buying");
	
		$sql="SELECT receipt FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
		
		
		
				
		$result = mysqli_query($con,$sql);	
		
		$var =  mysqli_fetch_array($result);		
		
		if($var[0] === $receiptInputNumber){
			
			echo '1';
		}
		
		else{
		
			echo '0';
		}	
	}	



function saveData(){
	
	
	global $con, $var0, $var1, $var2, $var3, $var4, $var5, $var6, $var7, $var8, $var9;
		
		connect_database();
	
		mysqli_select_db($con,"buying");
	
		//$sql="SELECT receipt FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
		
		$sql = "INSERT INTO rfr_tracker (receipt, store_purchased, date_purchased, transfered, date_transfered, received, date_received, rfr_or_parts, date_rfr_or_parts, sku) 
VALUES ('$var0', '$var1', '$var2', '$var3', '$var4', '$var5', '$var6', '$var7', '$var8', '$var9')";
	//echo "var0 = ".$var0;
	//echo $sql;
				
		if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $con->error;
}

$conn->close();
		
	}	
					
?>

