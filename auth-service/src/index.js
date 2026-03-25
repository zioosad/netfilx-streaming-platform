const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3004;

app.use(bodyParser.json());

let users = [];

app.post('/signup', (req, res) => {
    const user = { id: users.length + 1, username: req.body.username };
    users.push(user);
    const token = jwt.sign({ user }, 'secretKey');
    res.json({ token });
});

app.post('/login', (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (user) {
        const token = jwt.sign({ user }, 'secretKey');
        return res.json({ token });
    }
    res.status(401).send('User not found');
});

app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});

