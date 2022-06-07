const express = require('express');
const router = express.Router();
const fs = require('fs')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res)=>{
   res.sendFile(__dirname +'/HTML/home.html');
});
router.get('/home.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/home.html');
 });
router.get('/build.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/build.html');
});
router.get('/faq.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/faq.html');
});
router.get('/reviews.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/reviews.html');
});
router.post('/confirmation.html', (req, res) => {
    function converter(value) {
        if(value == undefined) return 'No'
        else return 'Yes'
    }
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const city = req.body.city
    const state = req.body.state
    const zip = req.body.zip
    const budget = req.body.budget
    const time = req.body.time
    const game = converter(req.body.game)
    const stream = converter(req.body.stream)
    const gamenstream = converter(req.body.gamenstream)
    const video = converter(req.body.video)
    const business = converter(req.body.business)
    const family = converter(req.body.family)
    const audio = converter(req.body.audio)
    const gameList = req.body.gameList
    const comment = req.body.comment
    const bluetooth = converter(req.body.bluetooth)
    const wifi = converter(req.body.wifi)
    const input =  
`{
    First name: ${fname},
    Last Name: ${lname},
    Email: ${email},
    Phone: ${phone},
    Address: ${address},
    City: ${city},
    State: ${state},
    Zip code: ${zip},
    Budget: ${budget},
    Time frame: ${time},
    Gaming: ${game},
    Streaming: ${stream},
    Gaming and streaming: ${gamenstream},
    Video editing: ${video},
    For business: ${business},
    For family: ${family},
    Audio editing: ${audio},
    Game list: ${gameList},
    Bluetooth: ${bluetooth},
    WiFi: ${wifi},
    Other request: ${comment}
}\n\n`
    const inputs = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        budget: budget,
        time: time,
        gaming: game,
        streaming: stream,
        gamingAndStreaming: gamenstream,
        videoEditing: video,
        forBusiness: business,
        forFamily: family,
        audioEditing: audio,
        gameList: gameList,
        bluetooth: bluetooth,
        wifi: wifi,
        comment: comment
    }
    fs.appendFile('./Data/data.txt', input, (err) => {
        if (err)
            console.log(err);
    })
    res.sendFile(__dirname +'/HTML/confirmation.html');
})

module.exports = router;