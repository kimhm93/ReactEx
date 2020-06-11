const express=require("express")
// 서버
const app=express();
const port=3355;
const MongoConnect=require("mongodb").MongoClient;

app.listen(port,()=>{
    console.log("Start Server ...","http://localhost:3355")
})

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// /recipe_data?page=1
app.get('/recipe_data',(req,res)=>{
    var page=req.query.page; // request.getParameter("page");
    var rowSize=12;
    var skip=(page*rowSize)-rowSize;

    var url="mongodb://211.238.142.181:27017"
    // 몽고 디비 연결 => 연결 객체 얻기
    // MongoClient client=new MongCLient()
    /*
        database : XE, mydb
        table => collection

        [{}
         {}
         {}
         {}] ==> docs =[]
     */
    MongoConnect.connect(url,function (err,client) {
        var db=client.db('mydb'); // XE
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            res.json(docs); // model.addAttribute("list",list);
            client.close();
        });
    })
})

// SELECT CEIL(COUNT(*)/12.0) FROM recipe
app.get('/total_data',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,clinet)=>{
        var db=clinet.db('mydb');
        db.collection('recipe').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/12.0)});
            clinet.close();
            return count;
        });
    })
})

app.get('/chef_data',(req,res)=>{
    var page=req.query.page; // request.getParameter("page");
    var rowSize=50;
    var skip=(page*rowSize)-rowSize;

    var url="mongodb://211.238.142.181:27017"

    MongoConnect.connect(url,function (err,client) {
        var db=client.db('mydb'); // XE
        db.collection('chef').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            res.json(docs); // model.addAttribute("list",list);
            client.close();
        });
    })
})

app.get('/chef_total',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,clinet)=>{
        var db=clinet.db('mydb');
        db.collection('recipe').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/50.0)});
            clinet.close();
            return count;
        });
    })
})
const xml2js=require("xml2js")
// XML => JSON으로 변경
const request=require("request")
// 서버 => 다른 서버로 연결 할때 사용
app.get("/recipe_news",(req,res)=>{
    var query=encodeURIComponent(req.query.fd);
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+query;
    var parser=new xml2js.Parser({
        explicitArray:false
    })
    request({url:url},(err,request,xml)=>{
        console.log(xml)
        parser.parseString(xml,function (err,pJosn) {
            console.log(pJosn.rss.channel.item)
            res.json(pJosn.rss.channel.item)
        })
    })

})