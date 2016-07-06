/**
 * Created by leelddd on 7/5/2016.
 */


//=============================================================================
//change pic
//var i = 5;
//var count = 0;
//
//function a() {
//    i++;
//    if (count++ == 4) {
//        i = 5;
//    }
//    var im = document.getElementById("img");
//    var source = "/web/image/" + i.toString() + ".jpg";
//    im.setAttribute("src", source);
//    setTimeout(function () {
//        a();
//    }, 2000);
//}
//
//a();

var Loginns = {
    login: function () {
        window.location.href='/web/index.html';//todo remove
        $.ajax({
            type: "get",
            async: false,
            url: "/login",
            data: {name: $("#username").val(), password: $("#password").val()},
            timeout: 1000,
            success: function (dates) {
                alert("登陆成功");
                window.location.href='/web/index.html';
            },
            error: function () {
            }
        });
    }
};