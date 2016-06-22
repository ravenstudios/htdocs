/*
NOTES AND CHANGES:



edit old entry
*/




var ids = Array("receiptNumber", "amountPaid", "sku", "buyersCheckNumber", "date", "password", "address", "phoneNumber", "offer", "buyer", "dlNumber", "itemPurchased", "model", "carrier", "esn", "pic");

var xmlhttp = checkBrowser();
// var formData = new Array(10);


function loadBuyersCheckNumber() {
	


	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
	var x = xmlhttp.responseText;
    var number = parseInt(xmlhttp.responseText) + 1;            
    document.getElementById("buyersCheckNumber").value = number;           
			
		}
	};


xmlhttp.open("GET","database.php?function=loadBuyersCheckNumber", true);
xmlhttp.send();
}


function loadData(){

    var bcn = document.getElementById("buyersCheckNumber").value;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
    
             
             var returnedJson = JSON.parse(xmlhttp.responseText);
             var strings = returnedJson[0];
            
            var x = 0;
            for (var key in strings) {
                if (strings.hasOwnProperty(key)) {
                
                document.getElementById(ids[x]).value = strings[key];
                x++;
                }
            }
           document.getElementById("pic").innerHTML = strings.pic;
            loadPic();

        }
    };


xmlhttp.open("GET","database.php?function=loadData&bcn=" + bcn, true);
xmlhttp.send();

}


function loadPic(){

    
    

    var myCanvas = document.getElementById('canvas');
    var ctx = myCanvas.getContext('2d');
    var img = new Image;
    
    

    img.src = document.getElementById("pic").innerHTML;

    

    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
   
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



function reload(){


   location.reload(); 

}








