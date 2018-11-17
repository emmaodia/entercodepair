const express = require('express');
const router = express.Router();
const postsController = require('../server/controllers').posts;

router.get('/', postsController.list);

router.post('/', postsController.create);

module.exports = router;
