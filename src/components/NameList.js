import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Hogan', 'Austin', 'Rock', 'Cena']
    const persons= []
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (<div>{nameList}</div>)
}

export default NameList
