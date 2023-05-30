let max=100;
const determinarPar = (numeroPar) =>{
     let verdad=false;
     if (numeroPar%2==0){
          verdad=true;
     }
     return verdad;
};

const getNumberRandom=(max)=>{
     return Math.floor((Math.random() * (max-1))+1);
     //es un número entre 1 y max, ambos incluidos.
}

const insertNumber=(arr)=>{
     arr.push(getNumberRandom(max));
}

const fillOutArr=(arr)=>{
     for (let i = 0; i < 10; i++) {
          insertNumber(arr);
     }
     return arr;
};

const printScreen=(who,arr)=>{
     document.write(`<h3>${who}</h3>`)
     document.write(`<p>`);
     arr.forEach(elemento => {
          document.write(` - ${elemento}`);
          console.log(elemento);
     });   
     document.write(`</p>`);  
}

const printScreenOne=(who,item)=>{
     document.write(`<h3>${who}</h3>`)
     document.write(`<p>`);
     document.write(`${item}`);
     document.write(`</p>`);  
}

const maxAndMinArr=(arr,which)=>{
     let value=Math.max(...arr);
     if(which=='min'){
          value=Math.min(...arr);
     }
     return value;
};

const upperLowerCase=(literal,which)=>{
     return (which=='upper')?literal.toUpperCase():literal.toLowerCase();
};

const upperFirtsCase=(arr)=>{
     let arrTemp=[];
     // arr.forEach(numero => console.log(numero));
     arr.forEach(numero => arrTemp.push(capitalizeFirstLetter(numero)));
     return arrTemp;
};

const fillOutArrRandom=(arr,maxRandom)=>{
     for (let i = 0; i < getNumberRandom(maxRandom); i++) {
          insertNumber(arr);
     }
     return arr;
};