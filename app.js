const nombre= "Adriel";
const apellido = "Fariña";
let edad = 27;
const dni = 39102248;

function calcular(){
    let resultado = 0;
    event.preventDefault();
    let N1 = document.getElementById('numero1').value;
    let N2 = document.getElementById('numero2').value;
    let OP = parseInt(document.getElementById('operadores').value);
    console.log(OP); 

//imprime que tipo de dato es la variable(N1)
//console.log(typeof(N1));
//parseo la variable N1 (string) a entero(integer)
N1= parseInt(N1);
//console.log(typeof(N1));
 N2= parseInt(N2);
//console.log (N1, N2);

if (OP === 1) {
    resultado = N1+N2;
}

if (OP === 2) {
    resultado = N1-N2;
}

if (OP === 3) {
    resultado = N1*N2;
}

if (OP === 4) {
    resultado = N1/N2;
}

document.getElementById('resultado').innerHTML= resultado;
document.getElementById('apellido').style.color= apellido;

document.getElementById('nombre').innerHTML= nombre;
document.getElementById('resultado').style.color= color;

}