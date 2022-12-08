nombre = prompt("de quel nombre voulez vous la factorielle ?")
let reponse = 1
for (i = nombre; i >0; i--) {
    reponse = reponse * i;
    console.log(reponse);
    
}
console.log(nombre + "!" + "=" + reponse)