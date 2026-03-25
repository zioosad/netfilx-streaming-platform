const express = require('express');
const app = express();
const PORT = 3005;

const recommendations = {
    '1': ['Movie 2', 'Movie 3'],
    '2': ['Movie 1', 'Movie 2']
};

app.get('/recommend/:userId', (req, res) => {
    const userId = req.params.userId;
    const recommended = recommendations[userId] || [];
    res.json(recommended);
});

app.listen(PORT, () => {
    console.log(`Recommendation service running on port ${PORT}`);
});
