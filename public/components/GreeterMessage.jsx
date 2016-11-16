var React = require('react');

var GreeterMessage = React.createClass({
  render(){
    var {name, message} = this.props;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
