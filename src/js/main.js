/// <reference path="../types/types.js" />

import './../style.css'
import { makeBook } from './makeBook';
import { EjerciciosJSON } from '../data/data';

/**
 * @type {CategoriaEjercicios[]}
 */
window.addEventListener('DOMContentLoaded', () => {

    document.body.appendChild(makeBook(EjerciciosJSON));
});