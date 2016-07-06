/**
 * Created by leelddd on 7/3/2016.
 */

//add delete modify search method for food

var Foodns = {

    dishes:[new DishModel.DishModel(1, "name", "desc", "resource", "method")],

    //============================================
    //add
    openUpload: function () {
        layer.open({
            title: "上传图片",
            type: 2,
            area: ['400px', '100px'],
            fix: false, //不固定
            maxmin: true,
            content: '/web/html/food/newFoodPic.html'
        });
    },

    open: function () {
        layer.open({
            title: "新菜单",
            type: 2,
            area: ['450px', '530px'],
            fix: false, //不固定
            maxmin: true,
            content: '/web/html/food/newFood.html'
        });
    },

    add: function () {
        //todo  ajax
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    },

    close: function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    },

    //=============================================
    //modify
    modify: function (name) {
        //todo ajax to url
        layer.open({
            title: "菜品详情",
            type: 2,
            area: ['450px', '530px'],
            fix: false,
            maxmin: true,
            content: '/web/html/food/newFood.html'
        });
    },

    //=============================================
    //delete
    delete: function (name) {
        //todo ajax to url
        var r = confirm("您确定要删除\"" + name + "\"吗?");
        if (r) {
            $("#" + name).fadeOut(1500, function () {
                $("#" + name).remove();
            });
        }
    },

    save: function (name) {
        var arr = $("#foodname").find("input");
        arr[0].setAttribute("readonly", "readonly");
        arr[1].setAttribute("readonly", "readonly");
        $("#" + name + "modifybtn").show();
        $("#" + name + "savebtn").hide();
    },

    //================================================
    //search
    searchname: function () {
        this.search($("#searchname").val());
    },

    search: function (condition) {
        alert(condition);
    },
    
    classify: function (text) {
        this.search(text);
    }

};