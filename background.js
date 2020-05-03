
const body = document.querySelector("body");
const IMG_NUMBER = 4;


// function handleLoaded(){
//     console.log("handleLoaded");
// }

function paintImage(imgNumber){
    // console.log("paintImage" + paintImage);
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    // image.addEventListener("loaded", handleLoaded);
    body.prepend( image );
}

function getRandom(){
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    // console.log("init" + init);
    const randomnumber = getRandom();
    paintImage(randomnumber);
}


init();