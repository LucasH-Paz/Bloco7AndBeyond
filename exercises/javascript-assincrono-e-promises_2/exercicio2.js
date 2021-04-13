const newArray = async () => {
    const myPromise = new Promise((resolve, reject) => {
        const array = [];
        for (let index = 0; index < 10; index += 1) {
            const number = Math.floor((Math.random()) * 50);
            array.push(number * number);
        }
        const sum = array.reduce((acc, cur) => acc + cur, 0);
        (sum < 8000) ? resolve(sum) : reject();
    });

    myPromise.then((result) => console.log('resolvido'))
        .then((r) => [2,3,5,10].map((n) => r/n))
        .then((r) => r.reduce((acc, curr) => acc + curr, 0) )
        .catch((r) => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

newArray();
