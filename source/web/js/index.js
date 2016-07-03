/**
 * Created by leelddd on 7/2/2016.
 */

var Indexns = {

    lastActiveId : "homepage",

    loadHome: function(){
        this.setActive("homepage");
    },

    loadFood: function () {
        this.setActive("foodpage");
        $("#show").load("/web/html/food.html",
            function(){
                Foodns.getFoodInfo();
            });
        //todo
        //$.ajax({
        //    type: "get",
        //    async: false,
        //    url: "/web/html/food.html",
        //    //data: data,
        //    timeout: 1000,
        //    success: function (dates) {
        //        $("#user").html(dates);//要刷新的div
        //    },
        //    error: function () {
        //        // alert("失败，请稍后再试！");
        //    }
        //});
    },

    loadOrder: function () {
        this.setActive("orderpage");
        $("#show").load("/web/html/order.html");
        //todo
        //remove load and use ajax and change dom
    },

    loginIn: function() {

    },

    setActive: function(id){
        document.getElementById(this.lastActiveId).setAttribute("class", "");
        document.getElementById(id).setAttribute("class", "active");
        this.lastActiveId = id;
    }

};