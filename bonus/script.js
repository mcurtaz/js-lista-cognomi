// creo un array con i Cognomi

var listaCognomi = ["Pellegrini", "Francescini", "Bolognini", "Conte"];

console.log(listaCognomi);

// con un prompt chiedo un nome e con push lo aggiungo un nome alla Lista

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

//nel confrontare l'ordine alfabetico di due stringhe le maiuscole le mette sempre prima delle lettere minuscole. Per ovviare si trasforma la stringa in tutto minuscolo (o tutto maiuscolo) la funzione javascript si chiama .toLowerCase()   Ci sono funzioni in js per ritornare la prima maiuscola dopo il riordinamento. In questo caso è più semplice un "text-transform: capitalize" nel css

for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomi[i] = listaCognomi[i].toLowerCase();
}

// BONUS RIORDINAMENTO ALFABETICO LISTA

// il for confronta gli elementi dell'array a due a due e li scambia se necessario. creo una variabile di appoggio "scambiFiniti" che cambia valore a seconda se nel ciclo c'è stato uno scambio tra due elementi. quando il ciclo di scambio percorre tutto l'array senza effettuare nessuno scambio l'array è in ordine alfabetico

var scambiFiniti;

do{

  scambiFiniti = true; //All'interno del ciclo do alla variabile valore true. se il ciclo for seguente non cambia nessuna posizione si esce dal while. se il for effettua anche solo uno scambio la variabile diventa false e si ricomincia un ciclo di while (e quindi un altro ciclo for che scorre tutto l'array in cerca di cognomi da scambiare)

  for (var i = 0; i < listaCognomi.length - 1; i++) {
    //se localCompare restituisce 1 allora il secondo nome "listaCognome[i+1]" sarebbe in ordine alfabetico prima del primo "listaCognome[i]"
    if (listaCognomi[i].localeCompare(listaCognomi[i+1]) == 1){
      var temp = listaCognomi[i+1]; //creo una variabile temporanea dove salvare un cognome. poi sovrascrivo uno sull'altro. e sul precedente la copia salvata nella variabile temporanea
      listaCognomi[i+1] = listaCognomi[i];
      listaCognomi[i] = temp;
      scambiFiniti = false;
    }
  }
} while (scambiFiniti == false);


console.log(listaCognomi);



// con un for cerco il cognome aggiunto dall'utente e stampo l'indice corrispondente

var finder = false; // variabile di appoggio, quando trovo la corrispondenza col cognome che cercavo interrompe il for senza che scorra tutto l'array

for (var i = 0; i < listaCognomi.length && finder == false; i++) {
  if (listaCognomi[i] == cognomeUtente){
    console.log("Il cognome inserito dall'utente è in posizione: " + (i+1));
    finder = true;
  }
}

//con un for stampo nell'html la lista di cognomi in ordine alfabetico

for (var i = 0; i < listaCognomi.length; i++) {
  //quando ho confrontato l'ordine alfabetico ho messo tutto in minuscolo con to.LowerCase(). In questo caso invece di usare il css metto text-transform in style nell'html. Non è il metodo migliore ma per quest'esercizio va bene così
  document.getElementById("lista").innerHTML += '<li style="text-transform: capitalize;">' + listaCognomi[i] + "</li>";
}
