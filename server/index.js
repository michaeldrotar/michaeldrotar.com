/* eslint-env node */
const express = require('express');
// create the express app
const app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/api', function(req, res) {
  res.json({ message: 'success!' });
});
// Create default port to serve the app on
const port = process.env.PORT || 8081;
app.listen(port);
// Log to feedback that this is actually running
console.log('Server started on port ' + port); // eslint-disable-line no-console
