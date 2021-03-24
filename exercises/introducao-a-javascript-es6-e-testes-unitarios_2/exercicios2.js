const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Questão 1
const addMorning = (target, key, value) => target[key] = value;
addMorning(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// Questão 2
const keysList = objeto => Object.keys(objeto);
// console.log(keysList (lesson2));

// Questão 3
const objectSize = objeto => keysList(objeto).length;
// console.log(objectSize(lesson2));

// Questão 4
const objectValues = objeto => Object.values(objeto);
// console.log(objectValues(lesson2));

// Questão 5
const allLessons = Object.assign( {}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

//Questão 6
