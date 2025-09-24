import {  useState, useEffect } from "react";
import { Box , styled} from "@mui/material";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { Height, Margin } from "@mui/icons-material";

const RightComponent = styled(Box)`
    min-width: 300px;
    height: 100%;
    // max-height: 40vh;
     overflow-y: scroll;
`;
const stylediv = {
   height: "68vh",
   margin : "10px"
}

const ChatBox = (props) => {
  const [conversation, setConversation] = useState({});
  return (
    <div style={stylediv}>  
   {props.clickedMetaChat.chat_id === -1 ? 
   <div style={{  backgroundColor:"rgba(194, 194, 194, 1)", display:"flex" ,alignItems:"center", justifyContent:"center" ,flexDirection:"column", height:"100%" }} > 
   <p style={{fontSize:"40px"}}> Welcome to Safe Chat  </p>
    <p style={{fontSize:"30px"}}> <br/> Select the chat to get started  </p> 
   
   </div> :
    <RightComponent>
      <ChatHeader email={props.email} clickedMetaChat={props.clickedMetaChat}  />
      <Messages  email={props.email}  clickedMetaChat={props.clickedMetaChat}  />
    </RightComponent>
    
   }
    </div>
  );
};

export default ChatBox;
