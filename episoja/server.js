const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'enzo' && password === 'gab') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
