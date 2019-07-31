var Admin = function () {};
Admin.prototype = {
    rank: function () {
        $.ajax({
            url: basePath + '/unitEfficiencyRanking/getAll',
            type: 'GET',
            success: function (result) {
                var list;
                var li;
                var dom = $('#rank');
                var city = sessionStorage.getItem('selected');
                for (var i = 0; i < result.length; i++) {
                    if (result[i].city == city) {
                        list = result[i].list;
                    }
                }
                for (var k = 0; k < list.length; k++) {
                    li = '<li class="list_body clearfix">'
                       + '<span><div class="liner"></div>' + (k + 1) + '</span>'
                       + '<span title="' + list[k].administrativeUnits + '"><div class="liner"></div><div class="img"><img src="' + basePath + '/static/image/upload/' + list[k].city + '_' + list[k].administrativeUnits.trim() + '.png"></div>' + list[k].administrativeUnits + '</span>'
                       + '<span>' + list[k].efficiency + '</span>'
                       + '</li>';
                    dom.append(li);
                }
            }
    })
    },
    appeal: {
        name: '诉求细分',
        tabName: [
            {
                name: '市场环境问题',
                icon: 'fa fa-line-chart',
                id: '1',
                color: '#F46A68'
            },
            {
                name: '政务环境问题',
                icon: 'fa fa-university',
                id: '2',
                color: '#DBC051'
            },
            {
                name: '法治环境问题',
                icon: 'fa fa-gavel',
                id: '3',
                color: '#6FCF9D'
            },
            {
                name: '社会环境问题',
                icon: 'fa fa-users',
                id: '4',
                color: '#39D4E0'
            },
            {
                name: '要素环境问题',
                icon: 'fa fa-link',
                id: '5',
                color: '#E486E4'
            },
            {
                name: '设施环境问题',
                icon: 'fa fa-road',
                id: '6',
                color: '#B67853'
            }
        ],
        run: /**
         *
         * @param id{string} dom对象的id
         * @param tabId{string} dom对象存在tab时，传tab的id
         */
            function (id, tabId) {
                var li;
                var dom = $('#' + id);
                dom.find('h3').html(this.name);
                for (var i = 0; i < this.tabName.length; i++) {
                    if (i == 0) {
                        li = '<li class="tab_btn active" data-id="' + this.tabName[i].id + '" onclick=admin.appeal.getDatas("' + this.tabName[i].id + '","'+ this.tabName[i].color +'")>'
                            + '<i class="' + this.tabName[i].icon + '"></i>'
                            + '<span>' + this.tabName[i].name + '</span>'
                            + '</li>';
                    }else {
                        li = '<li class="tab_btn" data-id="' + this.tabName[i].id + '" onclick=admin.appeal.getDatas("' + this.tabName[i].id + '","'+ this.tabName[i].color +'")>'
                            + '<i class="' + this.tabName[i].icon + '"></i>'
                            + '<span>' + this.tabName[i].name + '</span>'
                            + '</li>';
                    }
                    $("#" + tabId).append(li);
                }
        },
        initDatas: (function () {
            var list;
            var secondClass = [];
            var secondClassValue = [];
            var degree = [];
            var datas = [];
            var option;
            $.ajax({
                url: basePath + '/appealSubdivide/getAll',
                type: 'GET',
                async : false,
                success: function (result) {
                    list = result.secondClass;
                    for (var i = 0; i < list.length; i++) {
                        var spidArr = [];
                        var spidNum = [];
                        if (secondClass.indexOf(list[i].name) == -1) {
                            secondClass.push(list[i].name);
                            spidArr.push(list[i].spid);
                            secondClassValue.push(
                                {
                                    value: '(' + list[i].sum + ')\n' + list[i].name,
                                    typeName: list[i].name,
                                    textStyle: {
                                        color: '#4C80C9'
                                    },
                                    spid: spidArr,
                                    spidNum: spidNum,
                                    secondPid: i + 1,
                                    totalNum: list[i].sum
                                }
                            );
                            spidNum.push(list[i].sum);
                        }else {
                            secondClassValue[secondClass.indexOf(list[i].name)].spid.push(list[i].spid);
                            secondClassValue[secondClass.indexOf(list[i].name)].spidNum.push(list[i].sum);
                            secondClassValue[secondClass.indexOf(list[i].name)].totalNum += list[i].sum;
                        }
                        for (var l = 0; l < list[i].thirdClass.length; l++) {
                            var data = {
                                value: [],
                                itemStyle: {
                                    normal: {
                                    }
                                }
                            };
                            data.value[0] = Math.floor(list[i].thirdClass[l].percent);
                            data.value[1] = secondClass.indexOf(list[i].name);
                            data.value[2] = Math.floor(list[i].thirdClass[l].percent) / 15;
                            data.value[4] = list[i].thirdClass[l].name;
                            data.value[5] = list[i].thirdClass[l].pid;
                            data.value[6] = list[i].thirdClass[l].percent;
                            if (secondClass.indexOf(list[i].name) == -1) {
                                data.value[7] = i + 1;
                            }else {
                                data.value[7] = secondClassValue[secondClass.indexOf(list[i].name)].secondPid;
                            }
                            data.itemStyle.normal = {
                                color: '#1251AE',
                                borderColor: '#3A81D1',
                                borderWidth: 2,
                                shadowColor: '#3A81D1',
                                shadowBlur: 5
                            };
                            datas.push(data);
                        }
                    }
                    for (var k = 0; k < 100; k++) {
                        degree.push(i);
                    }
                    option = {
                        polar: {},
                        grid: {
                            top: 0,
                            bottom: 0
                        },
                        tooltip: {
                            formatter: function (params) {
                                return params.value[4] + '：' + params.value[6] + '%';
                            }
                        },
                        dataZoom: {
                            type: 'slider',
                            backgroundColor: 'rgba(47, 69, 84, 0)',
                            dataBackground: {
                                areaStyle: {
                                    color: 'rgba(47,69,84,0.2)'
                                },
                                lineStyle: {
                                    opacity: 0.1
                                }
                            },
                            radiusAxisIndex: 0,
                            filterMode: 'empty',
                            orient: 'vertical',
                            fillerColor: 'rgba(167,183,204,0.1)',
                            borderColor: '#345580',
                            labelFormatter: function (value) {
                                return '';
                            }
                        },
                        angleAxis: {
                            type: 'category',
                            data: secondClassValue,
                            boundaryGap: false,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#2D4674',
                                    type: 'dashed'
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                align: 'center',
                                margin: 15
                            }
                        },
                        radiusAxis: {
                            type: 'category',
                            data: degree,
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        series: [{
                            name: 'appeal',
                            type: 'scatter',
                            coordinateSystem: 'polar',
                            symbolSize: function (val) {
                                return val[2] * 2;
                            },
                            largeThreshold: 200,
                            data: datas
                        }]
                    };
                }
            });
            return option;
        })(),
        getDatas: /**
         *
         * @param id
         * @param color
         */
            function (id, color) {
            var option = this.initDatas;
            var secondClass = option.angleAxis.data;
            var list = option.series[0].data;
            var myChart = echarts.init(document.getElementById('appealChart'));
            for (var n = 0; n < secondClass.length; n++) {
                var index = secondClass[n].spid.indexOf(parseInt(id));
                if (index != -1) {
                    secondClass[n].value = '(' + secondClass[n].spidNum[index] + ')\n' + secondClass[n].typeName;
                    secondClass[n].textStyle = {
                        color: color,
                        fontSize: 14
                    };
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].value[5] == id && list[i].value[7] == secondClass[n].secondPid) {
                            list[i].itemStyle.normal.color = color;
                            list[i].itemStyle.normal.borderColor = color;
                            list[i].itemStyle.normal.shadowColor = color;
                            list[i].itemStyle.normal.shadowBlur = 5;
                            list[i].itemStyle.normal.borderWidth = 2;
                            list[i].itemStyle.normal.opacity = 1;
                        }else if (list[i].value[5] != id && list[i].value[7] == secondClass[n].secondPid) {
                            list[i].itemStyle.normal.color = '#1251AE';
                            list[i].itemStyle.normal.borderColor = '#3A81D1';
                            list[i].itemStyle.normal.shadowColor = '#3A81D1';
                            list[i].itemStyle.normal.shadowBlur = 5;
                            list[i].itemStyle.normal.borderWidth = 2;
                            list[i].itemStyle.normal.opacity = 0;
                        }
                    }
                }else {
                    secondClass[n].value = '(' + secondClass[n].totalNum + ')\n' + secondClass[n].typeName;
                    secondClass[n].textStyle = {
                        color: '#4C80C9',
                        fontSize: 12
                    };
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].value[5] != id && list[i].value[7] == secondClass[n].secondPid) {
                            list[i].itemStyle.normal.color = '#1251AE';
                            list[i].itemStyle.normal.borderColor = '#3A81D1';
                            list[i].itemStyle.normal.shadowColor = '#3A81D1';
                            list[i].itemStyle.normal.shadowBlur = 5;
                            list[i].itemStyle.normal.borderWidth = 2;
                            list[i].itemStyle.normal.opacity = 1;
                        }
                    }
                }
            }
            for (var k = 0; k < this.tabName.length; k++) {
                if (this.tabName[k].id == id) {
                    $('#tabBtn').find('li').eq(k).addClass('active');
                }else {
                    $('#tabBtn').find('li').eq(k).removeClass('active');
                }
            }
            myChart.setOption(option);
        }
    },
    monitor: {
        charts:{
            monitor: (function () {
                var myData = {};
                function monitor(data) {
                    var serise = data["serise"];
                    var i;
                    for(i in serise){
                        if(serise[i][0] > 25){
                            serise[i][0] = 25;
                        }
                        else if(serise[i][1] > 10){
                            serise[i][1] = 10;
                        }
                    }
                    myData.option = {
                        grid: {
                            containLabel: true,
                            right: '16%',
                            left: '5%',
                            bottom: 0,
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: function (params) {
                                return data['xAxis_name'] + ":" + params.value[0] + data['yAxis_name'] + ":" + params.value[1]
                            }
                        },
                        title: {
                            text: "",
                            subtext: "",
                            left: "center"
                        },
                        xAxis: {
                            name: data['xAxis_name'],
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#1EA0DC',

                                }
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                interval: 2,
                                showMinLabel: false,
                            },
                            max: 25,
                            splitNumber: 2,
                            interval: 12.5,
                            axisLine: {
                                lineStyle: {
                                    color: '#1EA0DC',
                                    width: 1
                                }
                            },
                        },
                        yAxis: {
                            name: data['yAxis_name'],
                            max: 10,
                            splitNumber: 2,
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#1EA0DC',

                                }
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                interval: 2,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1EA0DC',
                                    width: 1
                                }
                            },
                            splitArea: {
                                show: true,

                                areaStyle: {
                                    color: '#07285B'
                                }
                            }

                        },
                        series: [{
                            name: '不良企业监控',
                            data: serise,
                            type: 'scatter',
                            symbolSize: 10,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value[2]
                                    },
                                    position: 'bottom',
                                    color: '#fff',
                                    fontSize: 9,

                                },
                                emphasis: {
                                    show: true,
                                    formatter: function (param) {
                                        return param.data[3];
                                    },
                                    position: 'right'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                                    shadowOffsetY: 5,
                                    color: function (params) {
                                        var color1 = '#DE5D61';
                                        var color2 = '#D0AD38';
                                        var color3 = '#4669C8';
                                        // build a color map as your need.
                                        if (params.value[0] <= 12.5) {
                                            if (params.value[1] <= 5) {
                                                return color3
                                            } else {
                                                return color1
                                            }
                                        } else if(12.5 < params.value[0] < 25){
                                            if (params.value[1] <= 5) {
                                                return color3
                                            } else {
                                                return color2
                                            }
                                        }
                                    }
                                }
                            }
                        },]
                    };
                    myData.subTitle = data.city + data.most + '环节和材料数量最多，' + data.least + '环节和材料数量最少';
                }
                $.ajax({
                    url:basePath+"/adverseEnterpriseMonitoring/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        monitor(result);
                    }
                });
                return myData;
            })(),
            examine: (function () {
                var table;
                $.ajax({
                    url:basePath+"/adverseEnterpriseMonitoring/getAllTwo",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        var obj = result[0].obj;
                        table = '<table>'
                              + '<thead>'
                              + '<tr>'
                              + '<th width="25%">优质服务</th>'
                              + '<th width="25%">可优化服务</th>'
                              + '<th width="25%">流程较多</th>'
                              + '<th width="25%">材料较多</th>'
                              + '</tr>'
                              + '</thead>'
                              + '<tbody>';
                        for (var i = 0; i < 5; i++) {
                            table += '<tr>'
                                   + '<td>' + obj.highQualityService[i] + '</td>'
                                   + '<td>' + obj.optimizedService[i] + '</td>'
                                   + '<td>' + obj.processIsMore[i] + '</td>'
                                   + '<td>' + obj.materialIsMore[i] + '</td>'
                                   + '</tr>'
                        }
                        table += '</thead>'
                               + '</tbody>'
                               + '</table>';
                    }
                });
                return table;
            })(),
            appealProblem: (function () {
                var myData = {};
                function appeal(data) {
                    var series = [];
                    for (var i = 0; i < data.series.length; i++) {
                        if (i === 0) {
                            for (var k in data.series[i]) {
                                series.push(
                                    {
                                        tooltip: {
                                            trigger: 'item',
                                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                                        },
                                        series:[{
                                            name: '诉求问题分类',
                                            type: 'pie',
                                            radius: ['10%', '60%'],
                                            center: ['60%', '68%'],
                                            data: data.series[i][k],
                                            itemStyle: {
                                                normal: {
                                                    color: function (params) {
                                                        var colorList = ['#329DC3', '#73BB79', '#EDDB96', '#EF8B84', '#B56CC2'];
                                                        return colorList[params.dataIndex]
                                                    },
                                                    borderWidth: 0.1,
                                                    borderColor: '#00204B'
                                                }
                                            },
                                            label: {
                                                normal: {
                                                    color: '#9AA5BA'
                                                }
                                            },
                                            labelLine: {
                                                normal: {
                                                    lineStyle: {
                                                        color: '#9AA5BA',
                                                        width: 0.7
                                                    }
                                                }
                                            }
                                        }]
                                    }
                                )
                            }
                        }else {
                            for (var k in data.series[i]) {
                                series.push(
                                    {
                                        series:[{
                                            name: '诉求问题分类',
                                            type: 'pie',
                                            data: data.series[i][k]
                                        }]
                                    }
                                )
                            }
                        }
                    }
                    myData.option = {
                        timeline: {
                            data: data.timeline,
                            symbolRotate: '30',
                            axisType: 'category',
                            symbolSize: 10,
                            autoPlay: true,
                            playInterval: 5000,
                            tooltip: {show: false},
                            top: 0,
                            left: 10,
                            right: 10,
                            controlStyle: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: '#134C7A',
                                    borderWidth: 2,
                                    borderColor: '#3390BC',
                                    shadowBlur: 10,
                                    shadowColor: '#143560'
                                },
                                emphasis: {
                                    color: '#524A4D',
                                    borderWidth: 3,
                                    borderColor: '#F2A557',
                                    shadowBlur: 20,
                                    shadowColor: '#544B42'
                                }
                            },
                            lineStyle: {
                                color: '#237EAD',
                                width: 0.8
                            },
                            label: {
                                normal: {
                                    color: '#237EAD',
                                    fontWeight: 'bolder',
                                    position: 'bottom',
                                    interval: 0,
                                },
                            },
                            checkpointStyle: {
                                color: '#524A4D',
                                borderWidth: 5,
                                symbolSize: 15,
                                borderColor: '#F2A557',
                                shadowBlur: 20,
                                shadowColor: '#544B42',
                                animationDuration: '1000'
                            },
                        },
                        options: series
                    };
                    myData.subTitle = '最新月份' + data['最新月份最多问题诉求'] + '问题诉求最多，环比增长（降低）' + data['最多问题诉求环比增长（降低）'] + '%；本月' + data['最新月份最少问题诉求'] + '问题诉求最少，环比增长（降低）' + data['最少问题诉求环比增长（降低）'] + '%';
                }
                $.ajax({
                    url:basePath+"/appealProblemType/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        appeal(result);
                    }
                });
                return myData;
            })(),
            appealMail: (function () {
                var myData = {};
                function appeal1(data) {
                    myData.option = {
                        title: {
                            text: '',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}: {c}%'
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            data: data['xAxis'],
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1EA0DC',
                                    width: 1
                                }
                            },
                        }],
                        yAxis: [{
                            name: '100%',
                            max: 100,
                            nameTextStyle: {
                                color: '#fff'
                            },
                            type: 'value',
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1EA0DC',
                                    width: 1
                                }
                            },
                        }],
                        series: [{
                            name: '诉求信件来源',
                            type: 'bar',
                            data: data['series'],
                            barGap: '100%',
                            barWidth: 50,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{c}%',
                                    position: 'top',
                                    distance: 10,
                                    color: function (params) {
                                        var color1 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#43CCBE'},
                                                {offset: 1, color: '#216978'}
                                            ]
                                        );
                                        var color2 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#5293E3'},
                                                {offset: 1, color: '#26487F'}
                                            ]
                                        );
                                        var color3 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#C1844E'},
                                                {offset: 1, color: '#514744'}
                                            ]
                                        );
                                        // build a color map as your need.
                                        var colorList = [
                                            color1, color2, color3
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        var color1 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#43CCBE'
                                            }, {
                                                offset: 1,
                                                color: '#216978'
                                            }]
                                        );
                                        var color2 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#5293E3'
                                            }, {
                                                offset: 1,
                                                color: '#26487F'
                                            }]
                                        );
                                        var color3 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#C1844E'
                                            }, {
                                                offset: 1,
                                                color: '#514744'
                                            }]
                                        );
                                        // build a color map as your need.
                                        var colorList = [
                                            color1, color2, color3
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                        }]
                    };
                    myData.subTitle = data['群众最爱使用的诉求渠道'] + '是群众最爱使用的诉求渠道，诉求人群的信息化使用程度还需要提高，需要加强';
                    for (var n = 0; n < data['剩下两个渠道'].length; n++) {
                        if (n === data['剩下两个渠道'].length - 1) {
                            myData.subTitle += data['剩下两个渠道'][n];
                        }else {
                            myData.subTitle += data['剩下两个渠道'][n] + '、';
                        }
                    }
                    myData.subTitle += '等渠道的使用培训';
                }
                $.ajax({
                    url:basePath+"/appealLetterSource/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        appeal1(result);
                    }

                });
                return myData;
            })(),
            satisfaction: (function () {
                var myData = {};
                function satisfaction(data) {
                    var paiW = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                    var series = [];
                    var areaStyle = [{
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#B5EE7C'
                            }, {
                                offset: 0.8,
                                color: '#1E3952'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },{
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3C69B1'
                            }, {
                                offset: 0.8,
                                color: '#1E3952'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },{
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3C69B1'
                            }, {
                                offset: 0.8,
                                color: '#1E3952'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    }
                    ];
                    var itemStyle = [{
                        normal: {
                            color: '#B5EE7C'
                        }
                    },{
                        normal: {
                            color: '#2dace8'
                        },
                    },{
                        normal: {
                            color: '#2dace8'
                        },
                    }];
                    for(var i = 0; i < data.legend.length; i++){
                        var lineData = data[data['legend'][i]];
                        var series_i = {
                            name: data['legend'][i],
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            },
                            areaStyle: areaStyle[i],
                            itemStyle: itemStyle[i],
                            data: lineData,
                            yAxisIndex: i,
                        };
                        series.push(series_i);
                    }
                    myData.option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                lineStyle: {
                                    color: '#57617B'
                                }
                            }
                        },
                        xAxis: [{
                            name: '(月)',
                            type: 'category',
                            boundaryGap: false,
                            axisLine : {lineStyle : {color : '#1E88C4', width : 2}},
                            axisLabel:{
                                textStyle:{
                                    color:"#1E88C4"
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show:true,
                                lineStyle: {
                                    color: '#122e43',
                                    width: 0.9
                                }
                            },
                            data: paiW
                        }],
                        yAxis: [{
                            name: '(个)',
                            max: 1500,
                            splitNumber: 3,
                            type: 'value',
                            axisTick: {
                                show: false
                            },
                            axisLabel:{
                                textStyle:{
                                    color:"#1E88C4"
                                }
                            },
                            axisLine : {lineStyle : {color : '#1E88C4', width : 2}},
                            splitLine: {
                                lineStyle: {
                                    color: '#122e43',
                                    width: 0.7
                                }
                            }
                        },{
                            name: '(百分数)',
                            max: 100,
                            min: 0,
                            splitNumber: 4,
                            interval: 25,
                            type: 'value',
                            axisTick: {
                                show: false
                            },
                            axisLabel:{
                                textStyle:{
                                    color:"#1E88C4"
                                },
                                formatter: '{value}%',
                                showMinLabel: false,
                            },
                            axisLine : {lineStyle : {color : '#1E88C4', width : 2}},
                            splitLine: {
                                lineStyle: {
                                    color: '#122e43',
                                    width: 0.7
                                }
                            }
                        }],
                        legend: {
                            bottom: 0,
                            data: data['legend'],
                            textStyle: {color: '#1E88C4'}
                        },
                        series : series
                    };
                    myData.subTitle = '当前月投诉数量为' + data['最新月投诉数量'] + '，较上一个月增加（减少）' + data['投诉数量较上一个月增加（减少）'] + '%，截止到目前最高值为' + data['投诉数量截止到目前最高值'] + '，最低值为' + data['投诉数量截止到目前最低值'] + '，平均值为' + data['投诉数量截止到目前平均值'] + '；当前月回访满意度为' + data['最新月回访满意度'] + '，较上一个月增加（减少）' + data['回访满意度较上一个月增加（减少）'] + '%，截止到目前最高值为' + data['回访满意度截止到目前最高值'] + '，最低值为' + data['回访满意度截止到目前最低值'] + '，平均值为' + data['回访满意度截止到目前平均值'] + '。';
                }
                $.ajax({
                    url:basePath+"/crowdSatisfaction/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        satisfaction(result);
                    }
                });
                return myData;
            })()
        },
        run: /**
         *
         * @param id{string} dom对象的id
         * @param title{string} dom对象的标题名称
         * @param isSubTitle{boolean} dom对象是否有副标题
         * @param chartId{string} dom对象生成echart的id名称
         * @param tabNavId{string} dom对象存在tab时，传tab的id
         */
            function (id, title, isSubTitle, chartId, tabNavId) {
                var dom = $('#' + id);
                dom.find('h3').html(title);
                if (chartId) {
                    if (chartId === 'examineChart') {
                        $('#' + chartId).append(this.charts[id]);
                    }else {
                        var myChart = echarts.init(document.getElementById(chartId));
                        myChart.setOption(this.charts[id].option);
                    }
                }
                if (isSubTitle) {
                    var subTitle;
                    subTitle = this.charts[id].subTitle;
                    dom.find('small').html(subTitle);
                }
        }
    }
};
var admin = new Admin();
admin.rank();
admin.appeal.getDatas("1", '#F46A68');
admin.appeal.run('appeal', 'tabBtn');
admin.monitor.run('monitor', '不良企业监控', true, 'monitorChart');
admin.monitor.run('examine', '行政审批监控分析', false, 'examineChart');
admin.monitor.run('appealProblem', '诉求问题分类', true, 'appealProblemeChart');
admin.monitor.run('appealMail', '诉求信件来源', true, 'appealMailChart');
admin.monitor.run('satisfaction', '群众满意度', true, 'satisfactionChart');