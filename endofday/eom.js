var date;
var currentNumOfSundays = 0;
var allSundays = 0;
var totalDaysinMonth;

var wsyCurrentTotal = 0;
var wsyDailyAvg;
var wsyEOMProjection;


var btnCurrentTotal;
var btnDailyAvg;
var btnEOMProjection;


var elmCurrentTotal;
var elmDailyAvg;
var elmEOMProjection;


var wsy = [3];
var btn = [3];
var elm = [3];

function eom(){

	var textboxDate = document.getElementById('date').value;
	year = textboxDate.substring(6, 10);
    day = textboxDate.substring(3, 5);
    month = textboxDate.substring(0, 2);
	date = new Date();
	date.setFullYear(year, month - 1, day);
	totalDaysinMonth = new Date(year, month, 0).getDate();

	getCurrentNumberOfSundays();
	getTotalNumberOfSundays();

	wsyCurrentTotal = getPHPTotals("WSY");
	// getPHPTotals("Belton", btnCurrentTotal);
	// getPHPTotals("Elms", elmCurrentTotal);

	// console.log("wsy total = " + wsyCurrentTotal);

	// wsyEOMProjection = getNumbers(wsyCurrentTotal);

}





function getCurrentNumberOfSundays(){
	var tempDate = new Date();
	for (i = 0; i < day; i++){

		tempDate.setFullYear(year, month - 1, i);
		if(tempDate.getDay() == 0){

			currentNumOfSundays++;
		}
		
		
	}
	console.log("current num of sundays: " + currentNumOfSundays);
}



function getTotalNumberOfSundays(){


var tempDate = new Date();

	for (i = 0; i < totalDaysinMonth; i++){

		tempDate.setFullYear(year, month - 1, i);
		if(tempDate.getDay() == 0){

			allSundays++;
		}
		
		
	}
	console.log("total sundays: " + allSundays);
}


function eomProjection(avg){
	
	

	var eom = avg * (totalDaysinMonth - allSundays);
	
	console.log(" eom = total days in  month: " + totalDaysinMonth + "- all sundays: " + allSundays +" * dailyAvg: " + avg +" = eom: " + eom);
	return eom;
}

function dailyAvg(total){

	avg = total / (day - currentNumOfSundays);
	console.log("daily total = " + "current day: " + day + " - currentNumOfSundays: " + currentNumOfSundays + "= dailyAvg: " + avg);

	return avg;
}



function getPHPTotals() {

	console.log("php called");

	var xmlhttp = checkBrowser();
	


	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    
			strings = JSON.parse(xmlhttp.responseText);


			console.log("wsy totals: " + strings[0]);
			console.log("btn totals: " + strings[1]);
			console.log("elm totals: " + strings[2]);

			

			displayNumbers(strings);       
		}	    
	};


	xmlhttp.open("GET","database.php?function=getSaleTotals&var=" + store, true);
	xmlhttp.send();
}



function displayNumbers(array){

	

		wsyDailyAvg = dailyAvg(array[0]);
		btnDailyAvg = dailyAvg(array[1]);
		elmDailyAvg = dailyAvg(array[2]);

		wsyEOMProjection = eomProjection(wsyDailyAvg);
		btnEOMProjection = eomProjection(btnDailyAvg);
		elmEOMProjection = eomProjection(elmDailyAvg);

		var totalAvg = wsyDailyAvg + btnDailyAvg + elmDailyAvg;

		var totalEom = wsyEOMProjection + btnEOMProjection + elmEOMProjection;
	

	document.getElementById("wsy_avg").innerHTML = "$" + wsyDailyAvg + ".00";
	document.getElementById("belton_avg").innerHTML = "$" + btnDailyAvg + ".00";
	document.getElementById("elms_avg").innerHTML = "$" + elmDailyAvg + ".00";

	document.getElementById("wsy_eom").innerHTML = "$" + wsyEOMProjection + ".00";
	document.getElementById("belton_eom").innerHTML = "$" + btnEOMProjection + ".00";
	document.getElementById("elms_eom").innerHTML = "$" + elmEOMProjection + ".00";

	document.getElementById("total_avg").innerHTML = "$" + totalAvg + ".00";
	document.getElementById("total_eom").innerHTML = "$" + totalEom + ".00";

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
















