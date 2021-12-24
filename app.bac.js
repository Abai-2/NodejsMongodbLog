var express = require("express")
var ejs = require("ejs")
var fs = require("fs")
var md5 = require("md5-node")
var multiparty = require("multiparty")

// const cookieParser = require("cookie-parser")
var session = require("express-session")

var DB = require("./mongodb.js")
var bodyParser = require("body-parser")



var app = new express()

// 配置 session
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*1000*60
    }
}))



app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())

app.use(express.static(__dirname+"/public"))

app.use('/product/upload',express.static("upload"))

app.use('/upload',express.static("upload"))



app.set("views",__dirname+"/views")

app.set("view engine","ejs")

app.engine("html",ejs.__express)

var login = require("./router/admin/login.js")
var product = require("./router/admin/product.js")
var productuser = require("./router/admin/productuser.js")

app.get('/',function(request,response){
    request.session.pageIndex = 2;
    // response.cookie("pageIndex",1,{ maxAge:60*1000*60 })
    response.render('main.html')
})

app.use('/login',login)

app.use('/product',product)

app.use('/productuser',productuser)



app.listen(20126)