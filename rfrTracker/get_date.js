function displayDate() {
		
	var now = new Date();
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	var today = now.getFullYear() + "-" + (month) + "-" + (day);
	document.getElementById("input_date").value = today;
	
	/*
	var receipt = document.getElementById("receipt_num").value
	var store_purchased_from = document.getElementById("store_purchased_from").value
	var store_transfered_to = document.getElementById("store_transfered_to").value
	var store_received = document.getElementById("store_received").value
	var rfr_or_parts = document.getElementById("rfr_or_parts").value
	var sku = document.getElementById("sku").value
	var date = document.getElementById("date").value
	
	document.write('<br/>');
	document.write(receipt);
	document.write('<br/>');
	document.write(store_purchased_from);
	document.write('<br/>');
	document.write(store_transfered_to);
	document.write('<br/>');
	document.write(rfr_or_parts);
	document.write('<br/>');
	document.write(sku);
	document.write('<br/>');
	document.write(date);
	
	*/
	
	
}
