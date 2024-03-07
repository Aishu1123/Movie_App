const express = require('express');

const router = express.Router();
const favoriteController = require('../Controllers/favoriteController');

router.post('/', favoriteController.addToFavorites);

module.exports = router;