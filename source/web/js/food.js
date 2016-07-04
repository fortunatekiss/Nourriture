/**
 * Created by leelddd on 7/3/2016.
 */

//document.getElementById("img").addEventListener('change',readFile,false);

function readFile(){
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        result.innerHTML = '<img src="'+this.result+'" alt=""/>'
    }
}

var hello = "hi";

var Foodns={

    openUpload: function () {
        layer.open({
            title: "上传图片",
            type: 2,
            area: ['400px', '100px'],
            fix: false, //不固定
            maxmin: true,
            content: '/web/html/newFoodPic.html'
        });
    },

    open: function(){
        //window.open("/web/html/newFood.html","def","height=500,width=500,location=no");
        layer.open({
            title: "新菜单",
            type: 2,
            area: ['450px', '530px'],
            fix: false, //不固定
            maxmin: true,
            content: '/web/html/newFood.html'
        });
    },

    add: function(){
        //todo  ajax
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    },

    close: function(){
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    },

    modify: function(name){
        //todo ajax to url
        layer.open({
            title: "菜品详情",
            type: 2,
            area: ['450px', '530px'],
            fix: false, //不固定
            maxmin: true,
            content: '/web/html/newFood.html'
        });
        //var arr = $("#foodname").find("input");
        //arr[0].attributes.removeNamedItem("readonly");
        //arr[1].attributes.removeNamedItem("readonly");
        //$("#" + name + "modifybtn").hide();
        //$("#" + name + "savebtn").show();
    },

    delete: function(name){
        //todo ajax to url
        var r=confirm("您确定要删除\""+name+"\"吗?");
        if (r)
        {
            $("#"+name).fadeOut(1500, function(){
                $("#"+name).remove();
            });
        }
    },

    save: function (name) {
        var arr = $("#foodname").find("input");
        arr[0].setAttribute("readonly","readonly");
        arr[1].setAttribute("readonly","readonly");
        $("#"+name+"modifybtn").show();
        $("#"+name+"savebtn").hide();
    }

};