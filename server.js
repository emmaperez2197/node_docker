require('./server/config/config')

const express = require("express");
const morgan = require('morgan')
const app = express();


var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app._morgan = (morgan('dev'));


app.use(require('./src/routes/routes'))

app.listen(process.env.PORT, ()=> console.log('server in runnig',  process.env.PORT));