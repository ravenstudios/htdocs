
var canvas;
function drawCanvasMessage(){
    canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "15px Arial";
    ctx.fillText("Click to add DL pic",10,50);


    document.getElementById("canvas").addEventListener("click", function() {

                
                newPopup();
                
                
            });

    loadBuyersCheckNumber();
}
    function newPopup() {
    
    
    //document.getElementById(button.id).style.display="none";
    //button.style.visibility = "hidden";

    popupWindow = window.open(
        'dlwebcam.html',"DL Webcam",'height=260,width=300,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no,status=yes')



 }

 
  

function printLabels(){



    var buttonsClass = document.getElementsByClassName("buttons");


    turnOffButtons(buttonsClass, "none");

    window.print();

    location.reload(); 
    
}




function turnOffButtons(array, x){


    for(i = 0; i < array.length; i++){

        array[i].style.display = x;
    }

}






