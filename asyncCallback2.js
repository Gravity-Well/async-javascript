const request = require('request');
request(`https://maciejtreder.github.io/asynchronous-javascript/directors`, {json: true}, (err,res,body)=>showBody(err,res,body));

function showBody(err,res,body){
    console.log(body);
}