const express = require("express");
const app = express();
const server = require("http").createServer(app); // createServer를 해야지 server-client간에 통신을 한다.
const port = 3001;
/*
    bind (ip, port) => 개통
         ===  ====
         전화번호, 연결선
    listen => 대기상태
    accept => 클라이언트가 접속
    read => 접속받기
    write => 응답하기
 */
server.listen(port, () => {
    console.log("Chat Server Start...");
});

const socketio = require('socket.io');
// socket ==> 전화기
const io=socketio.listen(server); // 소켓서버 셋팅

io.on('connection', (socket) => {
    socket.on('chat-msg', (msg) => {
        console.log(msg);
        io.emit('chat-msg',msg);
    });
}); // 서버에서 클라이언트가 들어왔을 때 실행