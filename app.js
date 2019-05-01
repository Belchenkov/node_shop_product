const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Run Server
app.listen(PORT, () => {
    console.log(`Server running on 127.0.0.1:${PORT}`);
});
