import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Jacob', age: 10},
            {name: 'Anglea', age: 10}
        ],
        otherState: 'some other stuff'
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 20},
                {name: 'Jacob', age: 20},
                {name: 'Angela', age: 20}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Foo', age: 20},
                {name: event.target, age: 20}
            ]
        })
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>My React</h1>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'jacob lee')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Poo')}
                    changed={this.nameChangeHandler}
                >My Job: Developer</Person>
            </div>
        )
    }

}

export default App;
