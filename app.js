const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
    res.json({
        message: 'Server Works'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on 127.0.0.1:${PORT}`);
});
