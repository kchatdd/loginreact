// Step 1 make node dependencies required
const express = require('express')
const server = express()
const cors = require('cors')

// Step 4: add helmet dependency for security; must be before the port
const helmet = require('helmet')

// Step 2: create var for port
const port = process.env.port || 3005

// Step 5: tell the server to use the dependecies we have installed.
server.use(helmet()).use(cors())

server.use(express.json())
server.use(express.urlencoded({extended: true}))

// server.use('/', router)

// Step 3: create a console that alerts you to your port being live
server.listen(port, ()=> {
    console.log(`We on the air in port ${port}...`)
})