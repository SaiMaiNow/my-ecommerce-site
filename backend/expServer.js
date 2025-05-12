const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4400;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/subject', require('./routes/subject.js'));

app.use('/api/contact', require('./routes/contact.js'));

app.use('/api/subscribe', require('./routes/subscribe.js'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

