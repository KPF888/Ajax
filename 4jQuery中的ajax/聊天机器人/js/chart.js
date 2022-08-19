$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()

    //发送消息函数
    function sendMsg() {
        //把输入框的内容追加到聊天区域
        var input_txt = $('.input_txt').val().trim();
        if (input_txt.length <= 0) {
            return $('.input_txt').val('');
        }
        var content = '<li class="right_word"><img src="img/person02.png" /><span>' + input_txt + '</span></li>';
        $('.talk_list').append(content);
        $('.input_txt').val('');
        resetui();

        //使用ajax给服务器发送请求
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: input_txt
            },
            success: function (res) {
                if (res.message === 'success') {
                    // 获取信息
                    var msg = res.data.info.text;
                    var content = '<li class="left_word"><img src="img/person01.png" /><span>' + msg + '</span></li>';
                    $('.talk_list').append(content);
                    //重置滚动条
                    resetui();
                    //播放声音
                    getVoice(msg);
                }
            }
        })

    }

    //绑定发送按钮点击事件
    $('.input_sub').on('click', function () {
        sendMsg();
    })

    //获取音频
    function getVoice(text) {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                if (res.status == 200) {
                    // 变换音频地址 就会播放
                    $('.aud').attr('src', res.voiceUrl);
                }
            }
        })
    }

    //为文本框定keyup事件
    $('.input_txt').on('keyup', function (e) {
        if (e.keyCode === 13) {
            sendMsg();
        }
    })


})