/**
 * Created by leelddd on 7/2/2016.
 */

var Indexns = {

    restaurant: "",

    lastActiveId: "homepage",

    loadHome: function () {
        this.setActive("homepage");
        $("#show").load("/web/html/restaurant/restaurant.html",
            function () {
                $("#").val(this.restaurant.id)
            });
    },

    loadFood: function () {
        this.setActive("foodpage");
        $("#show").load("/web/html/food/food.html",
            function () {
                Foodns.getFoodInfo();
            });
    },

    loadOrder: function () {
        this.setActive("orderpage");
        $("#show").load("/web/html/order/order.html", function () {
            this.assignLayer("fromdate");
            this.assignLayer("todate");
        });
    },

    loadAnalyze: function () {
        this.setActive("analyzepage");
        $("#show").load("/web/html/analyze/analyze.html",
            function () {
                graphns.init();
            });
    },

    loaduser: function () {
        this.setActive("userpage");
        $("#show").load("/web/html/user/user.html",
            function(){
            });
    },

    loadmessage: function () {
        this.setActive("messagepage");
        $("#show").load("/web/html/message/message.html",
            function(){
            });
    },

    loadNotification: function () {
        this.setActive("notifypage");
        $("#show").load("/web/html/message/notify.html",
            function(){
            });
    },

    logout: function () {
        $("#show").load("/web/html/restaurant/login.html");
        //$("#show").get('/web/html/restaurant/login.html', function(result){
        //    $result = $(result);
        //
        //    $result.find('#content').appendTo('#new_content');
        //    $result.find('script').appendTo('#new_content');
        //}, 'html');
    },

    //=========================================================================
    //tools function
    setActive: function (id) {
        document.getElementById(this.lastActiveId).setAttribute("class", "");
        document.getElementById(id).setAttribute("class", "active");
        if(id==="notifypage"){
            document.getElementById(id).setAttribute("class", "active pull-right");
        }
        if(this.lastActiveId==="notifypage"){
            document.getElementById(this.lastActiveId).setAttribute("class", "active pull-right");
        }
        this.lastActiveId = id;
    },

    assignLayer: function (id) {
        $("#"+id).datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
    }
};

function login(){


    alert("login");
     $.ajax({
         type: "get",
         async: false,
         url: "/login",
         data: {name:$("#username").val(), password:$("#password").val()},
         timeout: 1000,
         success: function (dates) {
             alert("success");
         },
         error: function () {
         }
     });
}