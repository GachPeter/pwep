const mongoose = require("mongoose");

const uri = 'mongodb://root:ExYysuc6EP5pkoIM@pwep-zykino7apsuwcsjd-svc.qovery.io:27017/admin';


mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        return console.log("connection successful");
    }
    else{
        console.log("There was connection error"+err)
    }
})

module.exports = mongoose
