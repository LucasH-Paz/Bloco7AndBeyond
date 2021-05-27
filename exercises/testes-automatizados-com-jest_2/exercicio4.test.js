const { it, expect } = require('@jest/globals');

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Exercicio4', () => {
    it('testa se os repositórios estão na lista', async () => {
        expect.assertions(2);
        const result = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(result.includes('sd-01-week4-5-project-todo-list')).toBe(true);
        expect(result.includes('sd-01-week4-5-project-meme-generator')).toBe(true);
    });
});