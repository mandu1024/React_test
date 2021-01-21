import React, {useState} from 'react';

function App() {

  const [inputName, setInputName] = useState('');
  const [inputNickName, setInputNickName] = useState('');

  const iName = (e) => {
    setInputName(e.target.value);
  }
  const iNickName = (e) => {
    setInputNickName(e.target.value);
  }
  return (
    <view>
      <div>
        <input placeholder = '이름' onChange = {iName}/> 
        <input placeholder = '별명' onChange = {iNickName}/> 
      </div>
      <div>
        값: {inputName}({inputNickName})
      </div>
    </view>
  );
}

export default App;
