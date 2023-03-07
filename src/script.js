
const nomeUtente = prompt('Inserisci il tuo nome');

const cognomeUtente = prompt('Inserisci il tuo cognome');

const coloreprefUtente = prompt('Inserisci il tuo colore preferito');

const num = 21

console.log(nomeUtente + cognomeUtente + coloreprefUtente + num )

document.getElementById('pass').innerHTML = `
<h1> ${nomeUtente}${cognomeUtente}${coloreprefUtente}${num} </h1>
`;

