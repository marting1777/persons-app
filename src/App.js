import React, { Component } from 'react'
import './App.css'

import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Martin', age: 26},
            {id: 2, name: 'Juan', age: 19},
            {id: 3, name: 'Catalina', age: 26}
        ],
        showPersons: false
    }

    switchNameHandler = () => {
        this.setState({persons: [
            {id: 1, name: 'Ricardo', age: 26},
            {id: 2, name: 'Felipe', age: 19},
            {id: 3, name: 'Pedro', age: 26}
        ]})
    }

    nameChangedHandler = (event) => {
        this.setState({persons: [
            {id: 1, name: 'Ricardo', age: 26},
            {id: 2, name: event.target.value, age: 19},
            {id: 3, name: 'Pedro', age: 26}
        ]})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }
    
    render() {
        const style = {
            backgroundColor: '#fff',
            font: 'inherit',
            border: '1px solid blue',
            padding: '10px 30px',
            cursor: 'pointer'
        }

        const persons = this.state.persons.map(person => {
            return <Person 
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={this.switchNameHandler}
                        changed={this.nameChangedHandler}/>
        })
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button style={{...style, textTransform: 'uppercase'}} onClick={this.togglePersonsHandler}>Switch Name</button>
                <div>
                    {persons}
                </div>
            </div>
        )
    }
}

export default App
