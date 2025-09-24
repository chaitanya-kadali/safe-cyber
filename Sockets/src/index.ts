import express from "express";

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server,{
    cors:{
        origin:"*",
    }
})

io.on("connection",(socket)=>{
    
    socket.on("1", (payload)=>{ // on = LISTEN from the other/ALL users
        // console.lgo("payload : ", payload);
        io.emit("1", payload)  // emit is to emit to ALL users     
    })

     socket.on("2", (payload)=>{ // on = LISTEN from the other/ALL users
        // console.lgo("payload : ", payload);
        io.emit("2", payload)  // emit is to emit to ALL users     
    })

     socket.on("3", (payload)=>{ // on = LISTEN from the other/ALL users
        // console.lgo("payload : ", payload);
        io.emit("3", payload)  // emit is to emit to ALL users     
    })

     socket.on("4", (payload)=>{ // on = LISTEN from the other/ALL users
        // console.lgo("payload : ", payload);
        io.emit("4", payload)  // emit is to emit to ALL users     
    })

    socket.on("join", (payload)=>{
        io.emit("join", payload)
    })


//     socket.on("disconnect", (reason) => {
//     console.log("Socket disconnected", reason);
//     io.emit("cht", {
//                     user : "joins",
//                     message : `user ${reason} left the cht`
//                     })
//   });
}

)

const PORT = process.env.PORT || 3002;
server.listen(PORT, ()=>{
    console.log("Socket-server running at 3002");
})