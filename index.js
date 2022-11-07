const app = require('./app')
const express = require("express");
const authRout = require("./authRout");
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/auth', authRout)

const start = async () => {
    try{
        app.listen(PORT,  ()=> {console.log(`Server has benn started ${PORT}`)})
    }catch (e){
        console.log(e)
    }}

start()

