//引入expresse
const { json } = require("express");
const express = require("express");

//创建应用对象
const app = express();

//创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', function (request, response) {
    //设置简单响应
    //如果请求行第二段的请求路径为/server 那么就会执行回调函数的内容，并且由response执行

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO AJAX');
});

//IE缓存规则
app.get('/ie', function (request, response) {
    //设置简单响应
    //如果请求行第二段的请求路径为/server 那么就会执行回调函数的内容，并且由response执行

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO IE - 4');
});

app.all('/server', function (request, response) {
    //设置简单响应
    //如果请求行第二段的请求路径为/server 那么就会执行回调函数的内容，并且由response执行

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置允许所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/json-server', function (request, response) {
    //设置简单响应
    //如果请求行第二段的请求路径为/server 那么就会执行回调函数的内容，并且由response执行

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置允许所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体 
    const data = {
        name: 'ajax json'
    }
    // 将对象转换成字符串
    let str = JSON.stringify(data);
    response.send(str);
});

//延时响应
app.get('/delay', function (request, response) {
    //设置简单响应
    //如果请求行第二段的请求路径为/server 那么就会执行回调函数的内容，并且由response执行

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
    //设置响应体

});

//监听端口
app.listen(8000, function () {
    console.log('服务已经启动，正在监听8000端口......');
});


