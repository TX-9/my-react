import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Poo', age: 10},
            {name: 'Jacob', age: 10},
            {name: 'Anglea', age: 10}
        ],
        otherState: 'some other stuff',
        showPersons: false
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
                {name: event.target, age: 20},
                {name: 'Angela', age: 20}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
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
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {
                    this.state.showPersons ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}
                            />
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Foo')}
                                changed={this.nameChangeHandler}
                            >My Job: Developer</Person>
                            <Person
                                name={this.state.persons[2].name}
                                age={this.state.persons[2].age}
                                click={this.switchNameHandler}
                            />
                        </div> : null
                }


            </div>
        )
    }

}

export default App;
