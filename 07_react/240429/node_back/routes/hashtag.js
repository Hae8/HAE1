const express = require('express');
const router = express.Router();
const { getHashtags } = require('../controllers/hashtag');

router.get('/', getHashtags)

module.exports = router;