import { createExCard } from './cartaEjercicio.js'


/**
 * 
 * @param {CategoriaEjercicios[]} book 
 */
export function makeBook(book) {
    let bookContainer = document.createElement('div');
    bookContainer.className = 'pb-5';

    let chaptersContainer = document.createElement('div');
    chaptersContainer.className = 'w-3/4 mx-auto flex flex-col justify-between lg:w-2/4'

    book.forEach((categoria, index) => {
        let chapter = createChapter(categoria.ejercicios, categoria.categoria);
        chaptersContainer.appendChild(chapter);

        if(index != 0)
            chapter.classList.add('hidden');
        //categoria.ejercicios.forEach(ejercicio => bookContainer.appendChild(createExCard(ejercicio)));
    });


    let chapterNav = document.createElement('div');
    chapterNav.className = 'flex flex-row justify-center flex-wrap pt-2 gap-y-2 border-black bg-indigo-100';

    book.forEach(categoria => addChapterNav(chapterNav, categoria.categoria, chaptersContainer));
    chapterNav.firstChild.classList.add('selected');

    bookContainer.appendChild(chapterNav);
    bookContainer.appendChild(chaptersContainer);

    return bookContainer;
}

/**
 * 
 * @param {Ejercicio[]} exercises 
 * @param {string} chapterId
 * 
 * @return {HTMLDivElement}
 */
function createChapter(exercises, chapterTitle) {

    let chapterContainer = document.createElement('div');
    chapterContainer.id = chapterTitle;

    let title = document.createElement('h2');
    title.textContent = chapterTitle;
    title.className = 'text-center font-bold text-2xl mt-2 underline';

    chapterContainer.appendChild(title);

    exercises.forEach(exercise => chapterContainer.appendChild(createExCard(exercise)));

    return chapterContainer;
}

/**
 * 
 * @param {HTMLElement} navBar 
 * @param {*} chapterId 
 * @param {HTMLDivElement} linkElement 
 */
function addChapterNav(navBar, chapterId, elements) {
    let divChapter = document.createElement('div');

    divChapter.id = `nav-${chapterId}`;
    divChapter.setAttribute('data-chapter', chapterId);
    divChapter.textContent = chapterId;

    divChapter.addEventListener('click', (event) => showChapter(event, elements, navBar.children))

    divChapter.className = 'bg-amber-500 px-5 py-2 rounded-t border-black border-t-1 border-l-1 border-r-1 border-b-1 cursor-pointer '
    //divChapter.addEventListener('click', () => linkElement.classList.toggle('hidden'));

    navBar.appendChild(divChapter);
}

/**
 * 
 * @param {*} event 
 * @param {HTMLDivElement} chapters 
 * @param {HTMLDivElement} buttons 
 */
function showChapter(event, chapters, buttons){
    [...chapters.children].forEach(chapter => event.target.getAttribute('data-chapter') == chapter.id ? chapter.classList.remove('hidden') : chapter.classList.add('hidden'));
    [...buttons].forEach(button => button.classList.toggle('selected', button == event.target));
}