/*
NOTES AND CHANGES:



edit old entry
*/




// var ids = ["output_receipt", "output_store_purchased", "output_date_purchased", "output_transfered_to", 
// 	"output_date_transfered", "output_received", "output_date_received", "output_rfr_or_parts", "output_date_rfr_or_parts", "output_sku"];
// var textboxDateIds = ["output_date_purchased" ,"output_date_transfered", "output_date_received", "output_date_rfr_or_parts"];	

// var values =  new Array(10);	
// var str; 
var xmlhttp = checkBrowser();
// var formData = new Array(10);
var table = ["wsy_cash", "wsy_sales", "belton_cash", "belton_sales", "elms_cash", "elms_sales"]
        	
function loadData() {
	
date = document.getElementById("date").value;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
			strings = JSON.parse(xmlhttp.responseText);            
                
			setTable(strings);
		}
	};


xmlhttp.open("GET","database.php?function=loadNumbers&var=" + date, true);
xmlhttp.send();
}



function sendNumbers(){
    
console.log("send numbers called");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
            window.alert('Numbers Sent')
    window.location.href='http://www.teamczone.com/endofday';
        }
    };


xmlhttp.open("GET", getQueryString(), true);
xmlhttp.send();

}

function setTable(array){

    

	

	for(i = 0; i < table.length; i++){

        if(array[i] === null){

            array[i] = 0.00;

        }
        
		document.getElementById(table[i]).innerHTML = "$" + array[i];

	}

    
    
    var total_cash = parseInt(array[0]) + parseInt(array[2]) + parseInt(array[4]);
    
    var total_sales = parseInt(array[1]) + parseInt(array[3]) + parseInt(array[5]);

   
    
    
    
        document.getElementById("total_cash").innerHTML = "$" + total_cash;
        document.getElementById("total_sales").innerHTML = "$" + total_sales;
    
    

        eom();
    
    
    
}

function setTotals(){
    
    var wsy_cash = document.getElementById("wsy_cash").value;
    var belton_cash = document.getElementById("belton_cash").value;
    var elms_cash = document.getElementById("elms_cash").value;
    var total_cash = wsy_cash + belton_cash + elms_cash;
    
    var wsy_sales = document.getElementById("wsy_cash").value;
    var belton_sales = document.getElementById("belton_cash").value;
    var elms_sales = document.getElementById("elms_cash").value;
    var total_sales = wsy_cash + belton_cash + elms_cash;
}
	

function checkBrowser(){

	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
            return xmlhttp;
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            return xmlhttp;
        }
}

function getQueryString(){

var store = document.getElementById("store").value;
var cash = document.getElementById("cash").value;
var sales = document.getElementById("sales").value;
var date = encodeURIComponent(document.getElementById("date").value);

var string = "smtp.php?v0=" + store + "&v1=" + cash + "&v2=" + sales + "&v3=" + date ;

return string;



}

function searchOld(){

    date = document.getElementById("chooseDate").value;

    day = date.substring(8, 10);
    month = date.substring(5, 7);
    year = date.substring(0, 4);

    newDate = month + "/" + day + "/" + year;


    

        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
            strings = JSON.parse(xmlhttp.responseText);            
                
            setTable(strings);
        }
    };


xmlhttp.open("GET","database.php?function=loadNumbers&var=" + newDate, true);
xmlhttp.send();

}









