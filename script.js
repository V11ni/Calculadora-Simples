document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
var nome = document.getElementById('nome').value;
var nota1 = parseInt(document.getElementById('nota1').value);
var nota2 = parseInt(document.getElementById('nota2').value);
var nota3 = parseInt(document.getElementById('nota3').value);

var media = Math.round((nota1 + nota2 + nota3) / 3);

var resultado = document.getElementById('result');
var mensagem = document.getElementById('msg');

if(media > 69) {
    mensagem.innerHTML = `Ola ${nome}, sua média foi de ${media}. Parabéns, você passou!`;
}

else {
    mensagem.innerHTML = `Ola ${nome}, sua média foi de ${media}. Infelizmente, você reprovou.`;
}
resultado.style.display = 'block';


})