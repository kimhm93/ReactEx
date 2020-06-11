// 라이브러리 설정
const express = require("express");
const request = require("request");
// express 서버 설정
const app = express();
// port 번호 => 0~65535 ==> 3355
const port = 3355;

// 서버 가동
/*
    1)생성
    2)bind() ==> 개통 (번호, 전화선)
                   => ip   , port
    3)listen()

    app.listen(port,()=>{
    });
    app.listen(port,function(){
    });
 */
app.listen(port,()=>{
    console.log("Server Start...", "http://localhost:"+port);
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/send", (req,res) => {
    //res.send("Hello Node");
    res.json([{no:1,name:"홍길동"},{no:2,name:"심청이"},{no:3,name:"박문수"}])
});

// /move?no=1
app.get("/movie",(req,res) => {
    var no = req.query.no
      , site = '';

    switch (Number(no)) {
        case 1:
            site="searchMainDailyBoxOffice.do";
            break;
        case 2:
            site="searchMainRealTicket.do";
            break;
        case 3:
            site="searchMainDailySeatTicket.do";
            break;
        case 4:
            site="searchMainOnlineDailyBoxOffice.do";
            break;
    }

    var url = "http://www.kobis.or.kr/kobis/business/main/" + site;
    // 데이터 읽기
    request({url:url},function (err,request,json) {
        //res.json(json);
        res.json(JSON.parse(json));
    })
});
