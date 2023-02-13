import React, { useState } from "react";
import './App.css';
import CustomButton from './components/CustomButton.jsx'
const vegetables = ["감자", "고구마", "오이", "가지", "옥수수", "옥수수"];




function ShowUser(props){
  return(
  <div className="squareStyle">
    {props.users.age}살 - {props.users.name}님
    <CustomButton background ={"#6D3802"} color = {"gold"}  onClick={() => props.handleDelete(props.users.id)}>삭제하기</CustomButton>
    </div>)}

const App = () => {
  const [users, setUsers] = useState([
      { id: 1, age: 30, name: '송중기' },
      { id: 2, age: 24, name: '송강' },
      { id: 3, age: 21, name: '김유정' },
      { id: 4, age: 29, name: '구교환' },
    ]);
    const[name, setName] = useState('')
    const[age, setAge] = useState('')

    const nameChangeHandler = (event) =>{
      setName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
      setAge(event.target.value);
    }

    const addUserHandler = () =>{
      const newUser = {
        id : users[users.length -1].id +1,
        age: age,
        name: name,
      }
      setUsers([...users, newUser])
    }
    const handleDelete = (id) =>{
      const newUser = users.filter((users) => users.id !== id)
      setUsers(newUser)
    }

  return (
    // arr.map(asd) => {return (함수 돌려어엉)}
    <>
      <div className="app-style">
        {vegetables.map((vegetables) => {
          return (
            <div className="squareStyle" key={vegetables}>
              {vegetables}
            </div>
          )
        })}
      </div>
      <div className="app-style">
        {vegetables.filter(function (vegetables) {
          return vegetables !== "감자"}).map((vegetables) => {
          return (
            <div className="squareStyle" key={vegetables}>
              {vegetables}
            </div>
          )
        })}
      </div>
    <div>
      <div className="app-style">
      <input value={name}
        placeholder="이름을 입력해주세요"
			// 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={nameChangeHandler} 
      />
			<input value={age}
        placeholder="나이를 입력해주세요"
			// 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={ageChangeHandler} 
      />
      <CustomButton background ={"black"} color = {"gold"} onClick={addUserHandler}>추가하기</CustomButton>
      </div>
      <p />
      <div className="app-style">
      {users.map((user) => {
        return <ShowUser key={user.id} users={user} handleDelete={handleDelete}/>;
      })}

      </div>
    </div>





    </>);
};

export default App;