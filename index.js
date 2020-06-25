const express = require('express');


//set up express app
const app = express();

app.get('/api',function(req,res){
    console.log('GET request');
    res.send({name: 'penguin'});
});

//listen for request
app.listen(4000,function(){
    console.log('listening for requests');
})