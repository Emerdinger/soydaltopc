const subtituloMain = document.querySelector('.sub-title-main');
const sMsg = '¿Sabias que Dalto está regalando una pc gamer?';
let imprimir = '';
let n = 0;

function imprimirS() {
    if (sMsg.length > n) {
        setTimeout(() => {
            imprimir += sMsg[n];
            subtituloMain.innerHTML = imprimir + '|';
            n++
            imprimirS();
        }, 100);
    } else {
        setTimeout(() => {
            borrarS();
        }, 5000);
    }
}

function borrarS() {
    if (imprimir != '') {
        setTimeout(() => {
            imprimir = imprimir.slice(0, -1);
            subtituloMain.innerHTML = imprimir + '|';
            borrarS();
        }, 50);
    } else {
        setTimeout(() => {
            n = 0;
            imprimirS();
        }, 1000);
    }
}

// Millon de likes
const millonHTML = document.querySelector('.millonLikes');
const millonMensaje = '1.000.000 de likes';
let imprimirMillon = '';
let nm = 0;

function imprimirMillonF() {
    if (millonMensaje.length > nm) {
        setTimeout(() => {
            imprimirMillon += millonMensaje[nm];
            millonHTML.innerHTML = imprimirMillon + '|';
            nm++
            imprimirMillonF();
        }, 300);
    } else {
        setTimeout(() => {
            borrarTextoMillon();
        }, 5000);
    }
}

function borrarTextoMillon() {
    if (imprimirMillon != '') {
        setTimeout(() => {
            imprimirMillon = imprimirMillon.slice(0, -1);
            millonHTML.innerHTML = imprimirMillon + '|';
            borrarTextoMillon()
        }, 50);
    } else {
        setTimeout(() => {
            nm = 0;
            imprimirMillonF();
        }, 1000);
    }
}

imprimirS();
imprimirMillonF();