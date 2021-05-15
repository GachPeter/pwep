const mongoose = require("mongoose");

const uri = "mongodb+srv://Gachp:005116011@cluster0.esvvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        return console.log("connection successful");
    }
    else{
        console.log("There was connection error"+err)
    }
})

module.exports = mongoose