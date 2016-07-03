/**
 * Created by leelddd on 7/3/2016.
 */

document.getElementById("img").addEventListener('change',readFile,false);

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

var Foodns={

    modify: function(name){
        //todo ajax to url
        var arr = $("#foodname").find("input");
        arr[0].attributes.removeNamedItem("readonly");
        arr[1].attributes.removeNamedItem("readonly");
        $("#" + name + "modifybtn").hide();
        $("#" + name + "savebtn").show();
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