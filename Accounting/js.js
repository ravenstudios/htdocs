function submitCustomer(){

	var ids = ["date", "firstName", "lastName", "phoneNumber", "address"];
	var data = new Array();

	for(var i = 0; i < ids.length; i++){

		data[i] = document.getElementById(ids[i]).value;
	}

	for(var i = 0; i < ids.length; i++){

		console.log(ids[i] + ": " +data[i]);
	}

	//sendData(data);
}