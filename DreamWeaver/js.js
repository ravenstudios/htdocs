function printLabels(){

document.getElementById("inputForm").style.display="none";
	window.print();

	
}


function change(){
	//var btn = document.createElement("BUTTON");	
	//document.getElementById("11").innerHTML = btn;
	
	 var myAnchor = document.getElementById("11");
  var mySpan = document.createElement("button");
  mySpan.innerHTML = "replaced anchor!";
  myAnchor.parentNode.replaceChild(mySpan, myAnchor);
	}
	
	function popup(mylink, windowname) { if (! window.focus)return true; var href; if (typeof(mylink) == 'string') href=mylink; else href=mylink.href; window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); return false; }
