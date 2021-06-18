
const mongoose = require('mongoose');

var  MongoDbUrl = 'mongodb+srv://chanikya:chanikya123@cluster0.l5782.mongodb.net/laundryproducts'

mongoose.connect(MongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true});


var dbconnect  = mongoose.connection


dbconnect.on('error',()=>{console.log('errorconnection')})

dbconnect.on('connected',()=>{console.log('conencted')})


module.exports = mongoose;