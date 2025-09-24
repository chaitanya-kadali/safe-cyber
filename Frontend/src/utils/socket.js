import io from 'socket.io-client';
import { socketURL } from './forall';

const socket = io.connect(socketURL);

console.log("entry data of this file");

// let userEmail="not loaded";

export function emitChat(msgMetaData, socket_id){
    /*
     msgMetaData {  
        chat_id :
        chat_name:
        sentemail:  
        mdata
        }
    */

    const actual_metaMsg_obj = {
      chat_id: msgMetaData.chat_id,
      chat_name: msgMetaData.chat_name,
      sentemail: msgMetaData.sentemail,
      sentname: "socket cant tell this",
      time: "2025-09-24 00:00:00", // this random time as socket is being used.. will put time later
      mdata: msgMetaData.mdata
    };
    console.log("socket emit : actual obj ", actual_metaMsg_obj);
    
    socket.emit(`${socket_id}`, actual_metaMsg_obj);
    /* 
   msgMetaData = mongoose.Schema({  chat_id: Number,
      chat_name: String,  sentemail: String,
      sentname: String, time: String,  mdata: String,
    });
    */
}

export function listenChat(setMsgs, msgs, socket_id){
    console.log("msgs ", msgs);
    console.log("msgs length ", msgs.length);
    
    socket.on(`${socket_id}`, (payload)=>{
        setMsgs([...msgs,payload])
    })
}



// socket.on("disconnect", (reason) => {
//   console.log("Socket disconnected!", reason);
//   emitChat(userNamest, "I left the chat"  );
// });