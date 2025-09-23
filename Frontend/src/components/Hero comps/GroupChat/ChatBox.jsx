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
   {props.clickedchatId === -1 ? 
   <div style={{paddingTop:"10vh"}} > welcome to Safe Chat <br/> select the chat to get started </div> :
    <RightComponent>
      <ChatHeader email={props.email} clickedchatId={props.clickedchatId}  />
      <Messages  email={props.email}  clickedchatId={props.clickedchatId}  />
    </RightComponent>
    
   }
    </div>
  );
};

export default ChatBox;
