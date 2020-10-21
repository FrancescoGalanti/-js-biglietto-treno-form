/*
**javascript
**/


// referenza elementi //

var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById("bottoneGenera");
var bottoneAnnulla = document.getElementById("bottoneAnnulla");


// eventi //

bottoneGenera.addEventListener("click", function(){

   var nome = document.getElementById('nome').value;
   console.log(nome);

   var kmDaPercorrere = document.getElementById('km').value;
   console.log(kmDaPercorrere)

   var fasciaEta = document.getElementById('fascia-eta').value;
   console.log(fasciaEta);

   var prezzoKm = 0.21
   var costoBiglietto =  prezzoKm *  kmDaPercorrere;
   var offerta = "bigletto Standard";

   if(fasciaEta == "minorenne"){

     costoBiglietto -=  costoBiglietto * 0.2;
     offerta = "Sconto Minorenni";
   }
   else if(fasciaEta == "over65") {
     costoBiglietto -= costoBiglietto * 0.4;
     offerta = "Sconto Over 65";
   }

   costoBiglietto = costoBiglietto.toFixed(2) + "euro";

   var numCarrozza = Math.floor(Math.random() * 10) + 1;

   var codiceCp = Math.floor(Math.random() * (10000 - 9000) + 1) + 9000 ;

   document.getElementById('nome-passeggero').innerHTML = nome;
   document.getElementById('offerta-applicata').innerHTML = offerta;
   document.getElementById('carrozza').innerHTML = numCarrozza;
   document.getElementById('codice-cp').innerHTML = codiceCp;
   document.getElementById('costo').innerHTML = costoBiglietto;

   container.className = "show";

});

bottoneAnnulla.addEventListener("click", function(){
   container.className = "hidden";

   document.getElementById('nome').value = "";
   document.getElementById('km').value = "";
   document.getElementById('fascia-eta').value = "";

   document.getElementById('nome-passeggero').innerHTML = "";
   document.getElementById('offerta-applicata').innerHTML = "";
   document.getElementById('carrozza').innerHTML = "";
   document.getElementById('codice-cp').innerHTML = "";
   document.getElementById('costo').innerHTML = "";


});
