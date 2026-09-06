//  npm init -y ( node.js application initiate )
//  npm i express ( Install package express for server creation )

const express = require('express'); 
const app = express(); //creating server instance

//API
app.get("/",(req,res)=>{  
    res.send("Hello World!")
})
app.get("/about",(req,res)=>{
    res.send("About the world!")
})
app.listen(3000)  // server start at port number 3000