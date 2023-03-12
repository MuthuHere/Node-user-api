const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the bodyParser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const users = [];


app.get('/', (req, res) => {
  res.send('Hello, world!d');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


app.post('/users',(req,res)=> {
  const user = req.body;
  users.push(user);
  res.send('User added successfully');
});

app.get('/users',(req,res) => {
res.send(users);
});