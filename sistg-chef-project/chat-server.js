const express=require("express");
const app=express();

const server=require("http").createServer(app)
const port=7777

server.listen(port,()=>{
    console.log("Char Server Start...")
})
const socketio=require('socket.io');
const io=socketio.listen(server)
// 채팅 서버 => socket (webSocket)

// 요청
/*
    public class Server
    {
        ServerSocket ss;
        public Server()
        {
            ss=new ServerSocket(7777)

        }

        public void run()
        {
            Socket s=ss.accept();
        }

        public void run()
        {
            => LOGIN|id|pwd
            case LOGIN:
            {

            }
            case MAKEROOM:
            {

            }
        }

    }
 */
io.on('connection',(socket)=>{
    socket.on('chat_msg',(msg)=>{
        console.log(msg)
        io.emit('chat_msg',msg) // 접속한 모든 유저에 데이터 전송
    })
})