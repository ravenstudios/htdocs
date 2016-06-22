function submitItem(){

	var ids = ["Date", "Item", "Cost", "Retail", "SKU"];
	var data = new Array();

	// for(var i = 0; i <ids.length; i++){


	// 	var id = ids[i];
	// 	var d = document.getElementById(id).value;
	// 	data[i] = d;

		
	// }
	data[0] = document.getElementById("date").value;
	data[1] = document.getElementById("item").value;
	data[2] = document.getElementById("cost").value;
	data[3] = document.getElementById("retail").value;
	data[4] = document.getElementById("sku").value;

	console.log("1"+data[0]);
	console.log(data[1]);
	console.log(data[2]);
	console.log(data[3]);
	console.log(data[4]);

	// for (var i = 0; i <data.length; i++){
	
	// 	console.log(data[i]);
	// }	
}


