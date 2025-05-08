const express = require('express');
const router = express.Router();

// const subject_text = '{"contactSubject": ["General Enquiry","Classes","Schedules","Instructors","Prices","Other","RCN", "JJJJ"]}';

const subject = require('../data/contact_subject.json');

router.get('/', (req, res) => {
    // res.end(subject_text);
    res.json(subject);
});

module.exports = router;