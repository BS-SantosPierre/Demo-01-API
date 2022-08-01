const express = require('express');
const cors = require('cors');
const fruitRouter = require('./routes/fruit-router');

const PORT = 8080;

const app = express();

app.use(cors());

app.use(express.json());

// Route
app.use(fruitRouter);

app.listen(PORT, () => {
	console.log(`Listening to http://localhost:${PORT}`);
});
