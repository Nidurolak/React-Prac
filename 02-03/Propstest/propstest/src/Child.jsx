import React from 'react'

function Child({ name, age, isman}) {
    console.log(age);
    console.log(name);
    console.log(isman);
    
  return (<>
    <div>Child</div>
    <div>
        <p>{multiply(age, 1)}</p>
        <p>{name}</p>
        <p>{isman}</p>
    </div>
  </>)
}

function multiply(a, b = 3){
    return a * b;
}

Child.defaultProps={
    age : 11,
    name: '기본명',
    isman : false
}

export default Child