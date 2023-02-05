import React from 'react';
import './App.css';
import Child from './Child';


function App() {
const objtest = {
  name: 'asdasddas',
  age: 2525,
  isman: false
}
const { name, age, isman} = objtest;//구조분해 할당이 어떻게 되는것이냐면

  return <Child name = {name} age={age} isman = {isman}></Child>;
}

export default App;
