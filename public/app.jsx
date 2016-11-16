var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Flavio";

ReactDOM.render(
  <Greeter name={firstName} message="This is a custom message"/>,
  document.getElementById("app")
);
