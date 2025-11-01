const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / should return 404 with body 'Resource not found'
app.get('/', (req, res) => {
	res.status(404).send('Resource not found');
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
