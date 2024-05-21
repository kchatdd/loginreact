// Step 7: bring in dependencies and port from server
const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

// Step 8: create path to access all users on front end
router.get('/api', (req, res)=> {
    res.json({
        'All Users': `http://localhost:${port}/api/user`
    })
})

// Step 14: tell program to use the routes create in userRoutes.js
router.use('/api/user', require('./api/userRoutes'))

// Step 9: create path for 404 error when the page does not exist
router.get('*', (req, res)=> {
    if(req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error. This page does not exist.</h1>')
    }
})

// Step 10: export file
module.exports = router