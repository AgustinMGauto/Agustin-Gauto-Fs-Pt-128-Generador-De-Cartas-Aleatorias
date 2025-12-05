

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

function Cambio_Tamaño(){
const inputAltura = document.querySelector("#floatingInput");
const valorInputAltura = inputAltura.value;

const inputAncho = document.querySelector("#Ancho_Input")
const ValorInputAncho = inputAncho.value;

const alturacarta = document.querySelector(".card")
alturacarta.style.width = ValorInputAncho + "px";
alturacarta.style.height = valorInputAltura + "px";
}

document.querySelector("#floatingInput").addEventListener("input",Cambio_Tamaño)
document.querySelector("#Ancho_Input").addEventListener("input",Cambio_Tamaño)

setInterval(myClickFunction, 10000)