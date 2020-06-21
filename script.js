var apiKey = "NdK7nM4OF6UQeWHTrmDP0Z2Ig2gLmQKGIMR4nkYI23jXDMK2lkKmX8OvEIRq";
var channel = 0;
var url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
var socket;
var nome;

function sala1() {
 channel = 1;
  url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
  document.getElementById("btnConectar").disabled = false;
  document.getElementById("b1").disabled = true;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  document.getElementById("btnEnviar").disabled = true;
}
function sala2(){
 channel = 2;
  url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
document.getElementById("btnConectar").disabled = false;
document.getElementById("b2").disabled = true;
document.getElementById("b1").disabled = false;
document.getElementById("b3").disabled = false;
document.getElementById("b4").disabled = false;
document.getElementById("b5").disabled = false;
document.getElementById("btnEnviar").disabled = true;

 }
function sala3(){
channel = 3;
 url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
document.getElementById("btnConectar").disabled = false;
document.getElementById("b3").disabled = true;
document.getElementById("b2").disabled = false;
document.getElementById("b1").disabled = false;
document.getElementById("b4").disabled = false;
document.getElementById("b5").disabled = false;
document.getElementById("btnEnviar").disabled = true;
}
function sala4(){
channel = 4;
url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
document.getElementById("btnConectar").disabled = false;
document.getElementById("b4").disabled = true;
document.getElementById("b2").disabled = false;
document.getElementById("b3").disabled = false;
document.getElementById("b1").disabled = false;
document.getElementById("b5").disabled = false;
document.getElementById("btnEnviar").disabled = true;
}
function sala5(){
channel = 5;
url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
document.getElementById("btnConectar").disabled = false;
document.getElementById("b5").disabled = true;
document.getElementById("b2").disabled = false;
document.getElementById("b3").disabled = false;
document.getElementById("b4").disabled = false;
document.getElementById("b1").disabled = false;
document.getElementById("btnEnviar").disabled = true;
}

function conectar(){
  socket = new WebSocket(url);
  document.getElementById("btnConectar").disabled = true;
  socket.onopen = conectou;
  socket.onmessage = recebeu;
  nome = prompt('Qual é o seu Nome?');

while ( nome == null){
  nome = prompt('Qual é o seu Nome?');
}if (nome.length == 0){
     nome = "Anônimo"
}
 }

function conectou(){
  document.getElementById("btnEnviar").disabled = false;
  var msg = nome + " entrou na sala!";
  socket.send(msg);
  document.getElementById("msgs").innerHTML = "Você entrou na sala " + channel + "."
  }

function recebeu(event){
   var chatRomm =  document.getElementById("msgs");
  chatRomm.innerHTML += "<br>" + event.data;
}

function enviar(){
  var msg = nome + ": " + document.getElementById("entrada").value;
  document.getElementById("entrada").value = "";
  socket.send(msg);
}

function testeClick() {
  
  if (event.keyCode === 13 ){
      
  var msg = nome + ": " + document.getElementById("entrada").value;
  document.getElementById("entrada").value = "";
  socket.send(msg);

  }
}