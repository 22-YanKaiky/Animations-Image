var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var dia = data.getDay()
var mes = data.getMonth()
var ano = data.getFullYear()

var name = document.querySelector('input#name')
var phone = document.querySelector('input#telefone')
var birthDate = toString(document.querySelector('input#nascimento'))
var email = document.querySelector('input.senha')

var header = document.querySelector('header.hours')
header.innerHTML = `${horas}:${minutos}`

function enter() {
    var botao = document.createElement("a");
    var entar = location.href = "http://example.com";
    botao.appendChild(entar);
    document.getElementsByName("entrar").appendChild(botao);
}