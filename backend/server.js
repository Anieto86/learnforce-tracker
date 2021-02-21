//*entry point  for the backend
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import _ from 'lodash'; 
import cors from 'cors';

//import connectDB from "./config/db.js";


dotenv.config();

//connectDB()

//data source
import tickets from './data/tickets.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ticket crud

function genTicketID() {
  return Math.floor(Math.random() * 10000)
}

//*Routes
app.get('/', (req, res) => {
    res.send ("Api is running")
})

//(CRUD)
app.get('/api/tickets', (req, res) => {
  console.log('tickets retrieved')
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
  console.log('update clicked')
    const id = parseInt(req.params.id, 10);
    const existingItem = tickets.filter(r => r.id === id)[0];
    _.extend(existingItem, req.body);
    res.send(existingItem);
  });

  app.delete('/tickets/:id', function (req, res) {
    console.log('delete clicked')
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
