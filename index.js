 var express = require('express');
  var app = express();
  const server = require('http').createServer(app);

  server.listen(2111, function () {
          console.log('listening on *: 2111 soket io');
      });
  //  Console.log("start soketio")
  
  app.get('/getDataSearch',function(req,res){

    console.log("trung lòng 1")
    res.send(JSON.stringify({
        code: "200",
        
    }));
});