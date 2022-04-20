require('dotenv').config();

let CronJob = require('cron').CronJob;
let express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  flash = require('connect-flash'),
  methodOverride = require('method-override'),
  Recommendation = require('./models/recommendation'),
  Cycle = require('./models/cycle'),
  theSource = require('./middleware/theSource'),
  nodemailer = require('nodemailer'),
  seedDB = require('./seeds2');

let systemStatus;

const indexRoutes = require('./routes/index');

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE_MONGODB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.json());
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  });
}

/////////////////////SET FUNCTIONS////////////////////////////

// setTimeout(theSource.bigBang);

console.log('The app.js file is running again.');
setTimeout(theSource.checkSystem);

app.use('/', indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('The Human Music Server Has Started in port', port);
});
