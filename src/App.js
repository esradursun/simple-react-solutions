import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName:'Change Me'
  }

  userNameChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }


  render() {
    return (
    <div className="App">
      <h1>Hi, This is my First React App</h1>
      <UserInput 
        changed={this.userNameChangeHandler}
        currentName={this.state.userName}/>
      <UserOutput userName={this.state.userName}/>
    </div>
  );
  }

}

export default App;
