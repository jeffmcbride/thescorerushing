const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const rushingStats = require('./rushing');



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 1

app.get('/rushing', (req, res) => { //Line 9
  res.send({rushingStats}); //Line 10
}); //Line 1const rushingStats = require('./rushing');
