/* Matrices 
*! Crear un array de 10 number
*/

let arrMain=[];

fillOutArr(arrMain);

printScreen('Primer array',arrMain);

insertNumber(arrMain);

printScreen('Añadimos un array',arrMain);

const removeItemArr=(arr)=>{
        let tempArr=[];
        for (let i of arr){
                if (!determinarPar(i)){
                        tempArr.push(i);
                }
        }
        return tempArr;
};

printScreen('Antes de quitar los pares',arrMain);
arrMain=removeItemArr(arrMain);
printScreen('Despues de quitar los pares',arrMain);


printScreenOne('Valor máximo del array',maxAndMinArr(arrMain,'max'));
printScreenOne('Valor mínimo del array',maxAndMinArr(arrMain,'min'));


let literal='El mejor momento para plantar un árbol fue HACE 20 años. El segundo mejor momento es AHORA';
printScreenOne('Frase original',literal);
printScreenOne('Frase convertida en minusculas',upperLowerCase(literal,''));
printScreenOne('Frase convertida en mayusculas',upperLowerCase(literal,'upper'));

let nameArr=['kirk', 'spock', 'picard', 'data', 'worf', 'janeway', 'seven of Nine'];
printScreen('Array de nombre antes de la funcion',nameArr);

capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
}

nameArr=upperFirtsCase(nameArr);
printScreen('Array despues de la funcion',nameArr);
