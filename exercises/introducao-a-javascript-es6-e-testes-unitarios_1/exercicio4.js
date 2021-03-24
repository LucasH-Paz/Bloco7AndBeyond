const searchX = (word, string) => string.includes('x')? string.replace(/x/i, word) : string;

console.log(searchX('Lucas','Hora de descansar x'));
  