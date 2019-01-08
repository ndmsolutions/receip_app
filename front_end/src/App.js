import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          items: [],
          isLoaded: false
      }
  }
  
  componentDidMount() {
      fetch('/api/all_recipes/')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  items: json
              })
          });
  }  
  
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
            <ul>
              {items.map(item => (
                <li key="{item.id}">
                  ID: {item.id} Name: {item.title} | Price: {item.price} | Price: {item.user.email}
                  {item.tags.map(tag => (
                    <li key="{tag.id}">
                      Tags: {tag.name}
                    </li>
                  ))}
                </li>
              ))}
            </ul>
        </header>
      </div>
    );
  }
}

export default App;
