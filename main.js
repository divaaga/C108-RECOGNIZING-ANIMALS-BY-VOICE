moowing = "0";
meowing = "0";
barking="0";
roaring="0";

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    console.log("ml5 version : " + ml5.version);
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0nNiWEx0N/model.json", modelReady);
    img1 = document.getElementById("listen");
    img1.src = "listen.gif"
}

function modelReady() {
    console.log("modelReady...")
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error)
    {
        console.error(error);
    }else{
        console.log(results);
  
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_sound").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("detected_voice").innerHTML = "Dog- " + barking + "Cat- " + meowing + "Lion- " + roaring + "Cow- " + moowing;
        document.getElementById("detected_voice").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
       
       
        if (results[0].label == "barking") {
            img1.src = "dog.jpg";
            baring = barking + 1;
            document.getElementById("detected_voice").innerHTML = "Dog- " + barking + "Cat- " + meowing + "Lion- " + roaring + "Cow- " + moowing;
        } else if (results[0].label == "meowing") {
            img1.src = "cat.jpg";
            meowing = meowing + 1;
            document.getElementById("detected_voice").innerHTML = "Dog- " + barking + "Cat- " + meowing + "Lion- " + roaring + "Cow- " + moowing;
        } else if (results[0].label == "moowing") {
            img1.src = "cow.jpg";
            moowing = moowing + 1;
            document.getElementById("detected_voice").innerHTML = "Dog- " + barking + "Cat- " + meowing + "Lion- " + roaring + "Cow- " + moowing;
        } else {
            img1.src = "lion.jpg";
            roaring = roaring + 1;
            document.getElementById("detected_voice").innerHTML = "Dog- " + barking + "Cat- " + meowing + "Lion- " + roaring + "Cow- " + moowing;
        }
    }
}
