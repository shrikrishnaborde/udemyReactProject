import './App.css';
import React, { Component } from 'react';
import Person  from './Person/Person';
import styled from 'styled-components';

class App extends Component {
  state = {
    persons : [
      { id : 0, name : 'Max', age : 28},
      { id : 1, name : 'Max1', age : 29},
      { id : 2, name : 'Max2', age : 26},
    ],
    showPersons : false
  };

  switchNameHandler = (newName) => {
    // console.log('Hi');
    this.setState({
      persons : [
        { name : 'Max', age : 28},
        { name : 'Max1', age : 39},
        { name : newName, age : 26},
      ] 
    });
  }

  nameChangeHandler = (event, id) => {
    // console.log('Hi');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons : persons
    });
  }

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons : !doesShowPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);
    this.setState({
      persons :persons
    });
  }

  render() {

    // const style = {
    //   backgroundColor : 'green',
    //   color : 'white',
    //   ':hover' : {
    //     backgroundColor : 'lightgreen',
    //     color : 'black'
    //   }
    // }

    

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            {
              this.state.persons.map((person,index) => {
                return <Person 
                  click = { () => this.deletePersonHandler(index) }
                  name = { person.name }
                  age = { person.age }
                  key = { person.id }
                  changed = { (event) => this.nameChangeHandler(event, person.id)}
                />
              })
            }
          </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'lightred',
      //   color: 'black'
      // }
    }

    let classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    const StyledButton = styled.button`
      background-color : ${ props => props.all ? 'red' : 'green'};
      color : white;
      &:hover  {
        background-color : ${ props => props.all ? 'salmon' : 'lightgreen'};
        color : black;
      }
    `;

    return (
        <div className="App">
          <h1>H!, I am a React App</h1>
          <p className={classes.join(' ')}> This is really working!!!</p>
          <StyledButton all= { this.state.showPersons } onClick={ this.togglePersonsHandler}>Switch Name</StyledButton>
          { persons }  
        </div>
    );
  }
}

export default App;
