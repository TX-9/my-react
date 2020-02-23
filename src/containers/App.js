import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';

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
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deleteNameHandler}
                        changed={this.nameChangeHandler}
                    ></Persons>
                </div>
            );
            btnClass = classes.Red;
        }
        const assignedClasses = [];
        if (this.state.persons.length <=2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <=1) {
            assignedClasses.push(classes.bold);
        }
        return (
                <div className={classes.App}>
                    <h1>My React</h1>
                    <p className={assignedClasses.join(' ')}>css test</p>
                    <button className={btnClass}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>

        )
    }

}

export default App;
