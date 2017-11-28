const express = require('express');

const router = express.Router();

router.get('/index', (req, res) => {
    console.log(req.url);
});
router.get('/signin', (req, res) => {
    console.log(req.url);
});

module.exports = router;