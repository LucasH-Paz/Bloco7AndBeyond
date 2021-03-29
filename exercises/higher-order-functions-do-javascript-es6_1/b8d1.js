const newEployeId = (name) => {
    const arr = name.split(' ');
    const obj = {
        nomeCompleto: name,
        email: `${arr[0]}_${arr[arr.length - 1]}@trybe.com`
    };
    return obj;
}

const employee = {};

const newEmployees = (name) => {
    const size = Object.keys(employee).length;
    employee['id' + (size + 1)] = newEployeId(name);
}

const verify = (number) => number == Math.round(Math.random() * 5);

const luckOrNot = (bet) => verify(bet) ? 'Parabens, você ganhou' : 'Tente Novamente';

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (arr1, arr2) => {
    let points = 0;
    for (let index = 0; index < arr1.length; index += 1) {
        (arr1[index] === arr2[index]) ? points += 1 : points -= 0.5;
        if (arr2[index] === 'N.A') { points += 0, 5 };
    }
    return points;
}

const checkAnswers = (param1, param2, func) => func(param1, param2);