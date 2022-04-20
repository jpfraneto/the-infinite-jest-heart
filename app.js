require('dotenv').config();

let CronJob = require('cron').CronJob;
let express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  flash = require('connect-flash'),
  passport = require('passport'),
  session = require('express-session'),
  LocalStrategy = require('passport-local'),
  methodOverride = require('method-override'),
  Recommendation = require('./models/recommendation'),
  User = require('./models/user'),
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

const sessionConfig = {
  secret: 'Music to nourish your soul and activate your mind',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

app.use('/', indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('The Human Music Server Has Started in port', port);
});
