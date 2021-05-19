const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ }); 
    console.log(client.id)
});
server.listen(3000);
console.log("sever post 3000")

app.get('/getDataSearch',function(req,res){

    var versionApp = req.query.versionApp;

   
    res.send(JSON.stringify({
        code: "200",
        message: {
            arrayData:versionApp
        }
    }));
});