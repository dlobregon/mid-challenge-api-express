const catalogService = require('../services/catalogService');

const getCatalog = () => new Promise((resolve, reject) => {
  try {
    const catalog = catalogService.getCatalog();
    resolve(catalog);
  } catch (e) {
    reject(e);
  }
});

module.exports = { getCatalog };
