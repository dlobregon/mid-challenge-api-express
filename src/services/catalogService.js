const https = require('https');

const getCatalog = () => new Promise((resolve, reject) => {
  https.get('https://api.tvmaze.com/shows/82/episodes', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      resolve(JSON.parse(data));
    });
  }).on('error', (err) => {
    reject(err);
  });
});

module.exports = { getCatalog };
