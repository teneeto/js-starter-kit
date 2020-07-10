import express from 'express';
import path from 'path';
import compression from 'compression';

//used to open automatically launch a browser
import open from 'open';


const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/users', (req, res) => {
  // Hard Coding for simplicity. Pretend this hits a real database.
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tnorton@yahoo.com' },
    { id: 3, firstName: 'Tina', lastName: 'Lee', email: 'lee.tina@hotmail.com' },
  ]);
});

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
