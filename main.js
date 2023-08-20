function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/7S8kaGtWw/model.json', modelReady);
    }
    function modelReady() {
    classifier.classify(gotResults);
    } 
    function gotResults (error, results) {
    if(error) {
    console.error(error);
    }
    else{
    console.log(results);
    }
}