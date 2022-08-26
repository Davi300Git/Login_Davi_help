var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');

var forgot = document.getElementById('do-forgot')
var idforgot = document.getElementById('forgot');

var username = document.getElementById('username');

btnLogin.onclick = function(){
  idLogin.innerHTML = '<p> Estamos felizes em vê-lo novamente </p><h1>' +username.value+ '</h1>';
}
forgot.onclick = function(){
  idforgot.innerHTML = '<p> Estamos felizes em vê-lo novamente </p><h1>' +username.value+ '</h1>';
}

//https://pt.piliapp.com/emoticon/  ¯\(°_o)/¯