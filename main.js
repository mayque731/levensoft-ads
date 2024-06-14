const nunjucks = require('nunjucks');
const dateFilter = require('nunjucks-date-filter');
const express = require('express');
const app = express();
const routesBase = require('./routes/base');
const routesContato = require('./routes/contato');
const routesChamado = require('./routes/chamado');

// configs template engine
let configJucks = nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});

configJucks.addFilter('date', dateFilter);

app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// configs routes
app.use(routesBase);
app.use(routesContato);
app.use(routesChamado);

app.listen('4000', function () {
    console.log('>> Server online:3000');
});
