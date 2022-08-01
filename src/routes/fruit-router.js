const fruitController = require('./../controllers/fruit-controller');

const fruitRouter = require('express').Router();

fruitRouter.get('/fruits', fruitController.getAll);
fruitRouter.post('/fruits', fruitController.create);

fruitRouter.get('/fruits/:id', fruitController.getOne);
fruitRouter.put('/fruits/:id', fruitController.update);
fruitRouter.delete('/fruits/:id', fruitController.delete);

module.exports = fruitRouter;
