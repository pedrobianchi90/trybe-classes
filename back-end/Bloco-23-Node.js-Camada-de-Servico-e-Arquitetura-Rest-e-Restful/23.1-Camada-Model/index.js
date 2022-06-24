const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());
app.post('/', middlewares.createUser);
app.use(middlewares.error)
const PORT = 3006;
app.listen(PORT, () => {
    console.log('ouvindo a porta 3006');
});