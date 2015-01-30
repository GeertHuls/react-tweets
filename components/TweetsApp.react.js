/** @jsx React.DOM */

var React = require('react');
var Tweets = require('./Tweets.react.js');
var NotificationBar = require('./NotificationBar.react.js');

// Export the TweetsApp component
module.exports = TweetsApp = React.createClass({

// Set the initial component state
  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };

  },

  // Render the component
  render: function(){

    return (
      <div className="tweets-app">
        <Tweets tweets={this.state.tweets} />
        <NotificationBar count={this.state.count} />
      </div>
    )

  }

});