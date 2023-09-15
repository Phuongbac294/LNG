const express = require('express');
const app = express();
const user = require('./src/router/user');
const controlProtection = require('./src/router/controlProtection');
const car = require('./src/router/car')
const {validateToken} = require('./src/middleware/validateToken');


app.use(express.json());

app.use('/user', user)
app.use('/controlProtection', controlProtection)
app.use('/car',  car)

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