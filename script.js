// creo un array con i Cognomi

var listaCognomi = ["Pellegrini", "Francescini", "Bolognini", "Conte"];

console.log(listaCognomi);

// con un prompt chiedo un nome e con push lo aggiungo un nome alla Lista

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

// utilizzo sort per riordinare la Lista

//nel confrontare l'ordine alfabetico di due stringhe le maiuscole le mette sempre prima delle lettere minuscole. Per ovviare si trasforma la stringa in tutto minuscolo (o tutto maiuscolo) la funzione javascript si chiama .toLowerCase() utilizzo un for che scorre tutto l'array e mette tutto in minuscolo

for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomi[i] = listaCognomi[i].toLowerCase();
}

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
  //quando ho confrontato l'ordine alfabetico ho messo tutto in minuscolo con to.LowerCase(). In questo caso invece di usare il css metto text-transform in style nell'html. Non è il metodo migliore ma per quest'esercizio va bene così
  document.getElementById("lista").innerHTML += '<li style="text-transform: capitalize;">' + listaCognomi[i] + "</li>";
}
