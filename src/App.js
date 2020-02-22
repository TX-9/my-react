import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Jacob', age: 10},
            {name: 'Angela', age: 10}
        ],
        otherState: 'other state vale'
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Jacob', age: 20},
                {name: 'Angela', age: 20}
            ]
        })
    }
    
    return (
        <div className="App">
            <h1>Family</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name}/>
            <Person name={personsState.persons[1].name}/>
        </div>
    );
};

export default App;
