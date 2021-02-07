const { Router } = require('express');
const userController = require('./db/users.controller');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const result = await userController.createUser(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.status(400).json({ 'message': 'not authorized' });
    }

});

router.get('/', async (req, res) => {
    try {
        const allUsers = await userController.getAllUsers();
        res.status(200).json(allUsers);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not get users' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { params: { id } } = req;
        const oneUser = await userController.getOneUser(id.toString());
        res.status(200).json(oneUser);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not get user' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { params: { id } } = req;
        const deletedUser = await userController.deleteUser(id);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not delete user' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { params: { id } } = req;
        const result = await userController.updateUser(id, req.body);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not update user' });
    }
});

router.get('/:id/users_statistics/:id', async (req, res) => {
    try {
        const { params: { id } } = req;
        const userInfo = await userController.getUsersAndInfo(id);
        res.status(200).json(userInfo);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not get users info' });
    }
});

module.exports = router;
