
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  

  // const [count,setCount]= useState(0);
  // let val= useRef(0);

  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log("Value of Val: ", val.current);
  //   setCount(count +1);
  // }


  //it runs on every render
  // useEffect(() => {
  //   console.log("mai firse render hua hu")
  // }, )

  // function ChangeColor(){
  //  btnRef.current.style.backgroundColor = "Blue";
  // }
  

   const [time, setTime]= useState(0);
     
   let timerRef= useRef(null);
   

    function startTimer(){
      
   timerRef.current= setInterval(()=>{
      setTime(time =>time +1)
   }, 1000);
   }

   function stopTimer(){
    
   clearInterval(timerRef.current);
     timerRef.current= null;
   }

   function resetTimer(){
    alert("Time is Reset ! " );
      stopTimer();
      setTime(0);
   }


  return (
    <div>
 
     <h1>StopWatch: {time} Seconds</h1>      
  <button onClick={startTimer}>
    Start
  </button>
  <br/> <br/>

   <button onClick={stopTimer}>
    Stop
   </button>
   <br/> <br/>

    <button onClick={resetTimer}>
      Reset
    </button>
      {/* <button ref={btnRef} 
      onClick={handleIncrement}>
      Increment
      </button>
      <br/>
       <br/>
       <button  onClick={ChangeColor}>Change Color of 1st Button</button>  
       <br/>
<br/>
      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
