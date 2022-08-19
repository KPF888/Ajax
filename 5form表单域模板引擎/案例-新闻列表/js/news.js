$(function () {
  //定义过滤器
  template.defaults.imports.dateFormat = function (strDate) {
    var date = new Date(strDate);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return year + '年' + getZiro(month) + '月' + getZiro(day) + '号' + getZiro(hours) + '时' + getZiro(hours) + '分' + getZiro(seconds) + '秒';
  }

  //补零函数
  function getZiro(datet) {
    if (datet < 10) {
      return '0' + datet;
    } else {
      return datet;
    }
  }

  //获取新闻
  function getNews() {
    var d1 = +new Date();
    $.ajax({
      type: 'get',
      url: 'http://www.liulongbin.top:3006/api/news',
      success: function (res) {
        if (res.status !== 200) return alert('获取新闻失败,请检查网络设置');
        // 循环获取信息模板
        var rows = [];
        $.each(res.data, function (i, item) {
          //将tags字符串转换成数组
          // item.tags += '';
          item.tags = item.tags.split(',');
          var data = template('tpl-news', item);
          rows.push(data);
        })
        // var str = template('tpl-news', res);
        // console.dir(str);
        //将内容插入页面
        $('#news-list').empty().append(rows);
        // $('#news-list').empty().append(str);
      }
    })
    var d2 = +new Date();
    console.log(d2 - d1);
  }
  getNews();
})