function template(el, data) {
    //判断是哪种获取方式
    var clas = document.querySelector('.' + el);
    var idd = document.querySelector('#' + el);
    var target = clas || idd;
    var str = target.innerHTML;
    // 定义正则字符串
    var patter = /{{\s*([a-zA-Z]+)\s*}}/;
    var res = null;
    while (res = patter.exec(str)) {
        //把str被匹配的都替换
        str = str.replace(res[0], data[res[1]]);
    }
    return str;
}