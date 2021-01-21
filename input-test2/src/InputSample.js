import React, {useState, useRef} from 'react';

function InputSample(){

    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });

    const nameInput = useRef();
    const {name, nickName} = inputs;

    const onChange =e =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const reset =() =>{
        setInputs ({
            name: '',
            nickName: ''
        });
        nameInput.current.focus();
    }

    return(
        <view>
            <div>
                <input placeholder = 'name' name='name' value ={name} onChange ={onChange} ref ={nameInput} /><br/>
                <input placeholder = 'nickname' name='nickName' value ={nickName} onChange ={onChange} /><br/>
                <button onClick ={reset}>초기화</button>
            </div>
            <div>
                값: {name} ({nickName})
            </div>


        </view>
    );
}

export default InputSample;