import React from 'react'
import Person from './Person';

function NameList() {
    const persons= [
        {
            id: 1,
            name: 'Hogan',
            age: 71,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Austin',
            age: 60,
            skill: 'Angular'
        }, 
        {
            id: 3,
            name: 'Rock',
            age: 52,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person} />)
    return (<div>{personList}</div>)
}

export default NameList