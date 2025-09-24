// import { useContext } from 'react';
import { Dialog, styled, Box } from '@mui/material';
import { useState } from 'react';

// import { UserContext } from '../../context/UserProvider';

//components
import Menu from './Menu/Menu'
import ChatBox from './ChatBox';
// import EmptyChat from './EmptyChat';

const Component = styled(Box)`
    height : "100%";
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 350px;
`;
    
const RightComponent = styled(Box)`
    width: 80%;
    min-width: 300px;
    border-left: 1px solid rgba(0, 0, 0, 0.39);
     overflow-y: scroll;
    height:100%;
`;

const ChatDialog = (props) => {

    // const { person } = useContext(UserContext);
    const [clickedMetaChat, setclickedMetaChat] = useState({
                                        chat_id: -1,
                                        chat_name: "Not selected",
                                        participants : ["no participants"] // Array of participant emails
                                        });
    return (
       
            <Component>
                <LeftComponent>
                    <Menu email={props.email} setclickedMetaChat ={setclickedMetaChat} />
                </LeftComponent>
                <RightComponent>
                    
                     <ChatBox email={props.email} clickedMetaChat={clickedMetaChat} />
                    
                </RightComponent>
            </Component>
      
    )
}

export default ChatDialog;