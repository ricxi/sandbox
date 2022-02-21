const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 3333;

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

app.delete('/v1/items/:id', (req, res) => {
    const itemId = req.params.id;
    // implement logic to validate id here
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return res.status(404).send('item does not exist');
    items = items.filter(item => item.id !== itemId);
    res.status(200).send({msg: 'item was successfully deleted'});
})

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
})