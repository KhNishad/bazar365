import React , {useState, useEffect} from 'react';

function App() {
    
    const [seconds, setSeconds] = useState(99);
    const [msg, setmsg] = useState('');
  
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setmsg('SEND AGAIN');
      }
    });
  
    return (
      <div className="App" style={{display:'inline'}}>
           <button type="button" className="btn btn-secondary btn-lg" style={{fontSize:"17px"}}> 
           {seconds?
           <span ng-show="isResend" className="ng-binding ng-hide">Request PIN Again({seconds})</span>:
           <span ng-show="!isResend">{msg}</span>
           }
              
            
        </button>
        
        </div>
    
    );
  }
  export default App