const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Server Works'
    });
});

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
});

// Run Server
app.listen(PORT, () => {
    console.log(`Server running on 127.0.0.1:${PORT}`);
});
