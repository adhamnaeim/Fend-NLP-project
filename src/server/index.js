var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi")
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var  varPath = path.join(__dirname , '../../')
dotenv.config({path:varPath+'.env'});

let projectData = {};
const app = express()
// set aylien API credentias
var aylienapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    console.log(req.body)
    return aylienapi.sentiment({
        url: req.body.url
      }, function(error, response) {
            if(error){
                console.log("error",error);
                return
            }
            projectData['sentences'] = response.sentences;
            projectData['author'] = response.author;
            projectData['title'] = response.polarity_confidence;
            console.log(projectData)
            res.send(projectData);
            });     
})
