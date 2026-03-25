const express = require('express');
const app = express();
const PORT = 3001;

const users = [
	{id: 1, name: 'John Doe'},
	{id: 2, name: 'Jane Doe'}
];
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.send(user);
});

app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
