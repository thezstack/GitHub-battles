var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');
var App = require ('./components/app.js')


ReactDom.render (
  <App />, document.getElementById('app')
)
