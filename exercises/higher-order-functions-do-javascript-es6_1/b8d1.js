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

const verify = (number) => number == Math.round(Math.random()*5);

const luckOrNot = (bet) => verify(bet)? 'Parabens, você ganhou' : 'Tente Novamente';

console.log(luckOrNot(0));

const exam = (answer) => {}