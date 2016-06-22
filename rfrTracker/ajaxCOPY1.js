
function showUser() {


	var setRecipt;
	var setStorePurchased;
	var setDatePurchased;
	var setStoreTransfered;
	var setDateTransfered;
	var setStoreReceived;
	var setDateReceived;
	var setRfr;
	var setDateRfr;
	var setSku;
	
	var ids = 
	var str = document.getElementById("output_receipt").value;
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "empty";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            	var strings = JSON.parse(xmlhttp.responseText);
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                
                
                for (i = 0; i < fLen; i++) {
    				text += "<li>" + fruits[i] + "</li>";
    				
				}
                
                
            }
        };
        //xmlhttp.open("GET","search_database.php?q="+str,true);
        xmlhttp.open("GET","search_database.php?function=load_table&var=" + str, true);
        xmlhttp.send();
         document.getElementById("p2").innerHTML = "search_database.php?function=load_table&var=" + str;
    }
}

function setValues(id, value){
	var element = document.getElementById(id);
    valueToSelect = value;
   	element.value = valueToSelect;
}









