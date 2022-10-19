function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Usuario Creado");
    console.log('user added');
    window.location.href = "login.html";
}

function loginFunc(e){
    event.preventDefault();
//    console.log(123);
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user = null){
        console.log('Usuario incorrecto')
        alert("Usuario incorrecto");
    } else if (username == data.username && pass == data.password){
        console.log('Login correcto')
        alert("Login Correcto");
        window.location.href = "index.html";
    } else {
        console.log('Contraseña incorrecta')
        alert("Contraseña incorrecta");
    }
}