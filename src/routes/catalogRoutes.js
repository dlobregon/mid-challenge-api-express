const router = require('express').Router();
const catalogController = require('../controllers/catalogController');

router.get('/', async (req, res) => {
  try {
    const { startIndex, endIndex } = req.pagination;
    const catalog = await catalogController.getCatalog();
    const newCatalog = catalog.slice(startIndex, endIndex);
    res.status(200).json(newCatalog);
  } catch (e) {
    res.status(404).end();
  }
});

module.exports = router;
