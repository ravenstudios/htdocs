function webcam(){

    window.addEventListener("DOMContentLoaded", function() {
            // Grab elements, create settings, etc.
            var canvas = window.opener.document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            
            video = document.getElementById("video"),
            videoObj = { "video": true },
            errBack = function(error) {
            console.log("Video capture error: ", error.code); 
            };
            //context.scale(0.5,0.5);
            // Put video listeners into place
            // Put video listeners into place
    if(navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            
            video.src = stream;
            video.play(); 
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
        
        navigator.webkitGetUserMedia(videoObj, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if(navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream){
            
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }


            // Trigger photo take
            document.getElementById("video").addEventListener("click", function() {

                
                context.drawImage(video, 0, 0, 300, 200);
                var uri = canvas.toDataURL("image/png");
                window.opener.document.getElementById("pic").innerHTML = uri;

                
                window.close();
                
                
            });

        //     document.getElementById("getBase").addEventListener("click", getBase());

        // }, false);                  
});
}
    // function getBase(){
    //     var imgBase = canvas.toDataURL("image/png");

    //     document.getElementById("textArea").value=imgBase;
    //     aler