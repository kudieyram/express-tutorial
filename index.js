// modules

require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoute = require ('./src/routes/userRoute')

const app = express();


// // variables
const dbLink = process.env.DBLINK;
const port = process.env.PORT;


// database connection
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () =>{
        app.listen(port, () =>{
                console.info('DATABASE CONNECTED, SERVER IS UP')
        })
})

//middleware
app.use(express.json());

// routes
app.use(userRoute);

app.get('/', ( request, response) =>{
        response.status(200).send('Good Day')
})

