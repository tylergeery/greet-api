'use strict';

/*
 * Express Dependencies
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    port = 3000;

/*
 * App Configurations
 */
 app.use(bodyParser({limit: '50mb'}));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the defaults for API
} else {
    process.env['MONGO_URL'] = 'mongodb://localhost/greet';
}

// Connect to Mongoose
mongoose.connect(process.env.MONGO_URL);

// Need route declarations instantiated here because they are dependent on above if/else
var userRouter = require('./routes/user'),
    groupRouter = require('./routes/group');


/*
 * Post Routes
 */
app.use('/user', userRouter);
app.use('/group', groupRouter);

/* Testing Route */
app.get('/hello/:name', function(req, res) {
  res.send('Hello ' + req.params.name);
});

/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);