//引入expresse
const express = require("express");

//创建应用对象
const app = express();

//创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/', function (request, response) {
    //设置简单响应
    response.send('hello');
});

//监听端口
app.listen(8000, function () {
    console.log('服务已经启动，正在监听8000端口......');
});


