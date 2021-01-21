import React, {useState} from 'react';




function App(){


  const [checkTime, setCheckTime] = useState(0);

  // const pushTime = () =>{
  //   setCheckTime(prevTime => prevTime+1);
  // }

  // const pushTime =() =>{
  //   setCheckTime(checkTime+1);
  // }

  // const pushTime =()=> {
  //   let cTime = checkTime;
  //   setInterval(()=>{
  //     console.log(cTime);
  //     setCheckTime(cTime++)
  //   }, 1000);
  // }
  let cTime = checkTime;
  const pushTime = () =>{
    let startTime = setInterval(()=>{
      if(cTime>10){
        clearInterval(startTime);
      }else{
        cTime++;
        setCheckTime(cTime);
      }
    }, 1000)

    setCheckTime();

  }

  return(
    <div>
      <h4>Hello World!</h4>

      <h4>시간 : {checkTime}</h4>

      <button onClick = {pushTime} >시작</button> 
    </div>
  );

}



export default App;