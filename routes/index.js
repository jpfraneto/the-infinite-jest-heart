const axios = require('axios');
const moment = require('moment');
let express = require('express');
let router = express.Router();
let passport = require('passport');
let User = require('../models/user');
const middlewareObj = require('../middleware');
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

//CREATE - add new recommendation to db
router.post('/', function (req, res) {
  let newRecommendation = new Recommendation();
  if (!req.user) {
    newRecommendation.author = {
      name: req.body.name,
      country: req.body.country,
      email: req.body.email,
    };
  } else {
    newRecommendation.author = {
      id: req.user._id,
      username: req.user.username,
      country: req.user.country,
      name: req.user.username,
      language: req.user.language,
    };
  }
  newRecommendation.description = req.body.description;
  newRecommendation.language = req.body.language;
  newRecommendation.status = 'future';
  newRecommendation.type = 'music';
  newRecommendation.reviewed = false;
  newRecommendation.recommendationDate = new Date();
  let url, duration, name;
  newRecommendation.youtubeID = req.body.newRecommendationID;
  let apiKey = process.env.YOUTUBE_APIKEY;
  let getRequestURL =
    'https://www.googleapis.com/youtube/v3/videos?id=' +
    newRecommendation.youtubeID +
    '&key=' +
    apiKey +
    '&fields=items(id,snippet(title),statistics,%20contentDetails(duration))&part=snippet,statistics,%20contentDetails';
  axios
    .get(getRequestURL)
    .then(function (response) {
      if (response.data.items.length > 0) {
        let durationISO = response.data.items[0].contentDetails.duration;
        newRecommendation.name = response.data.items[0].snippet.title;
        newRecommendation.duration = moment
          .duration(durationISO, moment.ISO_8601)
          .asMilliseconds();
        newRecommendation.save(() => {
          if (req.user) {
            req.user.recommendations.push(newRecommendation);
            req.user.save(() => {
              console.log('The user was updated with the new recommendation');
            });
          }
          console.log(
            'A new recommendation was saved by ' +
              newRecommendation.author.name +
              ', with the following youtube ID: ' +
              newRecommendation.youtubeID
          );
          res.json({
            answer:
              'The recommendation ' +
              newRecommendation.name +
              ' was added successfully to the future! Thanks ' +
              newRecommendation.author.name +
              ' for your support.',
          });
        });
      } else {
        res.json({
          answer:
            'There was an error retrieving the recommendation from youtube. Please try again later, sorry for all the trouble that this means',
        });
      }
    })
    .catch(() => {
      res.json({
        answer:
          'There was an error retrieving the recommendation from youtube. Please try again later, sorry for all the trouble that this means',
      });
    });
});

router.get('/podcast', (req, res) => {
  res.render('podcast');
});

router.post('/podcast', (req, res) => {
  let podcastEmail = new PodcastEmail({ email: req.body.podcastEmail });
  podcastEmail.save(() => {
    res.redirect('/');
  });
});

router.get('/thevoid', (req, res) => {
  if (req.user) {
    console.log(req.user);
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
  if (req.body.systemStatus === 'present') {
    Recommendation.findOne({ status: 'present' })
      .exec()
      .then(nextPresentRecommendation => {
        answer.recommendation = nextPresentRecommendation;
        let elapsedTime =
          new Date().getTime() -
          nextPresentRecommendation.startingRecommendationTimestamp;
        answer.elapsedSeconds = Math.floor(elapsedTime / 1000);
        if (req.user) {
          if (req.user.favoriteRecommendations) {
            let indexOfRecommendation =
              req.user.favoriteRecommendations.indexOf(
                nextPresentRecommendation._id
              );
            if (indexOfRecommendation === -1) {
              answer.isFavorited = false;
            } else {
              answer.isFavorited = true;
            }
          } else {
            answer.isFavorited = false;
          }
        } else {
          answer.isFavorited = undefined;
        }
        res.json(answer);
      });
  } else if (req.body.systemStatus === 'past') {
    Recommendation.findOne({ youtubeID: req.body.videoID })
      .exec()
      .then(queriedVideo => {
        Recommendation.findOne({ index: queriedVideo.index + 1 })
          .exec()
          .then(nextVideo => {
            if (nextVideo) {
              answer.recommendation = nextVideo;
              if (req.user) {
                if (req.user.favoriteRecommendations) {
                  let indexOfRecommendation =
                    req.user.favoriteRecommendations.indexOf(nextVideo._id);
                  if (indexOfRecommendation === -1) {
                    answer.isFavorited = false;
                  } else {
                    answer.isFavorited = true;
                  }
                } else {
                  answer.isFavorited = false;
                }
              } else {
                answer.isFavorited = undefined;
              }
              answer.elapsedSeconds = 0;
              res.json(answer);
            }
          });
      });
  } else if (req.body.systemStatus === 'favorites') {
    User.findOne({ username: req.user.username })
      .populate('favoriteRecommendations')
      .then(foundUser => {
        let favoriteRecommendations = foundUser.favoriteRecommendations;
        answer.recommendation =
          favoriteRecommendations[
            Math.floor(Math.random() * favoriteRecommendations.length)
          ];
        answer.isFavorited = true;
        answer.elapsedSeconds = 0;
        res.json(answer);
      });
  } else if (req.body.systemStatus === 'recommendations') {
    User.findOne({ username: req.user.username })
      .populate('recommendations')
      .then(foundUser => {
        let userRecommendations = foundUser.recommendations;
        answer.recommendation =
          userRecommendations[
            Math.floor(Math.random() * userRecommendations.length)
          ];
        answer.isFavorited = true;
        answer.elapsedSeconds = 0;
        res.json(answer);
      });
  }
});

module.exports = router;
