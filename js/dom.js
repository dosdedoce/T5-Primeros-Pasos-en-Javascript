const createButton=()=>{
        let codeButton=document.createElement('button');
        codeButton.id='codeButton';
        codeButton.textContent='Boton Creado en JavaScript Cambia el parrafo';
        document.getElementById('darthVader').appendChild(codeButton);
};
createButton();

let labelP=document.querySelector('section p:nth-child(1)');
let i=1;
const codeButton=document.getElementById('codeButton');
codeButton.addEventListener('click',()=>{
        labelP.textContent='Cambio el texto del primer párrafo veces '+i;
        i++;
});

const buttonHidden=document.getElementById('buttonHidden');
const boxHidden=document.getElementById('boxHidden');
buttonHidden.addEventListener('click',()=>{
        let semaphore=true;
        if(buttonHidden.textContent=='Mostrar' && semaphore){
                boxHidden.removeAttribute('hidden');
                buttonHidden.textContent='Ocultar';
                semaphore=false;
        }    
        if(buttonHidden.textContent=='Ocultar' && semaphore){
                boxHidden.setAttribute('hidden', 'hidden');
                buttonHidden.textContent='Mostrar';
        }      
});

const namesHeros= [
        'Flash',
        'Spider-Man',
        'Batman',
        'Wonder Woman',
        'Iron Man',
        'Capitan America',
        'Hulk',
        'Thor',
        'Viuda Negra',
        'Lobezno'
];

let maxRandom=49;

printScreen('Super Heroes',namesHeros);

let arrNumbers=[];

fillOutArrRandom(arrNumbers,maxRandom);
printScreen('Array de numeros',arrNumbers);

printScreenOne('El array de números tiene de tamaño',arrNumbers.length);

let obj = [
        {id:1, name:'Flash', status:true, species:'Experimento', type:'corredor', gender:'h'},
        {id:2, name:'Spider-Man', status:true, species:'Experimento', type:'araña', gender:'h'},
        {id:3, name:'Batman', status:false, species:'Humano', type:'tecnología', gender:'h'},
        {id:4, name:'Wonder Woman', status:true, species:'Diosa', type:'todo', gender:'m'},
        {id:5, name:'Iron Man', status:false, species:'Humano', type:'tecnología', gender:'h'},
        {id:6, name:'Capitan America', status:true, species:'Experimento', type:'corredor', gender:'h'},
        {id:7, name:'Hulk', status:false, species:'Experimento', type:'tortas', gender:'o'},
        {id:8, name:'Thor', status:true, species:'Dios', type:'casi todo', gender:'h'},
        {id:9, name:'Viuda Negra', status:false, species:'Humano', type:'luchadora', gender:'m'},
        {id:10, name:'Lobezno', status:true, species:'Mutante-Experimento', type:'garras', gender:'h'}
];

const loopArr=(arrObj)=>{
        Object.keys(arrObj).forEach(key => console.log(obj[key].id));
};
loopArr(obj);

const generaTabla=(obj)=> {
        let tablaSection = document.getElementById('tablaSection');
        let rellenarTD='';
        let tabla   = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < 10; i++) {
                let hilera = document.createElement("tr");
                for (let j = 0; j < 6; j++) {
                        let celda = document.createElement("td");
                        let textoCelda=null;
                        if(j==0){
                                textoCelda = document.createTextNode(obj[i].id); 
                        }
                        if(j==1){
                                textoCelda = document.createTextNode(obj[i].name); 
                        }
                        if(j==2){
                                textoCelda = document.createTextNode(obj[i].status); 
                        }
                        if(j==3){
                                textoCelda = document.createTextNode(obj[i].species); 
                        }
                        if(j==4){
                                textoCelda = document.createTextNode(obj[i].type); 
                        }
                        if(j==5){
                                textoCelda = document.createTextNode(obj[i].gender); 
                        }
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
        }
        tabla.appendChild(tblBody);
        tablaSection.appendChild(tabla);
}
generaTabla(obj);