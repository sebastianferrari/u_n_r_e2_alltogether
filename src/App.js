import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageSender from './MessageSender';
import MessagesWindow from './MessagesWindow'

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = (msg) => {
    this.setState(prevState => ({
      messages: [ ...prevState.messages, msg ]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <MessagesWindow
              messages={this.state.messages}
              senderUser={users[0].username} />

            <div>
              <MessageSender
                addMessage={this.addMessage}
                senderUser={users[0].username} />
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <MessagesWindow
              messages={this.state.messages}
              senderUser={users[1].username} />

            <div>
              <MessageSender
                addMessage={this.addMessage}
                senderUser={users[1].username} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
