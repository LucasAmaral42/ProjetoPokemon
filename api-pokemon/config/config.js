var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function (){
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('routes')
        .include('infra')
        .into(app)

    return app;
}