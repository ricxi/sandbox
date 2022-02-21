const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const morgan = require('morgan');

const port = 3333 || process.env.PORT;

const app = express();
app.use(morgan('tiny'));
app.use(bodyParse.json());
app.use(cors());

let items = [
    {id: '1', text: 'Apples', date: 'Jan 1, 1901'},
    {id: '2', text: 'Oranges', date: 'Dec 31, 1901'},
    {id: '3', text: 'Mangoes', date: 'June 3, 1888'}
];

// return an array contain all the list items
app.get('/v1/items/', (req, res) => {
    res.send(items);
})

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
})