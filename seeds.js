var mongoose = require('mongoose');
var Recommendation = require('./models/recommendation');

var dataRecs = [
  {
    name: 'The Art of Life',
    recommendationDate: '242022IV',
    url: 'https://www.youtube.com/watch?v=7gUh8j5ui0o',
    status: 'present',
    youtubeID: '7gUh8j5ui0o',
    duration: 2284000,
  },
  {
    name: 'Samadhi Película, 2017 - Parte 1 - "Maya, la ilusión del Yo',
    recommendationDate: '242022IV',
    url: 'https://www.youtube.com/watch?v=Bw9zSMsKcwk',
    status: 'future',
    youtubeID: 'Bw9zSMsKcwk',
    duration: 3553000,
  },
  {
    name: 'Jocko Podcast 221: Jonny Kim. Navy SEAL, Doctor, Astronaut. The Unimaginable Path.',
    recommendationDate: '242022IV',
    url: 'https://www.youtube.com/watch?v=yujP3-AxXsI',
    status: 'future',
    youtubeID: 'yujP3-AxXsI',
    duration: 16837000,
  },
];

function seedDB() {
  Recommendation.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('removed recommendations');
    let i = 0;
    dataRecs.forEach(function (seed) {
      Recommendation.create(seed, function (err, recommendation) {
        if (err) {
          console.log(err);
        }
      });
      i++;
    });
    console.log('added ' + i + ' recommendations to DB');
  });
}

module.exports = seedDB;
