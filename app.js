const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Demo Express App</h1> <h4>Message: Failure</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      EmployeeName: 'Manu',
      Salary: 12223
    },
    {
      EmployeeName: 'Srinivasa',
      Salary: 123400
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
