let nombre='Carlos';
let numero=3;
let stringNumero='99';
let salir=true;
let otroNumero=12;
let cadenaConcatenar='Coder';

const cadena=document.getElementById("campoCadena");
cadena.textContent=nombre + ' ' +typeof nombre;

let campoNumero = document.querySelector(".campoNumero");
campoNumero.textContent=numero+ ' ' +typeof numero;

let cadenaNumero = document.querySelector(".cadenaNumero");
cadenaNumero.textContent=stringNumero+ ' ' +typeof stringNumero;

let campoBoolean=document.getElementById("campoBoolean");
campoBoolean.textContent=salir+ ' ' +typeof salir;

console.log(nombre);
console.log(numero);
console.log(salir);

let sumaSpan=document.getElementById('suma');
let restaSpan=document.querySelector('.resta');
let multiplicacionSpan=document.getElementById('multiplicacion');
let divisionSpan=document.getElementsByClassName('division'); //puede devolver varios elementos


function crearHTML (){
        let seccion=document.createElement('section');
        seccion.id='seccionConcatenar';
        document.body.appendChild(seccion);
        let titulo=document.createElement('h3');
        titulo.textContent='Concatenar';
        seccion.appendChild(titulo);
        let parrafoP=document.createElement('p');
        parrafoP.id='concatenar';
        let cajaDestino=document.getElementById('seccionConcatenar');
        cajaDestino.appendChild(parrafoP);
}

function operaciones (variableUno,variableDos){
        if ((typeof variableUno === 'number') && (typeof variableDos === 'number')) {
                let suma=variableUno+variableDos;
                let resta=variableUno-variableDos;
                let multiplicacion=variableUno*variableDos;
                let division=variableDos/variableUno;
                sumaSpan.textContent=suma;
                restaSpan.textContent=resta;
                multiplicacionSpan.textContent=multiplicacion;
                divisionSpan[0].textContent=division;
                console.log(suma);
                console.log(resta);
                console.log(multiplicacion);
                console.log(division);
        }
        if ((typeof variableUno === 'string') && (typeof variableDos === 'string')){
                crearHTML();
                let concatenar=document.getElementById('concatenar');
                concatenar.textContent=variableUno + ' ' +variableDos;
        }
}

operaciones(numero,otroNumero);
operaciones(nombre,cadenaConcatenar);

const imprimir=(nombreF)=>{
        let saludar=document.getElementById('saludar');
        saludar.textContent='Hola ' + nombreF;
};
imprimir(nombre);

const sumarDosNumeros = (num1,num2) =>{
        let sumando=num1+num2;
        let titulo2='<h3>Funcion sumar dos numeros</h3>'
        let union=`${titulo2}<p>La suma de ${num1} + ${num2} = ${sumando}</p>`;
        document.writeln(union);
};

sumarDosNumeros (101,393);

const escribir = (dato) =>{
        let titulo2='<h3>Funcion</h3>'
        let union=`${titulo2}<p>El resultado es ${dato}</p>`;
        document.writeln(union);
};

/* Funcion para detectar par o impar 
* La voy a usar mas adelante
*/
const determinarPar = (numeroPar) =>{
        let verdad=false;
        if (numeroPar%2==0){
                verdad=true;
        }
        return verdad;
};

let numeroPar=prompt('Dame un número:','1');
numeroPar=parseInt(numeroPar, 10);
determinarPar(numeroPar)?escribir('par'):escribir('impar');


/* *********** OBJETO ***************/

const imprimirObj=(dato,campo)=>{
        let titulo2=`<h3> Objeto dato ${campo}</h3>`;
        let union=`${titulo2}<p> ${dato}</p>`;
        document.writeln(union);
};

const carro = {
        marca:'Seat',
        modelo: 'Ibiza',
        caballos: 120,
        puertas: 2,
        extras: {
                luces:'led',
                cambio:'automatico',
                ruedaRecambio: false,
                airbag: 6
                },
        remolque: false,
        precio: 17000
}

const datosObj = (carro,atributo,mas)=>{
        if (atributo=='extras'){
                imprimirObj(carro[atributo][mas],(atributo+' '+mas));
        } else {
                imprimirObj(carro[atributo],atributo);
        }
}
datosObj(carro,'marca','');
datosObj(carro,'puertas','');
datosObj(carro,'extras','airbag');
