const express = require('express');
const app = express();
const PORT = 3003;

app.get('/stream/:id', (req, res) => {
    res.send(`Streaming video for ID: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Streaming service running on port ${PORT}`);
});

