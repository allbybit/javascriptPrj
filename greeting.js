const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greeting");

// console.log(input);

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName( text ){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    console.log("handleSubmit");
    event.preventDefault();
    const currentValue =  input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
    // localStorage.setItem(USER_LS, name);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    console.log("paintGreeting");
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello! ${text}`;
}

function loadname(){
    console.log("loadname");
    // 웹브라우저 설정에 따라 localStorage 오류가 날 수 있다.chrome은 나지 않음
    const currentuser = localStorage.getItem(USER_LS);

    // console.log( "currentuser" + currentuser );
    // console.dir(currentuser);

    if (currentuser === "" || currentuser === null ){
        // console.log( "askForName" + currentuser );
        askForName();
    }else{
        // console.log( "currentuser" + currentuser );
        paintGreeting(currentuser);
    }
}

function init(){
    loadname();
}

init();

