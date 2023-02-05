
import { useState } from 'react';
import './App.css';

function ButtonClick(ID, Password){
  //alert(`당신이 입력한 ID는 ${ID}, 비밀번호는 ${Password}입니다.`)
}

function App() {

  const [ID, setID] = useState('')
  //[state, setState] 이 두가지를 가지고 있는 배열을 리턴하므로 구조분해 할당한다
  const [Password, setPassword] = useState('');
  
  //ID 필드가 변경될 경우 호출, 이것은 데이터 불변성을 지켜주기 위한 조치.
  const onIdChangeHandler = (event) => {
    setID(event.target.value)
  }
  //PS 필드가 변경될 경우 호출
  const onPSChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  return (<>
  <div >
    {ID}
    <br/>
    아이디 : <input type="text"
    value={ID}
    onChange = {onIdChangeHandler}
    />
    <br/>
    비밀번호 : <input type="password"
    value={Password}
    onChange = {onPSChangeHandler}
    />
    <br/>
    <button onClick={() => {
      alert(`고객님이 입력하신 아이디는 ${ID}, 비번은 ${Password}입니다.`)
      setID('')
      setPassword('')
    }}>로그인</button>
  </div>

  </>);
}

export default App;
