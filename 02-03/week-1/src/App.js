// ./는 상대경로
//import logo from 'logo.svg';
import 'App.css';
import Layout from 'Layout';

function Child(props) {
  console.log(granName)//굳이 props로 안하고 다른 말로 해도 되더라
  return (<>
    <div>
      <p>나는 {name.FatherName}의 자식입니다.</p>
      <p>나는 {granName}의 손자입니다.</p>
      <p>리턴에 빈 태그를 넣으면 여러 내용물을 넣을 수 있습니다.</p>
    </div>
  </>
  )
}
function Father(props) {
  const father = {
    granName : props,
    name : 'ttttt',
    age : '245'
  };
  const {granName, name, age} = father;
  //props로 Child에 name 전달이 안된다?
  return (<>
  <Child father/>
  </>)
}
function GrandFather() {
  const grandName = 'ggggggggg'
  //return <Father>grandName</Father>;//props로 Father에 단순한 값 전달, 이게 칠드런 프롭스
  return <Father grandfaName = {grandName} />
}


function App() {

  const pTagStyle = {
    color: "gold",
    background: "black"
  }
  let a = 7
  return (<>
    <Layout>
      <div style={pTagStyle}>dagggggggahsfhhhsfhss</div>
    </Layout>

    <div className="App">
      <input type='text' />
    </div>
    <p style={pTagStyle}>
      와우 {a + 542 > 10 ? '와우!' + (a + 542) : '와우?'} ! 여기다 맵 함수 <br />도 넣을 수 있대!
      </p>
    <GrandFather />;
  </>)
}
/* 여기가 우리의 플레이 그라운드가 될 것이다.*/
/*function App() {
  //리턴 전에 자바스크립트를 작성할 수 있는 공간이다
  
  // <---- 자바스크립트 영역 ---->
  //화살표 함수로 변수화
  const AnswerToClick = () =>{
    alert('와우! 클릭!')
  }

  return (
    /* <---- HTML/JSX 영역  ---->* /
      <div
      //이게 통으로 객체다. jsx 안에서는 tag에 스타일을 부여하기 위해선 키 밸류로 엮인 값을 자바스크립트로 써줘야한다.
        style={{
          height: '100vh',
          display: ' flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
     {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요}* /
     <span>이것은 내가 만든 App컴포넌트입니다</span>
     <button onClick={AnswerToClick}> 클릭!</button>
      </div>
  );
}*/
export default App;
