// Creare in HTML una griglia di 5x5 quadrati vuoti.

// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.

var numero_random = genera_random(1, 9);
$('').each(function() {
    $(this).pippo();
});

function genera_random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function(){
  $(".quadrato").click(function(){
    $(this).append(numero_random);
  });
});
