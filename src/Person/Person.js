import React from 'react';
import classes from './Person.css';
import styled from 'styled-components';

const person = (props) => {
    const random = Math.random();

    if(random < 0.7) {
        throw new Error('Wrong happened');
    }

    return (
            <div className={ classes.Person }>
                <p onClick= {props.click}>I'm { props.name }!! and i am { props.age } years old</p>
                <p> { props.children}</p>
                <input type="text" onChange={props.changed} value ={ props.name}></input>
            </div>
            // <StyledDiv>
                
            // </StyledDiv>
        )
    }

export default person;