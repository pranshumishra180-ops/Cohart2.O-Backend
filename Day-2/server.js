const express = require('express');

const app = express(); // server instance create krna  

app.get('/',(req,res)=>{
    res.send('kya ho raha haii')
})

app.get('/about',function(req,res){
    res.send('this is abouut page');
     
})

app.get('/home',function(req,res){
    res.send('this is home page');

})


app.listen(3000) // server start krna   