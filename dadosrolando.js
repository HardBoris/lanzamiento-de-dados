let dadoA = 0;
let dadoB = 0;

const puntosA = document.getElementsByClassName("puntoA");
const puntosB = document.getElementsByClassName("puntoB");

const valorA1 = document.getElementsByClassName("puntoA")[4];
const valorA21 = document.getElementsByClassName("puntoA")[0];
const valorA22 = document.getElementsByClassName("puntoA")[8];
const valorA41 = document.getElementsByClassName("puntoA")[2];
const valorA42 = document.getElementsByClassName("puntoA")[6];
const valorA61 = document.getElementsByClassName("puntoA")[3];
const valorA62 = document.getElementsByClassName("puntoA")[5];

const valorB1 = document.getElementsByClassName("puntoB")[4];
const valorB21 = document.getElementsByClassName("puntoB")[0];
const valorB22 = document.getElementsByClassName("puntoB")[8];
const valorB41 = document.getElementsByClassName("puntoB")[2];
const valorB42 = document.getElementsByClassName("puntoB")[6];
const valorB61 = document.getElementsByClassName("puntoB")[3];
const valorB62 = document.getElementsByClassName("puntoB")[5];

const vA1 = [valorA1];
const vA2 = [valorA21, valorA22];
const vA3 = [valorA1, valorA21, valorA22];
const vA4 = [valorA21, valorA22, valorA41, valorA42];
const vA5 = [valorA21, valorA22, valorA1, valorA41, valorA42];
const vA6 = [valorA21, valorA22, valorA41, valorA42, valorA61, valorA62];

const vB1 = [valorB1];
const vB2 = [valorB21, valorB22];
const vB3 = [valorB1, valorB21, valorB22];
const vB4 = [valorB21, valorB22, valorB41, valorB42];
const vB5 = [valorB21, valorB22, valorB1, valorB41, valorB42];
const vB6 = [valorB21, valorB22, valorB41, valorB42, valorB61, valorB62];

function resetDots(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "ivory";
        
    }
}

function pintaPunto(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "black";
    }
}

function rolaA() {
    dadoA = (Math.ceil(Math.random()*6));
    resetDots(puntosA)
    switch (dadoA) {
        case 1:
            pintaPunto(vA1);
            break;
        case 2:
            pintaPunto(vA2);
            break;
        case 3:
            pintaPunto(vA3);
            break;
        case 4:
            pintaPunto(vA4);
            break;
        case 5:
            pintaPunto(vA5);
            break;
        case 6:
            pintaPunto(vA6);
            break;
        
    }
    return dadoA;
}

function rolaB() {
    dadoB = (Math.ceil(Math.random()*6));
    resetDots(puntosB)
    switch (dadoB) {
        case 1:
            pintaPunto(vB1);
            break;
        case 2:
            pintaPunto(vB2);
            break;
        case 3:
            pintaPunto(vB3);
            break;
        case 4:
            pintaPunto(vB4);
            break;
        case 5:
            pintaPunto(vB5);
            break;
        case 6:
            pintaPunto(vB6);
            break;
        
    }
    return dadoB;
}

const rodar = document.getElementById("rolar");
rodar.addEventListener("click", function () {
    
    rolaA();
    rolaB();
    const lanzamiento = [dadoA, dadoB];
    // return lanzamiento;
    console.log(lanzamiento);
    
})
