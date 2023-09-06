const express = require('express');
const app = express();
const user = require('./src/router/user');

app.use(express.json());

app.use('/user', user)

app.get('/', (req, res) => {
    res.send('Welcome to the LNG!');
})

const database = require('./src/Schema/connect')
const db = new database;

const port = 3000;

app.listen(port, (req, res) => {
    console.log(`App listening on port ${port}`);
    db.connect().then((err, result) => {
        if (err) throw err;
        console.log("database is connected");})
});