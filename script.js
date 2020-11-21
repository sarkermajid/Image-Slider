var photos = ["./image/bike1.jpeg","./image/bike2.jpeg","./image/bike3.jpeg","./image/bike4.jpeg","./image/bike5.jpeg"];
var imgtag = document.querySelector("img");


var count = 0;

function next(){
    
    count ++
    
    if(count >= photos.length){
        count = 0;
        imgtag.src = photos[count];
    }
    else{
        imgtag.src = photos[count];
    }
}

function previous(){
    count--
    if ( count < 0){
        count = photos.length - 1
        imgtag.src = photos[count]
    }
    else{
        imgtag.src = photos[count]
    }
}