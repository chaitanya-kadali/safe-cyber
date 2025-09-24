import { useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import axios from "axios";

//components
import Message from "./Message";
import Footer from "./Footer";
import { backURL, getConversationMessage } from "../../../utils/forall";
import { emitChat, listenChat } from "../../../utils/socket";


// {
const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledFooter = styled(Box)`
  height: 55px;
  background: #ededed;
  // position: absolute;
  width: 100%;
  // bottom: 0
`;

const Component = styled(Box)`
  height: 50vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

// }

const Messages = ({email, clickedMetaChat}) => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState(null);
  const [allMsgsofChat, setallMsgsofChat] = useState([]);

  const scrollRef = useRef();

  //   const { account, socket, newMessageFlag, setNewMessageFlag } =
  //     useContext(AccountContext);

  //   useEffect(() => {
  //     socket.current.on("getMessage", (data) => {
  //       setIncomingMessage({
  //         ...data,
  //         createdAt: Date.now(),
  //       });
  //     });
  //   }, []);

    useEffect(() => {
      scrollRef.current?.scrollIntoView({ transition: "smooth" });
    }, [clickedMetaChat , allMsgsofChat]);

    

useEffect(() => {
   getConversationMessage(clickedMetaChat.chat_id,setallMsgsofChat);
}, [clickedMetaChat]); // we can add sockets here

useEffect( ()=>{
    listenChat(setallMsgsofChat,allMsgsofChat,clickedMetaChat.chat_id);
})

const censorText =async(text)=>{
  try{
      const response = await fetch(`${backURL}/api/contsensor-text`,
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        tdata: text,
                                      }),
                                    }
                                  );
      const data = await response.json();
      if(data.success){
        return data.sdata;
      }else{
        console.log("failure at content censorr !, but retruned data");
        return data.sdata;
      }
  } catch(e) {
       console.log("error : ->  ",e);
       return text;
    }
}
const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;

    let text=value;
    try{
      console.log("doing censor ");
      text = await censorText(text);
    }catch(e){
      console.log("at sendtext failed to censor it: ",e);
    }
    if (code === 13) {
            let message = {};
            if (!file) {
              message= {  
                    chat_id :clickedMetaChat.chat_id ,
                    chat_name:clickedMetaChat.chat_name,
                    sentemail: email,  
                    mdata:text
                  }
            } else {
                message = {
                    text: image,
                    chat_id :clickedMetaChat ,
                    chat_name:clickedMetaChat.chat_name,
                    sentemail: email,   
                    mdata:value
                };
            }
            // socket.current.emit("sendMessage", message);
        const postMsg = async() => {
                try{
                    await axios.post(`${backURL}/api/pushmsg`,message).then(res=>{
                        if(res.data.success){
                        console.log("successfully pushed/uploaded the msg");
                        }else{
                          alert("Error : to push msg  ");
                        }
                          })
                    // reload
                    // STOPPING this getmsgs() so that we COMPLETELY BASE on sockets..
                    //  until you go to some one else chat and come back to this chat to FORCE reload from db
                        // await getConversationMessage(clickedMetaChat.chat_id, setallMsgsofChat);      
                  }catch(error){
                      console.log('Error sending registration request',error);
                  }
          }

          console.log("below ref");
      emitChat(message,clickedMetaChat.chat_id); // call socket before posting msg to db.. to INCREASE speed
      postMsg();
      setValue("");
      setFile();
      setImage("");
    }
  };

  return (
    <Wrapper>
      <Component>
        {allMsgsofChat &&
          allMsgsofChat.map((message,index) => (
            <Container ref={scrollRef} key={index}>
              <Message message={message} email={email} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        value={value}
        setValue={setValue}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
