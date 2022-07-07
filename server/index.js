require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());


app.use(express.static('client/dist'))

// app.get('/', (req, res) => {
//   // console.log('Server Side GET Req hit');

// });
const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
