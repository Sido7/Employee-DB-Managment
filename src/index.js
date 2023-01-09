const express = require('express')
const bodyParser = require('body-parser')
const {Port} = require('./config/projectConfig')

const app  = express()

const createServer = async () => {
    

    app.listen(Port,(err)=>{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:true}))
        if(err)
        {
            console.log("Facing Some Issue")
        }
        console.log("Listening to Port"+Port)
    })
}

createServer()