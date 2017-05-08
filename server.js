'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let nextItemId = 0;
function getNextId() {
  return (nextItemId++).toString();
}

const items = [{
  id: getNextId(),
  name: 'Oranges',
  image: 'https://t3.ftcdn.net/jpg/00/99/56/26/240_F_99562611_EIZ4AssrFTz1UNyOmM8KAChSeQNu5nMA.jpg'
}, {
  id: getNextId(),
  name: 'Apples',
  image: 'http://media.mercola.com/assets/images/food-facts/apple.jpg'
}];

app.get('/items', (req, res) => {
  res.send(items.map(item => {
    return { id: item.id, name: item.name };
  }));
});

app.get('/items/:id', (req, res) => {
  const item = items.find(item => item.id === req.params.id) || null;
  res.send(item);
});

app.post('/items', (req, res) => {
  const newItem = Object.assign({}, req.body, {
    id: getNextId()
  });

  items.push(newItem);
  res.send(newItem);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
