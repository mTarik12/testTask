const { Router } = require('express');
const statisticController = require('./db/statistic.controller');

const router = Router();

router.get('/', async (req, res) => {
    const result = await statisticController.getAllUsersInfo();
    res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
    const { params: { id } } = req;
    const result = await statisticController.getUserInfo(id);
    res.status(200).json(result);
});

module.exports = router;