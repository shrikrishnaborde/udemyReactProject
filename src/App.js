import classes from './App.css';
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

    
    let buttonClass = [];
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
      buttonClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    // const StyledButton = styled.button`
    //   background-color : ${ props => props.all ? 'red' : 'green'};
    //   color : white;
    //   &:hover  {
    //     background-color : ${ props => props.all ? 'salmon' : 'lightgreen'};
    //     color : black;
    //   }
    // `;

    return (
        <div className={classes.App}>
          <h1>H!, I am a React App</h1>
          <p className={assignedClasses.join(' ')}> This is really working!!!</p>
          <button className={ buttonClass } onClick={ this.togglePersonsHandler}>Switch Name</button>
          { persons }  
        </div>
    );
  }
}

export default App;
