import React, { Component } from 'react'
import classes from './Person.css'

class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    Hi my name is {this.props.name} and I am {this.props.age} years old!
                </p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </div>
        )
    }
}

export default Person