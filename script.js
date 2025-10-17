const prénom = "robin"
let age = "18"
        //nom = //"victor va a gerland ce soir car il a eu 18 ans"

console.log(prénom)
console.log(age)

if (age <13) {
    console.log("Accès interdit aux moins de 13 ans.")
} else if (age <18) {
    console.log("Vous pouvez accéder à la section ado.")
} else {
    console.log("Bienvenue dans l'espace adulte.")
}

for (let i = 0; i <=10; i ++) {
    console.log ("7*" +i +"=" +(i*7) )
}
const saluer = (prénom) => {
    return ("Bonjour, "+ prénom+" Comment vas tu !") 
}
console.log(saluer("robin"))

const nombre = [3, 4, 51, 6, 23, 9]
for (let i = 1; i < tableau.length; i++) {
    if (tableau[0] < max) {
    return max = tableau[i];
    }
}