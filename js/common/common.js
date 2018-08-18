// 控制弹窗开启和关闭
function dialog_control(){
    $('.dialog').animate({'opacity':1},500)
    setTimeout(function(){
        $('.dialog').animate({'opacity':0},500)
    },800)
}

