// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

           
var arry =[1,2,3,4,5,6,7,8,9,10]
var somma = 0

for (var i = 0; i < arry.length;i++ ) {
    if (i % 3==0) {
        somma = somma + i
    }
}

console.log(somma)


