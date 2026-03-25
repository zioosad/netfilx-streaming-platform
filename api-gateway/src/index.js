const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/users/:id', async (req, res) => {
    const response = await axios.get(`http://user-service:3001/users/${req.params.id}`);
    res.send(response.data);
});

app.get('/catalog', async (req, res) => {
    const response = await axios.get(`http://catalog-service:3002/catalog`);
    res.send(response.data);
});

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
