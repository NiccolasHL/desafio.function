var score = getScore(50,40)
var level = getLevel(score)

console.log("O Herói tem um saldo de " + score + " está no nível de " + level)

function getScore(win,lose){
    return win - lose
}

function getLevel(score){
    var level = " "

    if (score < 10){
        level = "Ferro"
    } else if (score < 20){
        level = "Bronze"
    } else if (score < 50){
        level = "Prata"
    } else if (score < 80){
        level = "Ouro"
    } else if (score < 90){
        level = "Diamanete"
    } else if (score < 100){
        level = "Lendário"
    } else {
        level = "Imortal"
    }
    return level
}