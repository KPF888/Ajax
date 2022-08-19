$(function () {

    //获取评论列表函数
    function getCommentList() {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success: function (res) {
                if (res.status !== 200) return alert('获取列表失败');
                var rows = [];
                //插入数据
                $.each(res.data, function (i, item) {
                    rows.push('<li class="list-group-item" data-id="' + item.id + '"><span class="badge" style="background-color: orange;">评论时间:' + item.time + '</span><span class="badge" style="background-color: skyblue; ">评论人:' + item.username + '</span>' + item.content + '</li>')
                });
                // 渲染数据
                $('.list-group').empty().append(rows.join(''));
            }
        })
    }
    getCommentList();


    //发表评论
    function sendContent(content) {
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: content,
            success: function (res) {
                getCommentList();
                if (res.status !== 201) return alert('发表失败');
            }
        })
    }

    //侦听提交事件
    $('.sf').on('submit', function (e) {
        e.preventDefault();
        var msg = $(this).serialize();
        console.log(msg);
        sendContent(msg);
        //清空输入框
        //转换成原生DOM对象固定写法
        $('.sf')[0].reset();
    })

})