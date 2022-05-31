require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT ?? 3000;
const addProductRouter = require('./routes/addProductRouter');


const app = express();
hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));

app.use(morgan('dev'));

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     name: 'sID',
//     store: new FileStore(),
//     secret: process.env.SESSION,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { httpOnly: true },
//   }),
// );
// app.use(checkSession);
// app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('server start on', PORT);
});
