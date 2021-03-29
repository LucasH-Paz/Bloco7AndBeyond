let skills = ['JS', 'HTML', 'CSS', 'GIThub', 'Phyton'];

const searchX = (word, string) => string.includes('x') ? string.replace(/x/i, word) : string;
let text = searchX('Lucas', 'Hora de descansar x');

const concatAll = string => {
    let result = `${string}, minhas 5 principais habilidades são:`;
    for (let index = 0; index < skills.length; index += 1) {
        result.concat(skills[index]);
    }
}

console.log(concatAll(text));