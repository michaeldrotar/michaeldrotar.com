/* eslint-env node */
import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';
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
  res.json({
    message: `success! ${process.env.NODE_ENV}/${process.env.BLAH}`
  });
});

if (process.env.NODE_ENV === 'production') {
  console.log('__dirname: ' + __dirname); // eslint-disable-line no-console
  console.log('path: ' + path.join(__dirname, 'dist')); // eslint-disable-line no-console
  // create middleware to handle the serving the app
  app.use('/', serveStatic(path.join(__dirname, 'dist')));
  // Catch all routes and redirect to the index file
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

// Create default port to serve the app on
const port = process.env.PORT || 8081;
app.listen(port);
// Log to feedback that this is actually running
console.log('Server started on port ' + port); // eslint-disable-line no-console
