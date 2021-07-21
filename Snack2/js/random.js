// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var listN = ["Paolo","Marco","Matteo","Alberto","Luca"]
var listS = ["Verdi","Rossi","Bianchi","Neri","Viola"]

var random;
var random_2

for (var i = 0; i < 4 ;i++) {
    random = Math.floor(Math.random() * listN.length)
    random_2 = Math.floor(Math.random() * listS.length)
    console.log((listN[random]) + (" ") + (listS[random_2]));
}









