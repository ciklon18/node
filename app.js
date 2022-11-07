const express = require('express')
const  app = express()

const  authRouter =require('./authRout')

const cors = require('cors')
const  morgan = require('morgan')
const bd = require('./db')

app.use('/auth', authRouter)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


module.exports = app;