"use strict";

var getId = "임시계정"

// export function loginSuccess(userToken) {
// sessionStorage.setItem('userToken', userToken);
// }

const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

function color() {
    if (loginId.value.length > 0) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#C0DFFD";
        loginBtn.disabled = true;
    }
}

/*function moveTosubMain() {
    window.alert("로그인 성공");
    location.replace("mainback.html");
}

function falseLogin() {
    window.alert("아이디가 없거다 달라");
    loginId.value = '';
    loginPw.value = '';
}*/

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);