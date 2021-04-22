const randomNumber = () => {
    return Math.floor(Math.random() * 100);
};

const toUpper = string => string.toUpperCase();
const firtLetter = string => string[0];
const concat = (str1, str2) => `${str1} ${str2}`;

module.exports = { randomNumber };