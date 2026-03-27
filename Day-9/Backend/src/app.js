/* 
Server ko create krna
*/

const express = require("express")
const noteModel = require('./models/note.model')
const cors = require("cors")
const path = require("path")



const app =  express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

/* 
*-post/api/notes
*-create new note and save data in mongodb
*- req.body = {title,description}
*/

app.post('/api/notes', async(req,res)=>{
    const {title, description} = req.body

  const note = await noteModel.create({
    title,description
})

res.status(201).json({
    message: "note created successfully",
    note
})

})

/* 
*-get /api/notes
*-fetch all the notes data from mongo db and send them in the response 
*- 
*/
app.get('/api/notes',async (req,res)=>{
  const notes =  await  noteModel.find()

  res.status(200).json({
    message:"notes  fetched succesfully.",
    notes
  })
})
/* 
*-delete/api/notes/:id
*- delete note with the id for req.params
*- 
*/
app.delete('/api/notes/:id', async(req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note delete succefully"
    })
    
})

/*-delete/api/notes/:id
*- update the description of the notes by id
*- req.body = {description}
*/
app.patch('/api/notes/:id', async(req,res)=>{
    const id = req.params.id
    const{ description} = req.body

   await  noteModel.findByIdAndUpdate(id,{ description })
   res.status(200).json({
    message:"Note Updated  succesfully "
   })
})

app.use('*name',(req,res) => {
  res.sendFile(path.join(__dirname,".." , "/public/index.html"))
})

module.exports = app