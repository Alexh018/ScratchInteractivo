/// <reference path="../types/types.js" />

/**
 * 
 * @param {Ejercicio} exercise 
 * @returns {HTMLDivElement}
 */
export function createExCard(exercise) {


    let contenedor = document.createElement('div');
    contenedor.id = exercise.id;
    contenedor.className = 'flex flex-col rounded-xl shadow-xl py-5 px-5';

    let enunciadoP = document.createElement('p');
    enunciadoP.innerHTML = `<span class="font-bold">${exercise.numero}</span>.\t ${exercise.enunciado}`;
    enunciadoP.className = 'text-justify"';

    let cImagenes = document.createElement('div');
    cImagenes.className = 'flex flex-row justify-center items-center gap-1';

    let imgHelp = null;
    if (exercise.urlAyuda != '') {
        imgHelp = document.createElement('img')
        imgHelp.src = exercise.urlAyuda;
        imgHelp.className = 'w-1/2 mx-auto';
        imgHelp.addEventListener('error', () => imgHelp.classList.add('hidden'));
        cImagenes.appendChild(imgHelp);
    }

    let imgSol = null;
    if (exercise.urlSol != '') {
        imgSol = document.createElement('img');
        imgSol.src = exercise.urlSol;
        imgSol.className = 'w-1/2 mx-auto transition duration-300 blur origin-left';
        imgSol.addEventListener('error', () => imgSol.classList.add('hidden'));
        cImagenes.appendChild(imgSol);
    }

    let botonMostrar = document.createElement('button');
    botonMostrar.textContent = 'Mostrar Solución';
    botonMostrar.className = 'bg-amber-500 w-fit px-5 py-2 my-2 rounded mx-auto cursor-pointer hover:bg-amber-400 hover:shadow-md';
    botonMostrar.addEventListener('click', (event) => showSol(event, imgSol));

    contenedor.append(enunciadoP);
    contenedor.append(cImagenes);
    contenedor.append(botonMostrar);

    return contenedor;
}

/**
 * 
 * @param {PointerEvent} event
 * @param {HTMLElement} img 
 */
function showSol(event, img) {


    if (img) {
        img.classList.toggle('blur');
        event.target.textContent = img.classList.contains('blur') ? 'Mostrar Solución' : 'Ocultar Solución';
    }
    /*
    if (img.classList.contains('hidden')) {
        img.classList.remove('hidden');
        setTimeout(() => {
            img.classList.remove('scale-x-0');
            img.classList.remove('opacity-0');
            img.classList.add('scale-100');
            img.classList.add('opacity-100');
        }, 10);
    }
    else {
        img.classList.add('scale-x-0');
        img.classList.add('opacity-0');
        img.classList.remove('scale-100');
        img.classList.remove('opacity-100');
        setTimeout(() => {
            img.classList.add('hidden');
        }, 100);
    }
        */
    //img.src = url;


    /**event.target.textContent = img.classList.contains('hidden') ? 'Ocultar Solución' : 'Mostrar Solución';
 img.classList.toggle('hidden');
 setTimeout(() => {
     img.classList.remove('scale-x-0');
     img.classList.remove('opacity-0');
     img.classList.add('scale-100');
     img.classList.add('opacity-100');
 });*/


}