function resolveData(data) {
    //把对象转换成查询字符串
    var arr = [];
    for (var k in data) {
        arr.push(k + '=' + data[k]);
    }
    return arr.join('&');
}


function myAjax(options) {
    var xhr = new XMLHttpRequest();

    //把data转换为查询字符串
    var qs = resolveData(options.data);

    //判断是什么请求,初始化请求,发送请求
    var type = options.type;
    var method = options.method;
    if ((type || method).toUpperCase() === 'GET') {
        //发送get请求
        xhr.open('GET', options.url + '?' + qs);
        xhr.send();
    } else if ((type || method).toUpperCase() === 'POST') {
        //发送post请求
        xhr.open('POST', options.url);
        //添加头键值对
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //请求成功则返回反序列化的内容
            options.success(JSON.parse(xhr.response));
        }
    }
}