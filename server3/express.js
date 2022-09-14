const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('response from server - 3.\n');
});

app.listen(3003, () => {
    console.log('running on http://localhost:3003/');
});