const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello, world 2 de prueba');
});

app.listen(process.env.PORT || 8080);
