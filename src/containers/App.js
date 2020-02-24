import React, {Component} from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js-------');

    }

    state = {
        persons: [
            {id: 'a', name: 'Poo', age: 10},
            {id: 'b', name: 'Jacob', age: 10},
            {id: 'c', name: 'Anglea', age: 10}
        ],
        otherState: 'some other stuff',
        showPersons: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('App.js-getDerivedStateFromProps');
    }

    componentDidMount() {
        console.log('App.js-componentDidMount');
    }

    // performance optimization
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('App.js-componentDidUpdate');
        return true; //re-render every time
    }

    componentDidUpdate() {
        console.log('App.js-componentDidUpdate');
    }

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
        console.log('App.js-render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deleteNameHandler}
                        changed={this.nameChangeHandler}
                    />
        }

        return (
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
                </div>
        );
    }

}

export default App;
