const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product', (req, res) => {
    console.log(rootDir);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


module.exports = router;
