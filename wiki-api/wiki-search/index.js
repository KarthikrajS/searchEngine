const express = require("express");
const bodyparser = require("body-parser")
const axios = require('axios');
const cors = require('cors');

// const mongoose = require('mongoose')
// const promise = require('bluebird')

const app = express()

app.use(cors());
app.use(bodyparser.json())
app.get('/',(req,res)=>{
    res.send('This is wiki search service!')
})

app.post('/search/:keyword',(req,res)=>{
    console.log(req.params.keyword)
    let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+req.params.keyword
    axios.post(searchUrl)
    .then((wikiData)=>{
        res.send(wikiData.data)
    }).catch((err)=>{
        if(err){
            throw err
        }
    })
    // res.json({"url": searchUrl})
})

app.listen(4001, ()=>{
    console.log('Wiki search server is up and running!')
})