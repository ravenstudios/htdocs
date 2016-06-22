
function callCode(){
	
	loadPHP();

}

function loadPHP(){

	var xmlhttp = checkBrowser();

	//str = document.getElementById("date").value;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
			// strings = JSON.parse(xmlhttp.responseText);            
                var x = xmlhttp.responseText;
                alert(x);
			// setTable(strings);
		}
	};


xmlhttp.open("GET","php.php", true);
xmlhttp.send();
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