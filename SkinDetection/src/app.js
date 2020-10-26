const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path')
const morgan = require('morgan');
const app = express();

// Settings.
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs(
    {
        defaultLayout: 'main',
        extname: '.hbs'
    }
));
app.set('view engine', '.hbs');
// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
})
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use(require('./routes/index'));
module.exports = app;