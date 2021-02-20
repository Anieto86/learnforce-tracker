//*entry point  for the backend
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import _ from 'lodash'; 
import cors from 'cors';

//import connectDB from "./config/db.js";


dotenv.config();

connectDB()

//data source
import tickets from './data/tickets.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());



//*Routes
app.get('/', (req, res) => {
    res.send ("Api is running, arde papi")
})

//(CRUD)
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
const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
