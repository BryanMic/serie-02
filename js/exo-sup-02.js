let nombre = prompt("Ecrivez un nombre");
let puissance = prompt("Ecrivez la puissance");
let resultat = 1;
let reponse = 0;

for (let i = puissance; i > 0; i--) {
    resultat = resultat * nombre
    
}
console.log(nombre + "^" + puissance + "=" + resultat)