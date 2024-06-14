const express = require('express');
const router = express.Router();

router.get('/login', function (request, response) {
    response.render('auth/login');
})

router.get('/register', function (request, response) {
    response.render('auth/register');
});