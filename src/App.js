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

    deleteNameHandler = (personIdx) => {
       // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIdx, 1);
        this.setState({persons: persons});
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
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((p, idx) => {
                            return <Person click={() => this.deleteNameHandler(idx)} name={p.name} age={p.age}/>
                        })
                    }
                </div>
            )
        }
        return (
            <div className="App">
                <h1>My React</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    }

}

export default App;
