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
	
str = document.getElementById("date").value;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
			strings = JSON.parse(xmlhttp.responseText);            
                
			setTable(strings);
		}
	};


xmlhttp.open("GET","database.php?function=loadNumbers&var=" + str, true);
xmlhttp.send();
}

function setTable(array){

	console.log("setTable called");

	for(i = 0; i < table.length; i++){

		document.getElementById(table[i]).innerHTML = "$" + array[i];

	}

}
// function setValues(id, value){
// 	var element = document.getElementById(id);
// 	valueToSelect = value;
// 	element.value = valueToSelect;
// }

// function getValues(){

// 	for(i = 0; i < values.length; i++){
	
// 		var element = document.getElementById(ids[i]);
		
// 		values[i] = element.value
		
// 	}
// }


// function checkForEntry(){

// var bol;
// str = document.getElementById("output_receipt").value;

// xmlhttp.onreadystatechange = function() {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
// 		bol = parseInt(xmlhttp.responseText); 
//         //console.log("log: " + bol);  
// 		if(bol === 1){
// 			console.log("returned true");
// 			loadData();
			
// 		}
	
// 		if(bol === 0){
// 			console.log("returned false");
// 			clearForm();
// 			document.getElementById("output_receipt").value = str;
// 		}
// 	}
// }
// xmlhttp.open("GET","search_database.php?function=checkForEntry&var=" + str, true);
// xmlhttp.send();
    
// }

// function clearForm(){
// 	for (i = 0; i < ids.length; i++) {
                	
// 				setValues(ids[i], "")
// 			}

// }    
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

// function saveData(){



// str = document.getElementById("output_receipt").value;

// xmlhttp.onreadystatechange = function() {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
// 		window.alert(xmlhttp.responseText);
// 		//str = packArrayString();
// 	}
// }
// //console.log("search_database.php?function=saveData&" +  packArrayString());
// xmlhttp.open("GET","search_database.php?function=saveData&" +  packArrayString(), true);
// xmlhttp.send();
	
	
// }

// function setDate(id){
// console.log("set date called");
	
// 		if(document.getElementById(id).value === ""){
// 			document.getElementById(id).value = getDate();
// 		}
	
// }
// function getDate(){

// var now = new Date();
// 	var day = ("0" + now.getDate()).slice(-2);
// 	var month = ("0" + (now.getMonth() + 1)).slice(-2);
// 	var today =  (month) + "-" + (day) + "-" + now.getFullYear();
// 	return today;
// }

// function packArrayString(){
// getValues();
// var stringToPass = "";
// 	for(i = 0; i<values.length; i++){
// 		stringToPass = stringToPass + "v" + i + "=" + values[i] + "&";
		
// 	}
// var stringToPass = stringToPass.substring(0, stringToPass.length-1);
// //console.log("pack string = " + stringToPass);
// return stringToPass;
// }






