require('dotenv').config();
const express = require('express');
const app = express();
const handlers = require('./handlers.js')
app.use(express.json());


app.use(express.static('client/dist'))


const PORT = 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);


app.get('/*', function(req, res) {
  if (req.url !== '/favicon.ico') {
    handlers.getInfo(req.url)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
  }
})