const express = require("express")
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

const schema={
    name:String,
    age:Number,
    health:String,
    hooby:String,
}
const mydata = mongoose.model('cats1', schema);

const kitty = new mydata({ name: 'Zildjian2' });
kitty.save()
const kitty1 = new mydata({ name: 'Zildjian4' });
kitty1.save()

app.use('/', express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.listen(10126)