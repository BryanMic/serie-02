let nombre = prompt("de quel nombre voulez vous la factorielle ?")
let index = nombre
let reponse = 1
while (index < nombre) {
    reponse = reponse * index;
    index = index - 1
    
    console.log(reponse);
    
}
console.log(nombre + "!" + "=" + reponse)