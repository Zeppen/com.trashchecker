"use strict";

var apiArray = require('../trashapis.js');
var expect  = require('chai').expect;

it('API - Afvalwijzer', function(done) {
    var postcode = "6191JM";
    var homenumber = 12;
    var country = "NL";

    var result = apiArray.find(o => o.id === "afw");
    if(result == null || typeof result === 'undefined')
    {
        console.log("Invalid API");
        done();
    }
    
    // only load that API, this is so that we won't send requests to all data providers all the time.
    result['execute'](postcode,homenumber,country,
    (err,result) => {
        if(err) {
            console.log('Error in API', err);
            done();
            return;
        }
        else if(Object.keys(result).length > 0)
        {
            console.log('API Settings found.');
            done();
            return;
        }
        else if(Object.keys(result).length === 0) {
            console.log('No information found, go to settings to reset your API settings.');
            done();
            return;
        }
    });
});

it('API - Mijn Blink', function(done) {
    var postcode = "5673RE";
    var homenumber = 2;
    var country = "NL";

    var result = apiArray.find(o => o.id === "mba");
    if(result == null || typeof result === 'undefined')
    {
        console.log("Invalid API");
        done();
    }
    
    // only load that API, this is so that we won't send requests to all data providers all the time.
    result['execute'](postcode,homenumber,country,
    (err,result) => {
        if(err) {
            console.log('Error in API', err);
            done();
            return;
        }
        else if(Object.keys(result).length > 0)
        {
            console.log('API Settings found.');
            done();
            return;
        }
        else if(Object.keys(result).length === 0) {
            console.log('No information found, go to settings to reset your API settings.');
            done();
            return;
        }
    });
});