process.env.NODE_ENV = 'test';

//Register babel so that it will transpile ES6 to ES5 before tests run
require('babel-register')();

//Disable webpack-specific eatures for tests since
//Mocha doesn't know what to do with them/

require.extensions['.css'] = function() {return null;};
require.extensions['.png'] = function() {return null;};
require.extensions['.jpg'] = function() {return null;};

//Configure JSDOM and set global variable
//to simulate a browser environment for tests
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) =>{
  if(typeof global[property] === 'undefined'){
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};