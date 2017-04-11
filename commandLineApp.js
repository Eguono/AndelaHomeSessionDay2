'use strict';

var rp = require('request-promise');

var options = {
    uri: 'https://api.chucknorris.io/jokes/random',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
};

rp(options)
    .then(function (response) {
            console.log("Facts about chucknorris:" + response.value);    
    })
    .catch(function (err) {
        console.error(err);
    });