import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { // pass compiled webpack config into express
  noInfo: true, //we don't want extra info displayed in the command line
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) { //tell express what files we want it to serve
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) { // set express to listen on port 3000
  if (err) {
    console.log(err); //log any errors
  } else {
    open(`http://localhost:${port}`); //otherwise open up our website
  }
});
