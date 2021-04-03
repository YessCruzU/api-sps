const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes/api')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://db_sps:s3gur1d4d!@clusteryess.kq01m.mongodb.net/db_sps?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});
/*mongoose.connect('mongodb+srv://db_sps:s3gur1d4d!@clusteryess.kq01m.mongodb.net/db_sps?retryWrites=true&w=majority');
mongoose.connection.once('open',function(){
    console.log('conection has been made');
}).on('error',function(error){
    console.log('error is:', error);
});*/

//data parsing
app.use(express.json());
//app.use(express.urlencode({extended:false}));

//HTTP requet looger
app.use(morgan('tiny'));
app.use('/servicio/api-notes-app',routes);

app.listen(PORT, console.log(PORT));






