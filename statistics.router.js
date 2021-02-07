const { Router } = require('express');
const statisticController = require('./db/statistic.controller');

const router = Router();

router.get('/', async (req, res) => {
    try {

        if (!req.query.date) {
            const result = await statisticController.getAllUsersInfo();
            res.status(200).json(result);
        } else {
            const date = req.query.date;
            const result = await statisticController.getFilteredStatictic(date);
            res.status(200).json(result);
        }
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not get users and users\'s info' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { params: { id } } = req;
        const result = await statisticController.getUserInfo(id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error.name, error.message);
        res.json({ 'message': 'could not get users\'s info' });
    }
});

module.exports = router;