const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// app.get('*.js', (req, res, next) => {
//   req.url += '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));