const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('response from server - 2.\n');
});

app.listen(3002, () => {
    console.log('running on http://localhost:3002/');
});