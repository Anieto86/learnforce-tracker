//*entry point  for the backend
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

//data source
const tickets = require('./data/tickets')

const app = express();


//*Routes
app.get('/', (req, res) => {
    res.send ("Api is running, arde papi")
})

//all the tikets (CRUD)
app.get('/api/tickets', (req, res) => {
    res.json(tickets)
})
//tikets by id
app.get('/api/tickets/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = tickets.filter(r => r.id === id)[0];

  if (result) res.send(result);
  else res.sendStatus(404);
})


app.post('/tickets', function(req, res) {
    const item = req.body;
  
    item.id = genTicketID();
    item.status = 'BACKLOG';
    item.createdAt = +new Date();
  
    tickets.push(item);
  
    res.send(item);
  });

  app.put('/tickets/:id', function (req, res) {
    const id = parseInt(req.params.id, 10);
    const existingItem = tickets.filter(r => r.id === id)[0];
  
    _.extend(existingItem, req.body);
    res.send(existingItem);
  });

  app.delete('/tickets/:id', function (req, res) {
    const id = parseInt(req.params.id, 10);
    const existingItem = tickets.filter(r => r.id === id)[0];
  
    _.remove(tickets, existingItem);
    res.sendStatus(200);
  });




//*setup server
const PORT = 5000;
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
