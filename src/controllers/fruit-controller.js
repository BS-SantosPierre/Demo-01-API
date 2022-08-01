const fruitModel = require('./../models/fruit');
const { Request, Response } = require('express');

const fruitController = {
	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 */
	getAll: (req, res) => {
		const fruits = fruitModel.getAll();
		return res.status(200).json(fruits);
	},

	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 */
	getOne: (req, res) => {
		const targetId = parseInt(req.params.id);
		const fruit = fruitModel.getById(targetId);

		if (!fruit) {
			// return res.sendStatus(404);
			return res.status(404).json({ message: `The fruit with ${targetId} does not exist.`, status: 404 })
		}

		return res.status(200).json(fruit);
	},

	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 */
	create: (req, res) => {
		// const { name } = req.body;

		if (!req.body.name) {
			return res.status(422).json({message: 'Name in body does not exist'});
			// return res.status(400)
		}

		const data = {
			name: req.body.name
		};

		const newFruit = fruitModel.create(data);

		return res.status(201).json(newFruit);
	},

	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 */
	update: (req, res) => {
		const targetId = parseInt(req.params.id);

		if (!req.body.name) {
			return res.status(422).json({message: 'Name in body does not exist'});
		}

		const data = {
			name: req.body.name
		};

		const isOk = fruitModel.update(targetId, data);

		if (!isOk) {
			return res.sendStatus(404);
		}

		return res.sendStatus(204);
	},

	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 */
	delete: (req, res) => {
		const targetId = parseInt(req.params.id);

		const isOk = fruitModel.delete(targetId);

		if (!isOk) {
			return res.sendStatus(404);
		}

		return res.sendStatus(204);
	},
}

module.exports = fruitController;
