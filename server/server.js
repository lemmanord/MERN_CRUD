const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const Todo = require('./models/todo');
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const { DB_URI } = process.env;
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
});

console.log(process.env.DB_URI);

mongoose.connection.once('once', () => {
  console.log('Mongodb connecton established successfully');
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  Todo.find((err, todo) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.post('/create', (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
