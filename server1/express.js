const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('response from server - 1.\n');
});

app.listen(3001, () => {
    console.log('running on http://localhost:3001/');
});