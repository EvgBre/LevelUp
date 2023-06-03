import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createGame = (game) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('Create Game Response:', data);
      resolve(data); // request.data from def create()
    })
    .catch((error) => {
      console.error('Create Game Error:', error);
      reject(error);
    });
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`, {})
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getGames, createGame, getGameTypes };
