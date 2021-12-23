var express = require("express")
var router = express.Router()

var product = require("./admin/product.js")


router.get('/product',product)

// var express=require('express')
// var router=express.Router();
// router.use(function (req,res,next) {
//     // console.log("admin",req.userInfo.isAdmin,req.userInfo)
//     if(!req.userInfo.isAdmin){
//         res.send("对不起，只有管理员才可以进入后台管理")
//         return
//     }
//     next()

// })

router.get('/',function (req,res,next) {
res.send('欢迎进入后台管理')
});
module.exports=router;