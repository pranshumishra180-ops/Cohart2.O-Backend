// server ko create krna 

const express = require('express');



const app = express();



app.use(express.json());

const notes = []


// post/notes//

app.post('/notes',(req,res)=>{



notes.push(req.body)

res.status(201).json({

    message:'Note added successfully'

})
    
})


// get/notes//

app.get('/notes',(req,res)=>{

    res.status(200).json({

        notes: notes

    })

})

// delete/notes/

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    res.status(200).json({
        message:'Note deleted successfully' 
    })
})
// patch/notes/
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description
     res.status(200).json({
        message:'Note updated successfully'
     })
})


module.exports = app;
