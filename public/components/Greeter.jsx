var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps(){
    return {
      name: 'React',
      message: 'This is the default message!!'
    };
  },
  getInitialState(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData(updates){
      this.setState(updates);
  },
  render: function(){
    var {name, message}  = this.state;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});


module.exports = Greeter;
