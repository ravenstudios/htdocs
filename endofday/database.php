<?php

  

 $stores = array("WSY", "Belton", "Elms");
 $values = array();


switch($_GET['function']) {

	case 'loadNumbers':
	    loadNumbers($_GET['var']);
	    break;
    case 'getSaleTotals':
    	getSaleTotals();  
    	break;
}
function db_connect(){

	static $connection;
	// Load configuration as an array. Use the actual location of your configuration file

	if(!isset($connection)) {
		$config = parse_ini_file('./config/config.ini'); 

		// Try and connect to the database
		$connection = mysqli_connect($config['servername'],$config['username'],$config['password'],$config['dbname']);
		}
	// If connection was not successful, handle the error

	if($connection === false) {
    // Handle error - notify administrator, log to a file, show an error screen, etc.

		return mysqli_connect_error();
	}
	
	return $connection;
}

function db_query($query) {
    // Connect to the database
    $connection = db_connect();

    // Query the database
    $result = mysqli_query($connection,$query);

    return $result;
}

function db_error() {
    $connection = db_connect();
    return mysqli_error($connection);
}

function db_select($query) {

	
    $rows = array();
    $result = db_query($query);

    // If query failed, return `false`
    if($result === false) {
    	echo "not found";
    	echo "<br>"; 
        return false;
    }
		
    // If query was successful, retrieve all the rows into an array
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
        
    }
    
    

    return $rows;
}

function db_quote($value) {
    $connection = db_connect();
    return "'" . mysqli_real_escape_string($connection,$value) . "'";
}

	
	
function loadNumbers($dateX){
	
	$date = db_quote($dateX);
		
	global $values, $stores, $wsyCash, $wsySales, $beltonCash, $beltonSales, $elmsCash, $elmsSales;
		
	$con = db_connect();		
		
	$x = 0;


	for($i = 0; $i < count($stores); $i++){
			
		$sql="SELECT * FROM numbers WHERE dateEntered = ".$date." AND store = '". $stores[$i]."'";

		$rows = db_select($sql);

		$values[$x] = $rows["0"]["cash"];
	    $x++;
	    $values[$x] = $rows["0"]["sales"];
	    $x++;

	}	

	sendArray($values);

}

function sendArray($array){

	echo json_encode($array);
}


function saveData($dateX, $storeX, $cashX, $salesX){
	
	$date = db_quote($dateX);
	$store = db_quote($storeX);
	$cash = db_quote($cashX);
	$sales = db_quote($salesX);
	$con = db_connect();
	
	mysqli_select_db($con,"numbers");
	
		
	$sql = "INSERT INTO numbers (dateEntered, store, cash, sales ) 
	VALUES ($date, $store, $cash, $sales)";
	
		
	if ($con->query($sql) === TRUE) {
    	echo "saved";
    	alert();
    	

	} 

	else {
    	echo "Error: " . $con->error;
	}
}	
		
function alert(){	
echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Numbers Sent')
    window.location.href='http://www.teamczone.com/endofday';
    </SCRIPT>");
}

function getSaleTotals(){
	$store = "WSY"; //will replace with passed in store
	$startDate = date("m") . "/00/". date("Y");
	$currentDate = date("m/d/Y");

	// $startDate = "04/00/2016";
	// $currentDate = "04/31/2016";

	$total = 0;
	
	$con = db_connect();	

	$sql = "SELECT * FROM numbers WHERE dateEntered BETWEEN '" . $startDate ."' AND '" . $currentDate . "'";

	

	$wsyTotals;
	$btnTotals;
	$elmTotals;

	$rows = db_select($sql);

	
	

	$x = count($rows);

	for($i = 0; $i < $x; $i++){


		if($rows[$i]["store"] == "WSY"){

			$wsyTotals = $wsyTotals + (int)$rows[$i]["sales"];

		}

		if($rows[$i]["store"] == "Belton"){

			$btnTotals = $btnTotals + (int)$rows[$i]["sales"];

		}

		if($rows[$i]["store"] == "Elms"){

			$elmTotals = $elmTotals + (int)$rows[$i]["sales"];

		}








		
	}

 $totals[0] =  $wsyTotals;
 $totals[1] =  $btnTotals;
 $totals[2] =  $elmTotals;

 echo json_encode($totals);
	

}
				
?>


































