let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function registerButton() {
    x.style.left = "-400px";
    y.style.left = "60px";
    z.style.left = "110px";
}
function loginButton() {
    x.style.left = "60px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function validationData() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    let confirmPass = document.getElementById("conpas").value;
    if (username == "" || password == "" || confirmPass == "") {
        alert("Input field should not be empty");
        return false
    }
    if (password.length != confirmPass.length) {
        alert("password length does not match confirm password length")
        return false
    }
    if (password != confirmPass) {
        alert("password does not match confirm password")
        return false
    }
    return true
}


function signUp() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    let confirmPass = document.getElementById("conpas").value;
    if (validationData() == true) {
        let list = JSON.parse(localStorage.getItem("login")) || [];
        if (JSON.parse(localStorage.getItem("login")) == null) {
            list = [];
        }
        var test = {
            username,
            password,
            confirmPass
        };
        localStorage.setItem("currData", JSON.stringify(test));
        list.push(test);
        localStorage.setItem("login", JSON.stringify(list));
        document.getElementById("username").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("conpas").value = "";

    }


    console.log(username, password, confirmPass);
}


function login() {
    event.preventDefault();
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let listData = JSON.parse(localStorage.getItem("login")) || [];
    if (listData == null) {
        listData = [];
        alert("There is no data!!!");
    }
    else {
        listData = JSON.parse(localStorage.getItem("login"));
    }
    if (username == "" || password == "") {
        alert("Dont fill empty inputs")
        return false;
    }
    let exist = JSON.parse(localStorage.getItem("login")).some(data => data.username.toLowerCase() == username.toLowerCase()
        && data.password.toLowerCase() == password.toLowerCase())
    if (!exist) {
        alert("Username or password doesnot match")
    }
    else {
        location.replace("../html/index.html");
    }


}