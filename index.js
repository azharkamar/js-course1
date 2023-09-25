const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/about", function(req, res){
    res.send("About");
});

// start server
app.listen(8080, function(){
    console.log("Express server started...")
});