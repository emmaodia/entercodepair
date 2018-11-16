const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  message : "Main Router Page"
});

module.exports = router;
