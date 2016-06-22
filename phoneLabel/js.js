var ids = Array("model", "carrier", "price", "sku");


function printLabels(){


var labelClass = document.getElementsByClassName("label");
var misClass = document.getElementsByClassName("mid");
var buttonsClass = document.getElementsByClassName("buttons");

setBoarderTo0(labelClass);
setBoarderTo0(misClass);
turnOffButtons(buttonsClass, "none");

	
}


function setBoarderTo0(array){

for(i = 0; i < array.length; i++){

	array[i].style.border = "0px";
}

}

function turnOffButtons(array, x){


for(i = 0; i < array.length; i++){

	array[i].style.display = x;
}

}

function newPopup(button, label) {
	
	
	//document.getElementById(button.id).style.display="none";
	//button.style.visibility = "hidden";

	popupWindow = window.open(
		'getInfoPopup.html',label,'height=300,width=620,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no,status=yes')



 }




function SetValueInParent()

    {
    	alert(window.opener);
    	var str = document.getElementById("model").value;
        window.opener.document.getElementById("11").innerHTML = str;

        window.close();

        return false;

    }

 


function setData(array, id){

	var ids = Array("model" + id, "sku" + id, "price" + id);

	for(var i = 0; i < array.length; i++){

		window.opener.document.getElementById(ids[i]).innerHTML = array[i];
	}

}



function customEdit(checkbox, textbox){

	
	

	var x = document.getElementById(checkbox).checked;

	if(x){

		document.getElementById(textbox).style.display="block";

	}
	else{

		document.getElementById(textbox).style.display="none";

	}
}


function editLabel(){

	var x = document.getElementById('editLabelNumber').value;
	popupWindow = window.open(
		'getInfoPopup.html',x,'height=300,width=620,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no,status=yes')

	
}


// function getData(){
// 	var labelID = (window.name); //gets window name set by button
	
// 	var array = Array(3);
// 	array[0] = document.getElementById("model").value + "  " + document.getElementById("carrier").value;
// 	array[1] = "*" + document.getElementById("sku").value + "*";
// 	array[2] = "$" + document.getElementById("price").value;
	
// 	setData(array, labelID);
// 	window.close();

//         return false;
// }


function getData(){
	var labelID = (window.name); //gets window name set by button

	var customModel = document.getElementById("customModelTB").value;
	var customSize = document.getElementById("customSizeTB").value;
	var customCarrier = document.getElementById("customCarrierTB").value;

	var model;
	var size;
	var carrier;


	if(document.getElementById("customModelCB").checked){

		model = customModel; 
	}
	else{

		model = document.getElementById("model").value
	}

	if(document.getElementById("customSizeCB").checked){

		size = customSize; 
	}
	else{

		size = document.getElementById("size").value
	}

	if(document.getElementById("customCarrierCB").checked){

		carrier = customCarrier; 
	}
	else{

		carrier = document.getElementById("carrier").value
	}








	
	var array = Array(3);
	array[0] = model + " " + size + '   ' + carrier;
	array[1] = "*" + document.getElementById("sku").value + "*";
	array[2] = "$" + document.getElementById("price").value;
	
	setData(array, labelID);
	window.close();

        return false;
}












