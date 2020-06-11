const express=require("express")
const request=require("request")
// express 서버 생성
const app=express();
// port 번호 => 0~65535  ==> 3355
const port=3355;
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(port,()=>{
    console.log("Server Start...","http://localhost:3355")
})

const Client=require("mongodb").MongoClient

/*app.get('/movie',function (req,res) {
    var url="mongodb://211.238.142.181:27017"

    Client.connect(url,(err,client)=>{
        // 데이터베이스 (mydb) => 테이블(news)
        var db=client.db("mydb")
        db.collection("movie").find({cateno:1}).toArray((err,docs) =>{
            console.log(docs)
            res.json(docs)
            client.close()
        })
    })
})*/

app.get('/category2',function (req,res) {
    var url="mongodb://211.238.142.181:27017"

    Client.connect(url,(err,client)=>{
        // 데이터베이스 (mydb) => 테이블(news)
        var db=client.db("mydb")
        db.collection("movie").find({}).toArray((err,docs) =>{
            console.log(docs)
            res.json({"category":docs})
            client.close()
        })
    })
})

app.get('/cate_food2',function (req,res) {
    var url="mongodb://211.238.142.181:27017"
    var cno=req.query.cno;


    Client.connect(url,(err,client)=>{
        // 데이터베이스 (mydb) => 테이블(news)
        var db=client.db("mydb")
        db.collection("food").find({cno:Number(cno)}).toArray((err,docs) =>{
            res.json({"cate_food":docs})
            console.log(docs)
            client.close()
        })
    })
})

app.get('/news2',(req,res)=>{
    var fd=encodeURIComponent(req.query.fd)
    // 네이버에 연결
    /*
        http://newssearch.naver.com/search.naver?where=rss&query=%EB%A7%9B%EC%A7%91 인코딩
     */
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    // XML => JSON (파서기생성)  explicitArray:false 변환이 안되는 것은 제외
    var parser=new xml2js.Parser({
        explicitArray:false
    })
    // 네이버 서버에 접근
    request({url:url},(err,request,xml)=>{
        //console.log(xml)
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item)
            res.json({"news":pJson.rss.channel.item})
        })
    })
})

app.get('/recipe2',(req,res)=>{
    var page=req.query.page; //request.getParameter("page");
    var rowSize=9;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";

    Client.connect(url,(err,client)=>{
        //Database (mydb)
        var db=client.db("mydb");
        // Table => Collection=> recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize)
            .toArray((err,docs)=>{
                res.json({"recipe":docs})
                client.close();
            });
    })

})