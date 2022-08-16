function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OGF5BciJ5/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, result) {
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
        color_r = Math.floor(Math.random()*255)+1;
        color_g = Math.floor(Math.random()*255)+1;
        color_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = " I can hear " + result[0].label;
        document.getElementById("result_confi").innerHTML = " Accuracy " + (result[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_label").style.color= "rgb("+color_r+", "+color_g+", "+color_b+")";
        document.getElementById("result_confi").style.color= "rgb("+color_r+", "+color_g+", "+color_b+")";
    }}