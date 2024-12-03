const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/notesRoute');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});