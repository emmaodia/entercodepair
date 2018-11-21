const express = require('express');
const router = express.Router();
const postsController = require('../server/controllers').posts;

router.get('/', (req, res) => res.status(200).json({
    message : "Main Router Page"
}));

router.get('/posts', (req, res) => res.status(200).json({
  message: "This is the Posts route"
})
);

module.exports = router;
