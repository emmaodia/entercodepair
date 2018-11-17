const express = require('express');
const router = express.Router();
const postsController = require('../server/controllers').posts;

router.get('/', postsController.list);

router.post('/', postsController.create);

router.get('/:postId', postsController.retrieve);

router.put('/:postId', postsController.update);

module.exports = router;
