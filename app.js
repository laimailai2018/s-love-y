const express = require("express")

const server = express();
   
server.listen(5314, function () { //在3001端口启动
    console.log('Example app listening on port 5314');
})

server.use('', express.static('./'))

