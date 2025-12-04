

let Numeros = [2,3,4,5,6,7,8,9,10,"J","K","Q","A"]
let Simbolos = ["♦","♥","♠","♣"]

// window.onload = function() {
    window.myClickFunction = function myClickFunction() {
  

function SelecionAuto (num) {
    const numal = Math.floor(Math.random()*num.length)
    return num[numal]
}


const numeroCarta = SelecionAuto(Numeros)
const SimboloCarta = SelecionAuto(Simbolos)

const elementsimboloAR = document.getElementById("icono")
elementsimboloAR.innerHTML = SimboloCarta

const elementsimboloAB = document.getElementById("icono2")
elementsimboloAB.innerHTML = SimboloCarta

const elementNumero = document.getElementById("numero")
elementNumero.innerHTML = numeroCarta

const clasecard = document.querySelector(".card")

if (SimboloCarta === "♦" || SimboloCarta === "♥"){clasecard.classList.add("rojo")} else {clasecard.classList.remove("rojo")}

};

setInterval(myClickFunction, 10000)
