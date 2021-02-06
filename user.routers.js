const { Router } = require('express');
const userController = require('./db/users.controler');

const router = Router();

router.post('/', async (req, res) => {
    const result = await userController.createUser(req.body);
    res.status(201).json(result);
});

router.get('/', async (req, res) => {
    const allUsers = await userController.getAllUsers();
    res.status(200).json(allUsers);
});

router.delete('/:id', async (req, res) => {
    const { params: { id } } = req;
    const deletedUser = await userController.deleteUser(id);
    res.status(200).json(deletedUser);
});

router.put('/:id', async (req, res) => {
    const { params: { id } } = req;
    const result = await userController.updateUser(id, req.body);
    res.status(201).json(result);
});

module.exports = router;
