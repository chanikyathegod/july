const express = require('express')
const app = express()
const port = 3000

//dadtabasze import

var dbconnection = require('./db')


   const productroute = require('./routes/productRoute');



app.use('./api/products/',productroute);




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))