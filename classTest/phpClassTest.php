<?php

require './lib/MYSQL.php';


class Test{


	public $x = 10;
	public $y;

	function __construct(){

		echo "test object made";
	}



	function  math($num){

		return $num * $this->x;
		
	}

}

$t = new Test();
echo $t->math(5);

$mysql = new MYSQLConnect('./config/config.ini');


$sql="SELECT * FROM numbers WHERE store = 'WSY'";

//$con = $mysql->db_connect();

$rows = $mysql->db_select($sql);


	echo $rows["1"]["cash"];
	echo "<br>";



?>