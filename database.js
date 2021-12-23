var MongoClient = require("mongodb").MongoClient
var mongoose = require("mongoose")

var DBurl = 'mongodb://172.21.2.236:27017'


var userSchema = mongoose.Schema({
    name:String,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false,
    }
})


MongoClient.connect(DBurl,{ useNewUrlParser:true },function(error,db){
    if(error){
        console.log(error)
    }else{
        let userdemo = db.db('190110910126').collection('user')
        console.log(userdemo.find().toArray(function(error,result){
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
        }))
    }
})

mongoose.connect(DBurl,{ useNewUrlParser:true })
mongoose.connection.once('open',function(){
    console.log("数据库连接成功")
})




// db.user.insertOne({username:"admin",password:"admin",isAdmin:true});


// const userSchema = mongoose.Schema({
//     name:String,
//     password:Number
// })


