//Server ko create kerna ish file ka kaam hai
const express = require("express")
const app = express()


//middleware 
app.use(express.json())

const notes  = [];
// Title and description required from user and user give it from frontend ( data comes from frontend ---> post method used for this)


// Name of API -->  /notes 

//postman works like frontend for api calling........
app.post('/notes',(req,res)=>{
    // console.log(req.body); // it have data of the request  (you need to use a middleware to get the data in req.body from postman....) middleware--> express.json()

    notes.push(req.body);
    res.status(201).json({
        message:"Notes Createed Successfully"
    })

}) 

//server se data frontend per bhezna hai

app.get('/notes',(req,res) => {
    res.status(200).json(
        {
            message:"Notes fatched successfully",
            notes:notes // notes me hum array bhez rhe hai
        }
    )
})


//delete /notes , index to get the index for deletion

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message:"Notes deleted successfully"
    })
})

// update perticular note
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({
        message:"The notes updated successfully"
    })
})


module.exports = app;