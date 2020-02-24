import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
    //executed every render cycle
    useEffect(() => {
        console.log('Cockpit.js useEffect');
        return () => {
            console.log('Cockpit.js useEffect cleanup')
        }
    }, [props.persons]); // only when changed to persons
    // [] no dependency

    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect');
        return () => {
            console.log('Cockpit.js useEffect cleanup')
        }
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>My React</h1>
            <p className={assignedClasses.join(' ')}>css test</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;