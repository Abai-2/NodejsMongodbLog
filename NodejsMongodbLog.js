const { query } = require("express");
const express = require("express")
const app = express()
const ejs=require("ejs")
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910126');

const schema = {
    name: String,
    age: Number,
    health: String,
    hooby: String,
}
const mydata = mongoose.model('cats1', schema);

// const kitty = new mydata({ name: 'Zildjian2' });
// kitty.save()
// const kitty1 = new mydata({ name: 'Zildjian5' });
// kitty1.save()

app.use('/', express.static('public'))
app.get("/input", (req, res) => {
    res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name: req.query.first,health:req.query.second});
    kitty.save()
    ejs.renderFile("result.html",{returnVal:"success"},(err,str)=>{
        res.send(str)
    })
})
app.listen(10126)