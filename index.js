const express = require('express');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 9000;

//Middleware
app.use(morgan('combined'))

// Routes

//GET
app.get('/', (req,res)=>{
    res.send('Hello World')
})

//GET
app.get('/get', (req,res)=>{
    res.send('getting...')
})


//Authenticated
app.use((req,res, next)=>{
    if(req.query.mail==="pepito@gmail.com"){
        next()
    }else{
        res.send("Unauthorized")
    }
    
});

//POST
app.post('/booking', (req,res)=>{
    res.send('booking pool...')
})

//DELETE
app.delete('/delete', (req,res)=>{
    res.send('deleting...')
})


//PATCH
app.patch('/patch', (req,res)=>{
    res.send('patching...')
})

app.use((req, res)=>{
    res.status(404).send("request not found")
})

app.listen(port, ()=> console.log("server running at port ", port))
