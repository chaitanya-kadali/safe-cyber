import axios from "axios";

export const backURL = import.meta.env.VITE_BACK_URL;

export const socketURL = import.meta.env.VITE_SOCKET_URL;


export const getConversationMessage = async(cid,setallMsgsofChat) => {
      console.log("get convo is colled forALL.js ---------------------------");
   try{
       await axios.post(`${backURL}/api/getmsg`,{chat_id: cid}).then(res=>{
          if(res.data.success){
            setallMsgsofChat(res.data.msgs)
          }else{
              alert("Error : to retrieve getmsg");
          }
        })
      }
      catch(error){
          console.log('Error getting msgs ',error);
      }
}