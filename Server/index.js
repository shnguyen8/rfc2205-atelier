require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());



app.get('hello/world', (req, res))
const PORT = process.env.PORT || 8000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
