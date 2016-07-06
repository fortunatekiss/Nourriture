/**
 * Created by leelddd on 6/14/16.
 */

var graphns = {

    init: function (kwd, journal, author) {
        this.kwd(kwd);
        //this.journal(journal);
        //this.author(author);
    },
    
    kwd: function (str) {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
         var str = '{"number":[{"date":"2016/1","number":100000},' +
             '{"date":2016/2,"number":200000},' +
             '{"date":2016/3,"number":234322},' +
             '{"date":2016/4,"number":324342},' +
             '{"date":2016/5,"number":124343}]}';
        var json = eval('(' + str + ')');
        var str1 = new Array();
        var str2 = new Array();
        for (var i = 0; i < json.number.length; i++) {
            str1[i] = json.number[i].date;
            str2[i] = json.number[i].number;
        }
// 指定图表的配置项和数据
        require(
            [
                '/web/echarts/echarts.min',
                '/web/echarts/echarts/config',
                '/web/echarts/zrender/tool/event',
                '/web/echarts/zrender/mixin/Eventful'
            ],

            function(ec) {
                var option = {
                    title: {
                        text: '营业额统计',
                        subtext: 'rank 10',
                        x: 'center',
                        align: 'right'
                    },
                    tooltip: {trigger: 'axis'},
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {readOnly:false},
                            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : 0,
                        end : 100
                    },
                    color: [
                        //'#629fa6',
                        '#577d9b',
                        //'#cccccc',
                        '#629fa6',
                        //'#c33532',
                    ],
                    legend: {
                        data: ['柱状图', '折线图'],
                        x: 'left'
                        // data: ['关键词']
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            interval: 0,
                            rotate: 45,
                            margin: 2,
                            textStyle: {
                                color: "#345"
                            }
                        },
                        data: str1
                    },
                    yAxis: {
                        name: '次数',
                        type: 'value'
                    },
                    series: [{
                        name: '柱状图',
                        type: 'bar',
                        barWidth: 30,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'insideTop',
                                    textStyle: {
                                        color: '#000'
                                    }
                                }
                            }
                        },
                        data: str2
                    }, {
                        name: '折线图',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'insideBottom',
                                    textStyle: {
                                        color: '#D9EDF7'
                                    }
                                }
                            }
                        },
                        data: str2
                    }]
                }
                var ecConfig = require("/web/echarts/echarts/config");
                var zrEvent = require('/web/echarts/zrender/tool/event');
                myChart.on(ecConfig.EVENT.CLICK, eConsole);
                function eConsole(param) {
                    alert(str1[param.dataIndex]);
                    // window.open("http://www.baidu.com");
                    console.log(param);
                }
        myChart.setOption(option);})
    },

};