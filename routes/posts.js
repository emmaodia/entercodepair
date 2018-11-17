const express = require('express');
const router = express.Router();
const postsController = require('../server/controllers').posts;

router.get('/', (req, res) => res.status(200).json({
  message: "This is the Posts route"
})
);

router.post('/', postsController.create);

module.exports = router;
