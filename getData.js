const fetch = require('node-fetch');
const fs = require('fs')

const persistData = (jsonData) => {
  try {
    fs.writeFileSync('src/data.json', JSON.stringify(jsonData, null, 2))
  } catch (err) {
    console.error(err)
  }
};

fetch(
  'https://api.football-data.org/v2/competitions/EC/matches',
  {
    method: 'get',
    headers: { 'X-Auth-Token': process.env.FOOTBALL_DATA_ACCESS_TOKEN },
  }
)
  .then(res => {
    if (res.status > 200) {
      throw "got bad status code";
    }
    return res.json();
  })
  .then(json => persistData(json))
  .catch((e) => console.error("something went wrong with the request", e));
