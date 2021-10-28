const path = require('path');
const fs = require('fs');
const chirps = [

    {
        name: 'Nick',
        message: 'Hi'
    },
{
        name: 'Garrett',
        message: 'wassup gamers'
    },
    {
        name: 'Beth',
        message: 'Hello there'
    },
    {
        name: 'Nathan',
        message: 'Hi there'
    },
    {
        name: 'Joe',
        message: 'Hello'
    }];

fs.writeFile("chirps.json", JSONstringify(chirps), (err) => {
    if (err) throw err;
});

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data));
});

