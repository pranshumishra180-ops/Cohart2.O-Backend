  /*
  
  - server create krna  
  server config krna    
  
  */

  const express = require("express");



const app = express() // server create ho gya 

app.use(express.json())//middleware use krna jo json data ko read kr ske


const notes=[
    {
        "title":"test title 1",
        "description":"test description 1"
    }
]

app.get('/',(req,res)=>{
    res.send("Hello World")
})


/* 
Post /notes  => create a new note
*/
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes);
    
    res.send("Note created successfully")
})


/*
Get /notes => get all the notes 
*/
app.get('/notes',(req,res)=>{
res.send(notes)
})

/* DELETE/NOTES */
// params

app.delete('/notes/:index',(req,res)=>{
   delete notes[req.params.index]
   res.send("Note deleted successfully")
    
})

/*  Patch/ notes/:index */
/* req.body = {description:" sample modified  description"} */

app.patch('/notes/:index',(req,res)=>{
    
    notes[req.params.index].description=req.body.description

    res.send("Note updated successfully")

})


module.exports = app;