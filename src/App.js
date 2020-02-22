import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'a', name: 'Poo', age: 10},
            {id: 'b', name: 'Jacob', age: 10},
            {id: 'c', name: 'Anglea', age: 10}
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

    nameChangeHandler = (event, id) => {
        const personIdx = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIdx]
        };
        //const person = Object.assign({}, this.state.persons[personIdx]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIdx] = person;

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightblue',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((p, idx) => {
                            return <Person
                                click={() => this.deleteNameHandler(idx)}
                                name={p.name}
                                age={p.age}
                                key={p.id}
                                changed={(event) => this.nameChangeHandler(event, p.id)}
                            />
                        })
                    }
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            };
        }
        const classes = [];
        if (this.state.persons.length <=2) {
            classes.push('blue');
        }
        if (this.state.persons.length <=1) {
            classes.push('bold');
        }
        return (
                <div className="App">
                    <h1>My React</h1>
                    <p className={classes.join(' ')}>css test</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>

        )
    }

}

export default App;
