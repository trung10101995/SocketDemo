// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', () => { /* … */
//   Console.log(client)
//   });
// server.listen(3010);


const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(client){
    console.log("socket dang lang nghe bạn");
    client.on('event', function(data){});
    client.on('disconnect', function(){});
  });
 server.listen(1999, function(){
    console.log("start server in port 1999 ...");

  });
