const axios = require('axios');

const url = 'https://coderbyte.com/api/challenges/json/age-counting';

async function getData() {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response.data.data.trim());
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

function createArray(str) {
  return str.split(',');
}

(async () => {
  const data = await getData();
  const filter = createArray(data).filter((val) => {
		return val.trim().startsWith('age');
	})
	console.log(filter);
})();