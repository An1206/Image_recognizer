wabcam.set({
    height : 300 ,
    width : 350 ,
    Image_framat : 'png' ,
    png_quality : 90 ,
    
    })
     Camera= document.getElementById("camera")
    
    webcam.attach('#camera')
     
    function take_snapshot () {
     webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '+<img  id= "captured_image" src="' +data_uri+'"/>' ;
     })
    }
    console.log('ml5 version', ml5.version) ;
    classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B-8dFw3ZZ/model.json',modelLoaded);