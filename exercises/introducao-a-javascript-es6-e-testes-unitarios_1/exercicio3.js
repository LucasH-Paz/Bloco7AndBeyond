console.log('Hello World :)');

let clickCount = 0;

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    clickCount += 1;
    const access = document.getElementById('counter');
    access.innerText = `Você clicou ${clickCount} vezes`;
});
