const express = require('express');
const app = express();
const PORT = 3002;
const catalog = [
	{id: 1, title: 'Movie 1'},
	{id: 2, title: 'Movie 2'}
];

app.get('/catalog', (req, res) => {
	res.send(catalog);
}
app.listen(PORT, () => {
	console.log(`Catalog serivce running on port ${PORT} .....`);
});
