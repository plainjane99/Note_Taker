// ========================== dependencies start here ==================================================== //
const express = require('express');
const path = require('path');

// To instantiate the server, i.e. start express
const app = express();

// tell the app to use PORT # used by express if it has been set
// otherwise default to port 3001
const PORT = process.env.PORT || 3001;

// takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// use files from these directories
const htmlRoutes = require('./routes/htmlRoutes');

// ========================== dependencies end here ==================================================== //

// make certain files readily available and to not gate it behind a server endpoint
// this makes all of the files in the public directory available
// files in public include all html, css, js for front end
app.use(express.static('public'));

// uses modularized html routes
app.use('/', htmlRoutes);

// ========================== routes start here ========================== //

// route that returns 'notes.html'
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });
  
// ========================== routes end here ========================== //

// app listening
// this creates a server that listens on designated port
// when port gets accessed, it responds back
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});