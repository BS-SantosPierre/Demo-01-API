const fruits = require('./data/fruit.json');

const fruitModel = {
	getById: (id) => {
		return fruits.rows.find((row) => row.id === id);
	},

	getAll: () => {
		return fruits.rows;
	},

	create: (data) => {
		const newId = ++fruits.lastId;
		const fruit = {
			id: newId,
			name: data.name
		}

		fruits.rows.push(fruit);
		return fruit;
	},

	update: (id, data) => {
		const indexFruit = fruits.rows.findIndex(row => row.id === id);

		if (indexFruit === -1) {
			return false;
		}

		fruits.rows[indexFruit] = {
			id,
			...data
		}

		return true;
	},

	delete: (id) => {
		const fruitIndex = fruits.rows.findIndex(row => row.id === id);

		if (fruitIndex === -1) {
			return false;
		}

		fruits.rows.splice(fruitIndex, 1);
		return true;
	}
};

module.exports = fruitModel;
