
const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
var app = require('express')();
var http = require('http').Server(app);

const dotevt = require("dotenv");
dotevt.config();

// Init Middleware
app.use(express.json());
app.use(cors({origin: '*'}));
app.use(fileUpload());
app.use(express.static('public'));
app.use('/api/users/', require('./routes/api/users'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

http.listen(5000, function(){
  console.log('listening on *:5000');
});


