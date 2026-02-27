const express = require('express');
const libraryController = require('../controllers/libraryController');
const logger = require('../middlewares/logger');

const router = express.Router();

// middleware
router.use(logger);

// Front Controller con parámetro
router.get('/', (req, res) => {
  const opcion = req.query.opcion;

  switch (opcion) {
    case '1':
      libraryController.home(res);
      break;
    case '2':
      libraryController.books(res);
      break;
    case '3':
      libraryController.contact(res);
      break;
    default:
      libraryController.menu(res);
  }
});

module.exports = router;