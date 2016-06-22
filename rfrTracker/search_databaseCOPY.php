<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>


<?php

  $con = null;
  static $servername = "50.62.176.70";
  $username = "ravenstudiosx";
  $password = "4666basss";
  $dbname = "buying";

//connects to the database
echo $_GET['function'];
echo "<br>";
switch($_GET['function']) {
case 'load_table':
    load_table($_GET['var']);
    break;
    
case 'editDB':
echo "case 2";
    edit($_GET['var1'],$_GET['var2']);
    
    break;
}

echo "<br>";
	echo "rnum = " .$_GET['var'];
	
	echo "<br>";
	echo "edit = " .$_GET['var2'];
	echo "<br>";

// test($_GET['cmd'],$_GET['cmd2']);
function connect_database(){

	global $con,$servername,$username,$password,$dbname;

	$con = mysqli_connect($servername,$username,$password,$dbname);
	
	if (!$con){
	    	die('Could not connect: ' . mysqli_error($con));
	}
	
}



//edits an entry
function edit($edit, $receiptInputNumber){
echo "edit called";

	global $con;
	
	connect_database($receiptInputNumber);
	echo "<br>";
	echo "edit rnum = " .$receiptInputNumber;
	
	echo "<br>";
	echo "edit edit = " .$edit;
	echo "<br>";
	
	mysqli_select_db($con,"buying");
	
	$sql ="UPDATE rfr_tracker SET date_purchased= '".$edit."' WHERE receipt='".$receiptInputNumber."'";
	//$sql="SELECT * FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
	mysqli_query($con,$sql);
	echo $sql;
	//while($row = mysqli_fetch_array($result)) {}
	
	mysqli_close($con);
}




//searchs the database for the receipt number and loads the table with the info
		function load_tableOLD($receiptInputNumber){
global $con;
	connect_database();
	
	mysqli_select_db($con,"buying");
	
	$sql="SELECT * FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
	$result = mysqli_query($con,$sql);

	echo "<table>
	<tr>
	<th>Recipt Number</th>
	<th>Store Purchased</th>
	<th>Date Purchased</th>
	<th>Store Transfered To</th>
	<th>Date Transfered</th>
	<th>Store Received</th>
	<th>Date Received</th>
	<th>RFR Or Parts</th>
	<th>Date RFR Or Parts</th>
	<th>SKU</th>
	</tr>";
	while($row = mysqli_fetch_array($result)) {
    	echo "<tr>";
    	echo "<td>" . $row['receipt'] . "</td>";
    	echo "<td>" . $row['store_purchased'] . "</td>";
    	echo "<td>" . $row['date_purchased'] . "</td>";
    	echo "<td>" . $row['transfered'] . "</td>";
    	echo "<td>" . $row['date_transfered'] . "</td>";
    	echo "<td>" . $row['received'] . "</td>";
    	echo "<td>" . $row['date_recived'] . "</td>";
    	echo "<td>" . $row['rfr_or_parts'] . "</td>";
    	echo "<td>" . $row['date_rfr_or_parts'] . "</td>";
    	echo "<td>" . $row['sku'] . "</td>";
    
    
    	echo "</tr>";
	}

	echo "<tr>";
	echo "</tr>";
	echo "</table>";
	echo "<br>";
	
	
	mysqli_close($con);
	}
	
	function load_table($receiptInputNumber){
	/*
		global $con;
		
		connect_database();
	
		mysqli_select_db($con,"buying");
	
		$sql="SELECT * FROM rfr_tracker WHERE receipt = '".$receiptInputNumber."'";
		$result = mysqli_query($con,$sql);

		//$strings = mysqli_fetch_array($result);
		//echo json_encode($strings);
		
		$data = array();
		while ($row = mysql_fetch_assoc($result)) {
		
   			$data[] = $row;
		}

		echo json_encode($data);
	
	
	
		mysqli_close($con);
		
		//$cars=array("Volvo","BMW","Toyota", "Volvo","BMW","Toyota", "Volvo","BMW","Toyota", "end");
		//echo json_encode($cars);
		*/
		$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5, 'f' => 6, 'a' => 7, 'b' => 8, 'c' => 9, 'd' => 10);
		echo json_encode($arr);
	}							
?>

</body>
</html>