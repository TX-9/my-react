import React from "react";
import Person from "./Person/Person";
const persons = (props) => {
    console.log('Person.js-persons');

    props.persons.map((p, idx) => {

        return <Person
            click={() => props.clicked(idx)}
            name={p.name}
            age={p.age}
            key={p.id}
            changed={(event) => props.changed(event, p.id)}
        />
    });
}

export default persons;