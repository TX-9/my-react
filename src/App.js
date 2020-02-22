import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Jacob', age:10},
        { name: 'Anglea', age:10}
    ]
  };

  render() {
    return (
        <div className="App">
          <h1>My React</h1>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}/>
        </div>
    )
  }

}

export default App;
