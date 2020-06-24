// creo un array con i Cognomi

var listaCognomi = ["Pellegrini", "Francescini", "Bolognini", "Conte"];

console.log(listaCognomi);

// con un prompt chiedo un nome e con push lo aggiungo un nome alla Lista

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

console.log(listaCognomi);



// BONUS RIORDINAMENTO ALFABETICO LISTA

// il for confronta gli elementi dell'array a due a due e li scambia se necessario. creo una variabile di appoggio "scambiFiniti" che cambia valore a seconda se nel ciclo c'è stato uno scambio tra due elementi. quando il ciclo di scambio percorre tutto l'array senza effettuare nessuno scambio l'array è in ordine alfabetico

var scambiFiniti = false;

while (scambiFiniti == false){

  scambiFiniti = true; //All'interno del ciclo do alla variabile valore true. se il for seguente non cambia nessuna posizione si esce dal while. se il for effettua anche solo uno scambio la variabile diventa false e si ricomincia un ciclo di while (e wuindi un altro for che scorre tutto l'array in cerca di cognomi da scambiare)

  for (var i = 0; i < listaCognomi.length - 1; i++) {
    //se localCompare restituisce 1 allora il secondo nome "listaCognome[i+1]" sarebbe in ordine alfabetico prima del primo "listaCognome[i]"
    if (listaCognomi[i].localeCompare(listaCognomi[i+1]) == 1){
      var temp = listaCognomi[i+1]; //creo una variabile temporanea dove salvare un cognome. poi sovrascrivo uno sull'altro. e sul precedente la copia salvata nella variabile temporanea
      listaCognomi[i+1] = listaCognomi[i];
      listaCognomi[i] = temp;
      scambiFiniti = false;
    }
  }
}


console.log(listaCognomi);



// con un for cerco il cognome aggiunto dall'utente e stampo l'indice corrispondente

var finder = false; // variabile di appoggio, quando trovo la corrispondenza col cognome che cercavo interrompe il for senza che scorra tutto l'array

for (var i = 0; i < listaCognomi.length && finder == false; i++) {
  if (listaCognomi[i] == cognomeUtente){
    console.log("Il cognome inserito dall'utente è in posizione: " + (i+1));
    finder = true;
  }
}
