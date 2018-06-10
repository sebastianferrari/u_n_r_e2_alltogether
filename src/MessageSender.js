import React, { Component } from 'react';

class MessageSender extends Component {
  state = {
    message: ''
  }

  onMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  onMessageSend = (e) => {
    e.preventDefault();
    this.props.addMessage({
      username: this.props.senderUser,
      text: this.state.message
    });
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onMessageSend}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={this.state.message}
          onChange={this.onMessageChange} />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={(this.state.message === '')}>
            SEND
          </button>
        </div>
      </form>
    )
  }
}

export default MessageSender;