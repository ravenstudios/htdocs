<?php
//need to make a config.ini file that look like this
//[data base]
//servername = 
//username = 
//password = 
//databaseName = 


class MYSQLConnect{
	
	private $servername, $username, $password, $databaseName;
	//must set this to work	
	//private  $filename;  //'./config/config.ini'

	

	 function __construct(){
	 	
		echo "mysql";
		//echo $file;

		//getConfig($file);
	
	}

	private function getConfig($filename){

		$config = parse_ini_file($filename);
		$this->servername = $config["servername"];
		$this->username = $config["username"];
		$this->password = $config["password"];
		$this->databaseName = $config["databaseName"];
	}

	function db_connect(){

		static $connection;
		// Load configuration as an array. Use the actual location of your configuration file

		if(!isset($connection)) {
			

			// Try and connect to the database
			$connection = mysqli_connect($this->servername, $this->username,$this->password,$this->dbname);
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

		
	//sample querry	
	// function loadNumbers($dateX){
		
	// 	$date = db_quote($dateX);
			
	// 	global $values, $stores, $wsyCash, $wsySales, $beltonCash, $beltonSales, $elmsCash, $elmsSales;
			
	// 	$con = db_connect();		
			
	// 	$x = 0;


	// 	for($i = 0; $i < count($stores); $i++){
				
	// 		$sql="SELECT * FROM numbers WHERE dateEntered = ".$date." AND store = '". $stores[$i]."'";

	// 		$rows = db_select($sql);

	// 		$values[$x] = $rows["0"]["cash"];
	// 	    $x++;
	// 	    $values[$x] = $rows["0"]["sales"];
	// 	    $x++;

	// 	}	

		

	// }

	


	
}
				
?>


