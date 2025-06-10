import {useEffect,useState} from "react";

function App() {
const [count,setCount] = useState(0)
const [isRunning, setIsRunning] = useState(false);

function increaseCount() {
  setCount(currentValue => currentValue + 1);
}

function reset() {
  setCount(0)
}


  useEffect(function()  {
    let intervalID;
    if(isRunning) {
      intervalID = setInterval(increaseCount, 1000)
    }

  return () => {
    clearInterval(intervalID)
  }
  },[isRunning])

  function start() {
    setIsRunning(true)
  }

  function pause() {
    setIsRunning(false)
  }

  return <div style={{display:"flex",justifyContent:"center"}}> 
  <div style={{marginTop:350, marginRight:600,fontSize:120,
      color:"#FAF9F6",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.7)",fontWeight:600,fontFamily:"VT323"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
    <div>{Math.floor(count/3600).toString().padStart(2,'0')}:</div>
    <div>{Math.floor(count/60).toString().padStart(2,'0')}:</div> 
    <div> {Math.floor(count % 60).toString().padStart(2,'0')}</div>
    </div>
    <button onClick={start} style={{borderRadius:8,marginLeft:28,fontSize:28,fontWeight:200,fontFamily:"sans-serif",
    alignItems:"center",paddingLeft:20,paddingRight:20,paddingTop:5,paddingBottom:5,backgroundColor:"#eda6c2"
    }}> Start </button>
    <button onClick={pause} style={{borderRadius:8,marginLeft:15,fontSize:28,fontWeight:200,fontFamily:"sans-serif",
    alignItems:"center",paddingLeft:20,paddingRight:20,paddingTop:5,paddingBottom:5,backgroundColor:"#eda6c2"
    }}> Pause</button>
    <button onClick={reset} style={{borderRadius:8,marginLeft:15,fontSize:28,fontWeight:200,fontFamily:"sans-serif",
    alignItems:"center",paddingLeft:20,paddingRight:20,paddingTop:5,paddingBottom:5,backgroundColor:"#eda6c2"
    }}> Reset</button>
    </div>
    </div>

 }

 export default App;



































































//Counter App
//  import {useState} from "react";

//  function App() {
//   const [count,setCount] = useState(0);

//    function increaseCount() {
//      setCount(count+1);
//    }
  
//    function decreaseCount() {
//      setCount((prev) => Math.max(prev-1,0))
//    }

//    function reset() {
//      setCount(0)
//    }
  
//    return <div>
//      <input type="text" value={count} />
//      <button onClick={increaseCount}>Increase count</button>
//      <button onClick={decreaseCount}>Decrese count</button>
//      <button onClick={reset}>Reset</button>
    
//    </div>
//  }

//  export default App;