// creo un array con i Cognomi

var listaCognomi = ["Pellegrini", "Francescini", "Bolognini", "Conte"];

console.log(listaCognomi);

// con un prompt chiedo un nome e con push lo aggiungo un nome alla Lista

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

// utilizzo sort per riordinare la Lista

listaCognomi.sort();

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
  document.getElementById("lista").innerHTML += "<li>" + listaCognomi[i] + "</li>";
}
