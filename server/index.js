require('dotenv').config();
const express = require('express');
const app = express();
const handlers = require('./handlers.js')
app.use(express.json());


app.use(express.static('client/dist'))


const PORT = process.env.PORT
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);


app.get('/*', function(req, res) {
  console.log('req', req.url)
  handlers.getInfo(req.url)
  .then((data) => {
    console.log(data.data);
    res.status(200).json(data.data);
  })
  .catch((err) => {
    res.status(500).json({ message: 'Internal Server Error'})
  })
})