// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
           
var array = [1,2,3,4,5,6,7,8,9,10];
var array_2 = [1,2,3,4,5];

for(var i = 0; i < array_2.length;i++) {
    if (array_2.length < array.length){
        var add_number = Math.floor(Math.random() * 10);
        array_2.push(add_number);
    }
}
console.log(array);
console.log(array_2);

