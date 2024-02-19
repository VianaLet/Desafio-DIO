// Desafio do Herói
let nomeHeroi = "A caçadora de Demônios"
let xpHeroi = 10001
let ligaXp;

if (xpHeroi < 1000){
    ligaXp ="Ferro"
}
else if (xpHeroi <= 2000){
    ligaXp="Bronze"
}
else if (xpHeroi <= 5000){
    ligaXp="Prata"
}
else if (xpHeroi > 6000 && xpHeroi <= 7000){
    ligaXp="Ouro"
}
else if (xpHeroi <= 8000){
    ligaXp="Platina"
}
else if (xpHeroi <= 9000){
    ligaXp="Ascendente"
}
else if (xpHeroi <= 10000){
    ligaXp="Imortal"
}
else if (xpHeroi > 10000){
    ligaXp="Radiante"
}

console.log(`O Herói de nome: ${nomeHeroi} está no nível de ${ligaXp}`)