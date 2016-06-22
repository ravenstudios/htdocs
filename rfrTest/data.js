var data = Array("receiptNumber", "amountPaid", "sku", "buyersCheckNumber", "date", "password", "address", "phoneNumber", "offer", "buyer", "dlNumber", "itemPurchased", "model", "carrier", "esn", "pic");

var ids = Array("receiptNumber", "amountPaid", "sku", "buyersCheckNumber", "date", "password", "address", "phoneNumber", "offer", "buyer", "dlNumber", "itemPurchased", "model", "carrier", "esn", "pic");


function getData(){

    for(var i = 0; i < data.length; i++){


        data[i] = document.getElementById(ids[i]).value;

    }
    
    data[15] = document.getElementById("pic").innerHTML;
    return data;
}

function qurreyString(array){


    var string = "";
    for(var i =0; i < array.length; i++){
        string += "var" + i + "=" + array[i] + "&";

    }
    string = string.replace(/\+/g, "%2B")
    
    return string;
}



// var formData = new Array(10);

function saveData(){
    console.log("js save");
    var xmlhttp = checkBrowser();
    //var tempPic = document.getElementById("pic").innerHTML;
    // tempPic = tempPic.replace(/^data:image\/(png|jpg);base64,/, "");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
           alert(xmlhttp.responseText);
            
            
        }
        
    };

    //console.log("database.php?function=saveData&" + qurreyString(getData()));
    xmlhttp.open("POST","database.php?function=saveData&" + qurreyString(getData()), true);
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


function handle(e){
        if(e.keyCode === 13){
            loadData();
        }

        return false;
    }


















