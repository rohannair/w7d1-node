const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/rohan', function (req, res) {
  const query = req.query;
  console.log(query);
  res.send('Hello Rohan!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
