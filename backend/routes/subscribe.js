const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
    const { email } = req.body;

    const subscribe = { subscribeAt: new Date(), email: email };

    const filePath = path.join(__dirname, '..', 'data', 'subscribe.json');

    let subscribes = [];

    if (fs.existsSync(filePath)) {
        let data = fs.readFileSync(filePath, 'utf8');
        subscribes = JSON.parse(data);
        subscribes.push(subscribe);
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        res.status(200).json({  message: 'Email received', subscribe });
    } else {
        subscribes.push(subscribe);
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        res.status(200).json({ message: 'Email received', subscribe });
    }
});

module.exports = router;