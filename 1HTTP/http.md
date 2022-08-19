# HTTP
超文本传输协议（Hyper Text Transfer Protocol，HTTP）是一个简单的请求-响应协议，它通常运行在TCP之上

## 请求报文
请求结构
---------
行  请求方式 / 请求路径  HTTP/1.1（协议版本）
头  Host:baidu.com
    Cookie:name=kkk
    Content-type:application/x-www-form-urlencoded 请求类型
    User-Agent:chrome 83  访问软件
空行
体  username=admin&password=admin
---------


## 响应报文
------------
行  HTTP/1.1(协议版本) 200(响应状态码) OK(响应状态字符串)
头  Content-type:application/x-www-form-urlencoded 请求类型
    Content-length:2048
    Content-encoding:gzip
空行
体  <html>
        <body>
            <h4>尚硅谷</h4>
        </body>
    </html>
------------