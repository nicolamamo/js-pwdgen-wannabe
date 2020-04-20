var nome_utente = prompt('inserisci il tuo nome');
console.log([nome_utente]);
var cognome_utente = prompt('iserisci il tuo cognome');
console.log([cognome_utente]);
var colore_preferito = prompt('qual è il tuo colore preferito?');
console.log([colore_preferito]);
console.log(20);

document.getElementById('nome').innerHTML = nome_utente
document.getElementById('cognome').innerHTML = cognome_utente
document.getElementById('colore').innerHTML = colore_preferito
