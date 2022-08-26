var btnLogin = document.getElementById('do-login');
var fundoSection = document.getElementById('fundo');

var forgot = document.getElementById('do-forgot')
var idforgot = document.getElementById('forgot');

var username = document.getElementById('username');

btnLogin.addEventListener('click',function () {
  fundoSection.innerHTML = '<p> Estamos felizes em vê-lo novamente </p><br><a href="index.html">Voltar</a><h1>' +username.value+ '</h1>';
})

forgot.addEventListener('click',function () {
  fundoSection.innerHTML = '<p> Esqueceu a senha ? </p><br><a href="index.html">Voltar</a><h1>' +username.value+ '</h1>';
})  
  

//https://pt.piliapp.com/emoticon/  ¯\(°_o)/¯