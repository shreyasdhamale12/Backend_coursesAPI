const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const server = require('./db/server');



const app = express();
app.use(express.json());

const courseRoutes = require('./routes/courses');
const instanceRoutes = require('./routes/instance');

app.use('/api/courses', courseRoutes);
app.use('/api/instance', instanceRoutes);

const port = process.env.PORT || 5000;

server().then(() =>{
    app.listen(port, () =>{
        console.log("Connected to server");
    });
}).catch(err => {
    console.error("Failed to connect to server", err);
})
