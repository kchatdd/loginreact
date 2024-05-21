// Step 11: import express, router, and dao
const express = require('express')
const router = express.Router()

const dao = require('../../daos/dao')

// Step 12: create specific paths for the router based on dao functions
router.get('/', (req, res)=> {
    dao.findAll(req, res)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

router.get('/:id', (req, res)=> {
    dao.findById(req, res, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

// Step 13: export the router for use in router.js
module.exports = router