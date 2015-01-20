/** @jsx React.DOM */

var React = require('react');
var Tweets = require('./Tweets.react.js');

// Export the TweetsApp component
module.exports = TweetsApp = React.createClass({

  // Render the component
  render: function(){

    return (
      <div className="tweets-app">
        <Tweets tweets={this.state.tweets} />
      </div>
    )

  }

});