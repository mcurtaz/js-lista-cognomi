// creo un array con i Cognomi

var listaCognomi = ["Pellegrini", "Francescini", "Bolognini", "Conte"];

console.log(listaCognomi);

// con un prompt chiedo un nome e con push lo aggiungo un nome alla Lista

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

console.log(listaCognomi);



// BONUS RIORDINAMENTO ALFABETICO LISTA

// il for confronta gli elementi dell'array a due a due e li scambia se necessario. creo una variabile di appoggio che cambia valore a seconda se nel ciclo c'è stato uno scambio tra due elementi. quando il ciclo di scambio percorre tutto l'array senza effettuare nessuno scambio l'array è in ordine alfabetico


for (var i = 0; i < listaCognomi.length - 1; i++) {
  //se localCompare restituisce 1 allora il secondo nome "listaCognome[i+1]" sarebbe in ordine alfabetico prima del primo "listaCognome[i]"
  if (listaCognomi[i].localeCompare(listaCognomi[i+1]) == 1){
    var temp = listaCognomi[i+1];
    listaCognomi[i+1] = listaCognomi[i];
    listaCognomi[i] = temp;
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
