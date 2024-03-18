var express = require('express');
var app = express();

app.get('/addTwoNumbers', function(request, response) {
  let num1 = parseInt(request.query.num1);
  let num2 = parseInt(request.query.num2);

  let sum = num1 + num2;

  let jsonResponse = {
    data: sum,
    message: "success",
    statusCode: 200
  };

  response.json(jsonResponse);


});

app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Web server running at: http://localhost:3000/addTwoNumbers");
    console.log("Type Ctrl+C to shut down the web server");
});