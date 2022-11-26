import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hi, my name is Express');
});

app.listen(3005, () => {
  console.log('-------- Server running on por 3005');
});
