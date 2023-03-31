var Valor1;

function init(){

var calcular = document.getElementById('calc');

calcular.onclick = function(e){
    resultado();
}

}

function resultado(){
const diferencial = 0.00010;
var val1 = Number(document.getElementById("lat_input").value);
var val2 = Number(document.getElementById("long_input").value);
var resultado1 = (val1 + diferencial).toFixed(7);
document.getElementById('first_lat').value = parseFloat(resultado1);
document.getElementById('first_long').value = val2;
var resultado2 = (val2 + diferencial).toFixed(7);
document.getElementById('second_lat').value = val1;
document.getElementById('second_long').value = parseFloat(resultado2);
var resultado3 = (val1 - diferencial).toFixed(7);
document.getElementById('third_lat').value = parseFloat(resultado3);
document.getElementById('third_long').value = val2;
var resultado4 = (val2 - diferencial).toFixed(7);
document.getElementById('fourth_lat').value = val1;
document.getElementById('fourth_long').value = parseFloat(resultado4);
}