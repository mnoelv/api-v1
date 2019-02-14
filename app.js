const express = require('express');
const bodyParser = require('body-parser'); 

const party = require('./party');
const users = require('./user_route');
const offices = require('./office_route');
const candidates = require('./candidate_route');
const votes = require('./vote_route');
const petitions = require('./petition_route');

const app = express();

app.use(bodyParser.json());

app.use('*', (req, res, next) => {
  console.log('${req.method}: ${req.url}');
  next();
});

app.get('/', (req, res) => {
  res.status(404).json({ info: 'The perties are available at /api/v1/parties' });
});

app.use('/api/v1/parties', party); 
app.use('/api/v1/offices', offices);
app.use('/api/v1/users', users); 
app.use('/api/v1/candidate', candidates);
app.use('/api/v1/vote', votes); 
app.use('/api/v1/petition', petitions);

app.all('*', (req, res) => {
res.status(404).json({ error: 'Access Failed' });
});


port = process.env.PORT || 7000;  

app.listen(port, () => {
  console.log('Server started at port: 7000');
});

