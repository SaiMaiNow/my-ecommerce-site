const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { fname, lname, email, subject, message } = req.body;
    console.log(fname, lname, email, subject, message);
    res.status(200).json({ message: 'Message sent successfully' });
});

module.exports = router;
