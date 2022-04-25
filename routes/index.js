const axios = require('axios');
const moment = require('moment');
let express = require('express');
let router = express.Router();
let Recommendation = require('../models/recommendation');
let Cycle = require('../models/cycle');
let theSource = require('../middleware/theSource');
const cryptoRandomString = require('crypto-random-string');

let today = new Date();
// Root Route
router.get('/', (req, res) => {
  Recommendation.findOne({ status: 'present' })
    .exec()
    .then(presentRecommendation => {
      let now = new Date().getTime();
      if (presentRecommendation) {
        let elapsedTime =
          now - presentRecommendation.startingRecommendationTimestamp;
        let elapsedSeconds = Math.floor(elapsedTime / 1000);
        res.render('eternity', {
          youtubeID: presentRecommendation.youtubeID,
          elapsedSeconds: elapsedSeconds,
        });
      } else {
        console.log(
          'There was not a recommendation in the present. The check system function will run now'
        );
        theSource.checkSystem();
        res.render('error');
      }
    });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/api', (req, res) => {
  console.log('the api route has been fetched');
  const element = { wena: 456 };
  res.json({ element });
});

//CREATE - add new recommendation to db
router.post('/api/new-recommendation/', async function (req, res) {
  console.log('in hee!');
  try {
    let newRecommendation = new Recommendation();
    newRecommendation.status = 'future';
    newRecommendation.reviewed = true;
    newRecommendation.recommendationDate = new Date();
    let url, duration, name;
    newRecommendation.youtubeID = req.body.url;
    let apiKey = process.env.YOUTUBE_APIKEY;
    let getRequestURL =
      'https://www.googleapis.com/youtube/v3/videos?id=' +
      newRecommendation.youtubeID +
      '&key=' +
      apiKey +
      '&fields=items(id,snippet(title),statistics,%20contentDetails(duration))&part=snippet,statistics,%20contentDetails';
    const response = await axios.get(getRequestURL);
    if (response.data.items.length > 0) {
      let durationISO = response.data.items[0].contentDetails.duration;
      newRecommendation.duration = moment
        .duration(durationISO, moment.ISO_8601)
        .asMilliseconds();
      newRecommendation.title = response.data.items[0].snippet.title;
      newRecommendation.save(() => {
        console.log(
          'A new recommendation was saved, and it has the following youtube ID: ' +
            newRecommendation.youtubeID
        );
        res.json({
          answer:
            'The recommendation ' +
            newRecommendation.title +
            ' was added successfully to the future! THanks',
        });
      });
    }
  } catch (error) {
    console.log('the error is: ', error);
    res.json({
      answer:
        'There was an error retrieving the recommendation from youtube. Please try again later, sorry for all the trouble that this means',
    });
  }
});

router.get('/thevoid', (req, res) => {
  if (req.user) {
    if (req.user.username === 'chocapec') {
      console.log('The user is chocapec');
      Recommendation.find({}).then(allRecommendations => {
        res.render('the-void', { allRecommendations: allRecommendations });
      });
    } else {
      console.log('you are not allowed to be here!');
      res.redirect('/');
    }
  } else {
    console.log('you are not allowed to be here!');
    res.redirect('/');
  }
});

router.post('/nextRecommendationQuery', (req, res) => {
  let answer = {};
  Recommendation.findOne({ status: 'present' })
    .exec()
    .then(nextPresentRecommendation => {
      answer.recommendation = nextPresentRecommendation;
      let elapsedTime =
        new Date().getTime() -
        nextPresentRecommendation.startingRecommendationTimestamp;
      answer.elapsedSeconds = Math.floor(elapsedTime / 1000);
      res.json(answer);
    });
});

module.exports = router;
