import React, {useState} from 'react';

function App() {

  const [number, setNumber]  = useState(0);

  // const plus = () =>{
  //   setNumber(number+1);
  // }

  // const minus = () =>{
  //   setNumber(number-1);
  // }

  //콜백함수 /함수형 업데이트
  const plus =() =>{
    setNumber(x=>x+1);
  }

  const minus =() =>{
    setNumber(x=>x-1);
  }
  return (
    <view>
      <h4>Hello</h4>
      <h4>값: {number}</h4>
      <div>
        <button onClick= {plus}>plus</button>
        <button onClick={minus}>minus</button>
      </div>
    </view>
  );
}

export default App;
