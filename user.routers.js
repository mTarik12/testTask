const { Router } = require('express');
const userController = require('./db/users.controller');

const router = Router();

router.post('/', async (req, res) => {
    const result = await userController.createUser(req.body);
    res.status(201).json(result);
});

router.get('/', async (req, res) => {
    const allUsers = await userController.getAllUsers();
    res.status(200).json(allUsers);
    console.log(error.name, error.message);
    res.json({ 'message': 'could not get users' });
});

router.get('/:id', async (req, res) => {
    const { params: { id } } = req;
    const oneUser = await userController.getOneUser(id.toString());
    res.status(200).json(oneUser);
    console.log(error.name, error.message);
    res.json({ 'message': 'some problem' });
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

router.get('/:id/users_statistics/:id', async (req, res) => {
    const { params: { id } } = req;
    const userInfo = await userController.getUsersAndInfo(id);
    res.status(200).json(userInfo);
});

module.exports = router;
