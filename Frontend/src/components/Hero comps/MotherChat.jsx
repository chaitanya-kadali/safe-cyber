import React, {useState} from 'react';
import '../styles/GroupChat.css'
// import TotalChat from './GroupChat/TotalChat';
import ChatDialog from './GroupChat/ChatDailoge';
function MotherChat({email}) {
    let flag=true;
    if(email)
    {
      flag=false;
    }
    else{
      flag=true;
    }
    const handleClick = ()=>{
        window.location.href='/register';
      }
  return (
    <div style={{height:"80vh"}}>
    {flag && (
        <div className="login-prompt">
          <div className="login-box">
            <p>Please login to access this feature.</p>
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      )}
      {
        !flag && <>
        
        <ChatDialog email={email}/>
        </>
      }
      </div>
  )
}
export default MotherChat;
