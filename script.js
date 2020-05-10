// 设置正确的用户名和密码
var correctUsername = "2154952552";
var correctPassword = "88888888";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    //在下面加入代码
    if(username===correctUsername&&password===correctPassword){
        alert("恭喜你，登录成功")
    }else if(username===""||password===""){
        alert("请输入用户名或密码")
    }else if (username===correctUsername&&password!==correctPassword){
        alert("你输入的密码错误")
    }else if(username!==correctUsername&&password===correctPassword){
        alert("你输入的用户名错误")
    }else if(username!==correctUsername&&password!==correctPassword){
        alert("你输入的用户名和密码错误")
    }
});