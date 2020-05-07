// Creare in HTML una griglia di 5x5 quadrati vuoti.

// scrivere un numero random tra 0 e 10 dentro ogni quadrato

// BONUS: se il numero da inserire
// se è pari ==> colore quadrato rosso
// se è dispari ==> colore quadrato nero
// se è 0 ==> colore quadrato verde

// genera numero con funzione math random
function genera_random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function(){
  $(".quadrato").each(function(){
    // scrivere un numero random tra 0 e 10 dentro ognuno
    var numero_random = genera_random(0, 10);
    $(this).append(numero_random);
    if (numero_random == 0) {
         // se è il numero è pari ==> colore quadrato rosso
        $(this).css('color', 'green');
    } else if  (numero_random % 2 == 0) {
        // se è il numero è 0 ==> colore quadrato verde
        $(this).css('color', 'red');
        // se è il numero è dispari ==> colore quadrato nero
    } else $(this).css('color', 'black');
  });
});
