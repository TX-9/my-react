import React, {Component} from "react";
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person.js rending..');
        return (
            <div className={classes.Person}>
                <p onClick={this.click}> I'm {this.name} and {this.age} years old</p>
                <p>{this.children}</p>
                <input type="text" onChange={this.changed} value={this.name}/>
            </div>
        );
    }

}

export default Person;
