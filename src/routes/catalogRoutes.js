const router = require('express').Router();
const catalogController = require('../controllers/catalogController');

router.get('/', async (req, res) => {
  try {
    const catalog = await catalogController.getCatalog();
    res.status(200).json(catalog);
  } catch (e) {
    res.status(404).end();
  }
});

module.exports = router;
