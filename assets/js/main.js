//chiedere all'utente il numero di km che intende percorrere
const kmNumber = prompt('Quanti chilometri intendi percorrere?');
console.log(kmNumber);
//chiedere all'utente l'etá del passeggero
const userAge = prompt('Quanti anni hai?');
console.log(userAge);
/*su queste ultime due informazioni*/
//calcolare il prezzo del biglietto in base ai km (0.21/km), con sconto 20% minorenni e 40% over 65.
const trainFare = kmNumber * 0.21;
console.log(trainFare);

let trainFarePrice;
let finalPrice;


if (userAge <= 18){
   trainFarePrice = trainFare * 20 / 100;
   console.log(trainFarePrice);
   finalPrice = trainFare - trainFarePrice;
   console.log(finalPrice);
} else if (userAge >= 65){
    trainFarePrice = trainFare * 40 / 100;
    console.log(trainFarePrice);
    finalPrice = trainFare - trainFarePrice;
   console.log(finalPrice);
} else {
    finalPrice = trainFare;
    console.log(finalPrice);
}



//comunicarlo in forma umana
document.getElementById("ticket_price").innerHTML = `Il costo del tuo biglietto é ${finalPrice.toFixed(2)} €`