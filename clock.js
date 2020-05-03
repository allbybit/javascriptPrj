// >> class를 선택할 때에는 . 을 찍고
const clockContainer = document.querySelector(".js-clock");
// >> 태그 자체를 선택할 때에는 해당 태그를.
const cloockTitle = clockContainer.querySelector("h1");

function init(){
    getTime();
    setInterval(getTime, 1000);
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds()
    cloockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`} :    ${minutes < 10 ? `0${minutes}` : `${minutes} `} : ${seconds < 10 ? `0${seconds}` : `${seconds}` }`;
}
init();