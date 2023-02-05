
import { useState } from 'react';
import './App.css';

function App() {

  const pTagStyle = {
    dispay: "flex",
  }
  function count(Num, num){
    return setNum(Num + num)
  }

  const [Num, setNum] = useState(0); 

  return (<>
    <div className="App" style={pTagStyle}>
      <b>{Num}</b>
      <br />
      <button onClick={() => count(Num, 1)}>+ 1</button>
      <button onClick={() => count(Num, -1)}>- 1</button>
    </div>
  </>);
}

export default App;
