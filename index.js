const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://db_sps:s3gur1d4d!@clusteryess.kq01m.mongodb.net/db_sps?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(
        'conected mongo'
    );
});


//data parsing
app.use(express.json());
app.use(function(req, res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-TypeError,Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})


//HTTP request looger
app.use(morgan('tiny'));
app.use('/servicio/api-notes-app',routes);

app.listen(PORT, console.log(PORT));






