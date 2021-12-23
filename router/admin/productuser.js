var express = require("express")
var router = express.Router()

var ejs = require("ejs")
var fs = require("fs")
var md5 = require("md5-node")
var multiparty = require("multiparty")

var session = require("express-session")

var DB = require("../../mongodb.js")
var bodyParser = require("body-parser")

var previous = require("./productuser/previous.js")
var next = require("./productuser/next.js")
var search = require("./productuser/search.js")

router.use('/previous',previous)

router.use('/next',next)

router.use('/search',search)

// /product
router.get('/',function(request,response){
    // console.log(request.session)

    console.log(request.session.dbName)

    const dbName = request.session.dbName

    const database = dbName ? dbName : 'products'
    console.log(database)

    // console.log(request.session.newdata)
    // const newdata = request.session.newdata
    // console.log(newdata.length)

    // console.log(newdata.parseJSON())
    console.log(request.query.pageIndex) // undefined
    console.log(request.session.pageIndex)
    const pageIndex = request.query.pageIndex ? request.query.pageIndex : request.session.pageIndex
    DB.find(database,{},function(error,data){
        if(error){
            console.log(error)
            return false
        }else{
            // console.log(data)
            response.render('productuser.html',{
                
                list:data
            })
        }
    },pageIndex)
})



module.exports = router


