var Social = function () { };
Social.prototype = {
    monitor: {
        charts: {
            social: (function () {
                var myData = {};
                function socialEnvAssessment(e_data1) {
                    myData.option = {
                        legend: {
                            data: e_data1.relations,//此处的数据必须和关系网类别中name相对应
                            orient: 'vertical',
                            bottom: 50,
                            right: 25,
                            itemGap: 25,
                            textStyle: {
                                color: '#1FA2D8',
                                fontSize: 14
                            },
                            shadowColor: 'rgba(255, 255, 255, 0.5)',
                            shadowBlur: 20
                        },
                        color: ['#88ccf4', "#f3a0a1", '#decd95', '#81dab9', '#e899e4'],
                        icon: 'circle',
                        series: [{
                            type: 'graph',
                            layout: 'force',
                            animation: false,
                            symbolSize: 10,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: 760,
                            height: 590,
                            label: {
                                normal: {
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },
                            draggable: true,
                            data: e_data1.nodes.map(function (node, idx) {
                                node.id = idx;
                                return node;
                            }),
                            categories: e_data1.categories,
                            force: {
                                // initLayout: 'circular'
                                // repulsion: 20,
                                edgeLength: 5,
                                repulsion: 20,
                                gravity: 0.2
                            },
                            links: e_data1.links
                        }]
                    };
                    myData.subTitle = '社会环境评估主要分为五个方面：企业运营成本、投融资、人才供给、企业信用和法制环境；'
                        + '<br>'
                        + '本市企业运营成本、人才供给方面有比较明显的优势，在投融资和企业信用把控方面有待改善。'
                        + '<br><br>'
                        + '左图中每种颜色分别表示对社会环境评估的一个指标，节点数量代表该指标的得分情况，数量越多得分越高，说明本市的社会环境的优势主要体现在该指标上';
                }
                $.ajax({
                    url: basePath + "/SocialEnvironmentAssessmentIndex/getAll",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        socialEnvAssessment(result);
                    }
                });
                return myData;
            })(),
            operate: (function () {
                var myData = {};
                var option;
                var data;
                var li;
                var tab = $('#operateTab');
                $.ajax({
                    url: basePath + "/OperatingCost/getAll",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        data = result;
                        var statusArr = [];
                        for (var i = 0; i < data.length; i++) {
                            if (i === 0) {
                                li = '<li class="active" onclick=social.monitor.charts.loadOperate(' + i + ')>'
                                    + '<h5>' + data[i].name + '</h5>'
                                    + '<h4>' + data[i].price + '</h4>'
                                    + '<small>（' + data[i].unit + '）</small>'
                                    + '<small>全国平均：' + data[i].average + '</small>'
                                    + '<small>全国排名：' + data[i].rank;
                                if (data[i].isUp === 0) {
                                    li += '<i class="fa fa-long-arrow-down" style="color: #E35E3F"></i>'
                                }
                                if (data[i].isUp === 1) {
                                    li += '<i class="fa fa-long-arrow-up" style="color: #7FC646"></i>'
                                }
                                li += '</small>'
                                    + '</li>';
                                tab.append(li);
                            } else {
                                li = '<li onclick=social.monitor.charts.loadOperate(' + i + ')>'
                                    + '<h5>' + data[i].name + '</h5>'
                                    + '<h4>' + data[i].price + '</h4>'
                                    + '<small>（' + data[i].unit + '）</small>'
                                    + '<small>全国平均：' + data[i].average + '</small>'
                                    + '<small>全国排名：' + data[i].rank;
                                if (data[i].isUp === 0) {
                                    li += '<i class="fa fa-long-arrow-down" style="color: #E35E3F"></i>'
                                }
                                if (data[i].isUp === 1) {
                                    li += '<i class="fa fa-long-arrow-up" style="color: #7FC646"></i>'
                                }
                                li += '</small>'
                                    + '</li>';
                                tab.append(li);
                            }

                            switch (data[i].status) {
                                case 0:
                                    statusArr.push('偏低');
                                    break;
                                case 1:
                                    statusArr.push('偏高');
                                    break;
                                case 2:
                                    statusArr.push('适中');
                                    break;
                            }
                        }
                        tab.append('<div class="cross_line"></div>');
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                },
                                formatter: function (params) {
                                    return '当前价格：<span style="color: #F6F36C;font-size: 18px">'
                                        + params[1].data.current
                                        + '</span><br/>'
                                        + '全国最高：' + params[1].data.high + '<br/>'
                                        + '全国最低：' + params[1].data.low + '<br/>'
                                        + '全国平均：' + params[1].data.average + '<br/>';
                                }
                            },
                            xAxis: {
                                type: 'category',
                                name: '（月）',
                                axisLine: {
                                    lineStyle: {
                                        color: '#1FA2D8'
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    color: '#1FA2D8'
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#0B3053',
                                        width: 0.9
                                    }
                                },
                                data: function () {
                                    var list = [];
                                    for (var i = 0; i < data[0].list.length; i++) {
                                        list.push(data[0].list[i].month);
                                    }
                                    return list;
                                }()
                            },
                            yAxis: {
                                type: 'value',
                                name: '（' + data[0].unit + '）',
                                axisLine: {
                                    lineStyle: {
                                        color: '#1FA2D8'
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    color: '#1FA2D8'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: '#0B3053',
                                        width: 0.9
                                    }
                                }
                            },
                            series: [
                                {
                                    name: '辅助数据',
                                    type: 'bar',
                                    stack: '总量',
                                    barWidth: '50%',
                                    itemStyle: {
                                        normal: {
                                            barBorderColor: 'rgba(0,0,0,0)',
                                            color: 'rgba(0,0,0,0)'
                                        },
                                        emphasis: {
                                            barBorderColor: 'rgba(0,0,0,0)',
                                            color: 'rgba(0,0,0,0)'
                                        }
                                    },
                                    data: function () {
                                        var list = [];
                                        for (var i = 0; i < data[0].list.length; i++) {
                                            list.push(data[0].list[i].low);
                                        }
                                        return list;
                                    }()
                                },
                                {
                                    name: '展示数据',
                                    type: 'bar',
                                    stack: '总量',
                                    barWidth: '50%',
                                    itemStyle: {
                                        normal: {
                                            color: {
                                                type: 'radial',
                                                x: 0.5,
                                                y: 0.5,
                                                r: 2,
                                                colorStops: [
                                                    {
                                                        offset: 0, color: 'rgba(70, 206, 252, 1)'
                                                    },
                                                    {
                                                        offset: 1, color: 'rgba(18, 118, 176, 1)' // 100% 处的颜色
                                                    }
                                                ],
                                                globalCoord: false
                                            }
                                        },
                                        emphasis: {
                                            color: {
                                                type: 'radial',
                                                x: 0.5,
                                                y: 0.5,
                                                r: 2,
                                                colorStops: [{
                                                    offset: 0, color: 'rgba(79, 175, 226, 1)'
                                                }, {
                                                    offset: 1, color: 'rgba(97, 231, 243, 1)' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            },
                                            borderWidth: 0,
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    markPoint: {
                                        symbol: 'path://m-100 -100 h100 v1 h-100 z',
                                        symbolSize: 1,
                                        itemStyle: {
                                            normal: {
                                                color: '#3292C5',
                                                borderColor: '#34DDF2',
                                                borderWidth: 40
                                            },
                                            emphasis: {
                                                color: '#34DDF2',
                                                borderColor: '#34DDF2',
                                                borderWidth: 40
                                            }
                                        },
                                        label: {
                                            normal: {
                                                show: false
                                            }
                                        },
                                        data: function () {
                                            var list = [];
                                            for (var i = 0; i < data[0].list.length; i++) {
                                                list.push(
                                                    {
                                                        coord: [i, data[0].list[i].average]
                                                    }
                                                );
                                            }
                                            return list;
                                        }()
                                    },
                                    data: function () {
                                        var list = [];
                                        for (var i = 0; i < data[0].list.length; i++) {
                                            list.push(
                                                {
                                                    value: data[0].list[i].high - data[0].list[i].low,
                                                    current: data[0].list[i].price,
                                                    high: data[0].list[i].high,
                                                    low: data[0].list[i].low,
                                                    average: data[0].list[i].average
                                                }
                                            );
                                        }
                                        return list;
                                    }()
                                }
                            ]
                        };
                        myData.subTitle = '企业的基础运营成本主要体现在办公物业、商业用电、运输物流和商业用水价格上。实时爬取动态监测结果显示，本市办公物业价格目前' + statusArr[0] + '，商业水电价格' + statusArr[1] + '，运输物流价格' + statusArr[2] + '，商业用水价格' + statusArr[3];
                        myData.option = option;
                        myData.data = data;
                    }
                });
                return myData;
            })(),
            fund: (function () {
                var myData = {};
                function fundingOpportunity(e_data2) {
                    myData.option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {
                                    lineStyle: {
                                        color: '#1FA2D8'
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#0B3053',
                                        width: 0.9
                                    }
                                },
                                axisLabel: {
                                    color: '#1FA2D8'
                                },
                                data: e_data2.month
                            }
                        ],
                        yAxis: [
                            {
                                name: '（个）',
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#1FA2D8'
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    color: '#1FA2D8'
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: '#0B3053',
                                        width: 0.9
                                    }
                                }
                            },
                            {
                                name: '（亿元）',
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#1FA2D8'
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    color: '#1FA2D8'
                                },
                                splitLine: {
                                    show: false,
                                    lineStyle: {
                                        color: '#0B3053'
                                    }
                                }
                            }
                        ],
                        legend: {
                            data: [
                                {
                                    name: '投资机构的数量',
                                    textStyle: {
                                        color: '#3097E7'
                                    }
                                },
                                {
                                    name: '新增投融资额度',
                                    textStyle: {
                                        color: '#AE3DC5'
                                    }
                                }
                            ],
                            bottom: '5%',
                            left: 'center'
                        },
                        color: ['#3097E7', '#AE3DC5'],
                        series: [
                            {
                                name: '投资机构的数量',
                                type: 'line',
                                tooltip: {
                                    trigger: 'axis'
                                    // formatter: '{a} <br/>{b}日: {c}元'
                                },
                                smooth: true,
                                lineStyle: {
                                    normal: {
                                        width: 1
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(48, 151, 231, 0.8)'
                                        }, {
                                            offset: 0.8,
                                            color: 'rgba(48, 151, 231, 0)'
                                        }], false),
                                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                                        shadowBlur: 10
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(48,151,231)'
                                    }
                                },
                                data: e_data2.data.data_left
                            },
                            {
                                name: '新增投融资额度',
                                type: 'line',
                                tooltip: {
                                    trigger: 'axis'
                                    // formatter: '{a} <br/>{b}日: {c}元'
                                },
                                yAxisIndex: 1,
                                smooth: true,
                                lineStyle: {
                                    normal: {
                                        width: 1
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(174, 61, 197, 0.3)'
                                        }, {
                                            offset: 0.8,
                                            color: 'rgba(174, 61, 197, 0)'
                                        }], false),
                                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                                        shadowBlur: 10
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(174,61,197)'
                                    }
                                },
                                data: e_data2.data.data_right
                            }
                        ]
                    };
                    myData.subTitle = '投资机构数量和新增投融资的额度能够体现本市的投融资情况，目前本市资金获取机会比较大，适合入驻';
                }
                $.ajax({
                    url: basePath + "/FundsOpportunity/getAll",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        fundingOpportunity(result);
                    }
                });
                return myData;
            })(),
            monitor: (function () {
                var myData = {};
                myData.div = '<div>'
                    + '<div class="mark-da mark-arrowbg">'
                    + '<div class="arrow-img"></div>'
                    + '<div style="width: 600px;height: 300px"></div>'
                    + '</div>'
                    + '</div>';
                myData.option = {
                    timeline: {
                        data: [
                            '5:00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00', '12：00', '13：00', '14：00', '15：00', '16：00', '17：00', '18：00', '19：00', '20：00', '21：00', '22：00', '23：00'
                        ],
                        axisType: 'category',
                        show: false,
                        autoPlay: true,
                        playInterval: 1000
                    },
                    options: [{
                        title: {
                            'text': '',
                            'subtext': ''
                        },
                        tooltip: {
                            'trigger': 'item'
                        },
                        legend: {
                            "show": true,
                            'data': ['']
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(96, 180,157, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(96, 180,157, 0.1)'
                                }]),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        calculable: true,
                        grid: {
                            'y': 80,
                            'y2': 100
                        },
                        xAxis: [{
                            'type': 'category',
                            'axisLabel': {
                                'interval': 0,
                                color: '#1FA2D8'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1FA2D8'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            'data': []
                        }],
                        yAxis: [{
                            'type': 'value',
                            'name': '',
                            'max': 200,
                            axisLine: {
                                lineStyle: {
                                    color: '#1FA2D8'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: '#1FA2D8'
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#0B3053'
                                }
                            }
                        }, {
                            'type': 'value',
                            show: false
                        }],
                        series: [
                            {
                                'name': '',
                                'yAxisIndex': 1,
                                'type': 'bar',
                                barWidth: '50%'
                            }]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 52, 20, 30, 60, 40, 70, 40, 30, 10, 90, 55, 22, 33, 55, 10]
                        }]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            "data": [30, 42, 30, 10, 30, 20, 50, 20, 30, 60, 40, 70, 40, 30, 10, 90]
                        }]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 25, 10, 30, 60, 40, 30, 20, 50, 20, 30, 60, 40, 70, 40]
                        }]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [20, 32, 10, 40, 30, 50, 70, 25, 10, 30, 60, 40, 30, 20, 50, 20]
                        }]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [30, 22, 27, 35, 40, 20, 40, 25, 10, 30, 60, 40, 30, 20, 50, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 57, 45, 30, 20, 60, 22, 27, 35, 40, 20, 40, 25, 10, 30]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [60, 42, 37, 65, 20, 10, 50, 45, 30, 20, 60, 22, 27, 35, 40, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 52, 20, 30, 60, 40, 70, 37, 65, 20, 10, 50, 45, 30, 20, 60]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [30, 42, 30, 10, 30, 20, 50, 30, 60, 40, 70, 37, 65, 20, 10, 50]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 25, 10, 30, 60, 40, 42, 30, 10, 30, 20, 50, 30, 60, 40]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [20, 32, 10, 40, 30, 50, 70, 10, 30, 60, 40, 42, 30, 10, 30, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [30, 22, 27, 35, 40, 20, 40, 10, 30, 60, 40, 42, 30, 10, 30, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 57, 45, 30, 20, 60, 35, 40, 20, 40, 10, 30, 60, 40, 42]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [60, 42, 37, 65, 20, 10, 50, 35, 40, 20, 40, 10, 30, 60, 40, 42]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 52, 20, 30, 60, 40, 70, 37, 65, 20, 10, 50, 35, 40, 20, 40]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [30, 42, 30, 10, 30, 20, 50, 52, 20, 30, 60, 40, 70, 37, 65, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 25, 10, 30, 60, 40, 52, 20, 30, 60, 40, 70, 37, 65, 20]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [20, 32, 10, 40, 30, 50, 70, 32, 25, 10, 30, 60, 40, 52, 20, 30]
                        },]
                    }, {
                        title: {
                            'text': ''
                        },
                        series: [{
                            'data': [10, 32, 57, 45, 30, 20, 60, 32, 25, 10, 30, 60, 40, 52, 20, 30]
                        },]
                    }]
                };
                $.ajax({
                    url: basePath + "/AdverseEnterpriseMonitoringSocial/getTextValues",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        myData.subTitle = '目前本市每一千家企业中，失信企业数量总计：' + result['失信企业数量'].toFixed(2) + '家；每万人中，老赖名单人数总计为：' + result['老赖名单人数'].toFixed(2) + '人；总体上反映出，本市的企业信用处于全国排名中的第' + result['企业信用排名'] + '名，企业信用得分为' + parseInt(result['企业信用得分']).toFixed(2) + '分';
                    }
                });
                return myData;
            })(),
            personnel: (function () {
                var myData = {};
                function talentSupply(e_data4) {
                    myData.option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}{b} :<br/> {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            right: 0,
                            bottom: 0,
                            data: e_data4.classify,
                            icon: 'arrow',
                            itemGap: 20,
                            textStyle: {
                                color: '#ffffff'
                            }
                        },
                        color: [
                            '#d37436',
                            '#42ad7e',
                            '#b04ecd',
                        ],
                        series: [
                            {
                                name: '人才供给',
                                type: 'pie',
                                radius: ['55%', '75%'],
                                center: ['40%', '50%'],
                                color: [
                                    '#d0674e',
                                    '#cb924b',
                                    '#c0c477',
                                    '#93be67',
                                    '#69b480',
                                    '#349483',
                                    '#5a5ecc',
                                    //                    '#5c45c7',
                                    //                    '#7e45ce',
                                    //                    '#ae5c9d',
                                ],
                                clockwise: false,
                                data: e_data4.datas.data2,
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 14,
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 2,
                                        borderColor: '#042258',
                                    },
                                    emphasis: {
                                        borderWidth: 0,
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            {
                                name: '人才供给',
                                type: 'pie',
                                radius: ['0', '40%'],
                                center: ['40%', '50%'],
                                color: [
                                    '#d37436',
                                    '#42ad7e',
                                    '#b04ecd',
                                ],
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                    data: e_data4.classify
                                },
                                clockwise: false,
                                data: e_data4.datas.data1,
                                label: {
                                    normal: {
                                        show: false,
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 2,
                                        borderColor: '#042258',
                                    },
                                    emphasis: {
                                        borderWidth: 0,
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            {
                                name: '人才供给',
                                type: 'pie',
                                radius: ['0', '75%'],
                                center: ['40%', '50%'],
                                clockwise: false,
                                data: e_data4.datas.data1,
                                label: {
                                    normal: {
                                        show: false,
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 0,
                                        borderColor: '#ffffff',
                                        color: {
                                            type: 'radial',
                                            x: 0.5,
                                            y: 0.5,
                                            r: 0.5,
                                            colorStops: [{
                                                offset: 0, color: 'rgba(220,125,44,0.0)'
                                            }, {
                                                offset: 1, color: 'rgba(220,125,44,0.0)' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        }
                                    },
                                    emphasis: {
                                        color: {
                                            type: 'radial',
                                            x: 0.5,
                                            y: 0.5,
                                            r: 0.5,
                                            colorStops: [{
                                                offset: 0, color: 'rgba(220,125,44,0.0)'
                                            }, {
                                                offset: 1, color: 'rgba(140,92,80,0.3)' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        },
                                        borderWidth: 0,
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    myData.subTitle = '高素质人才的供给是企业赖以生存的基础，本市高素质人才数量为' + e_data4.TextData[0] + '人，占劳动者比例为' + (e_data4.TextData[1] * 100).toFixed(2) + '%';
                }
                $.ajax({
                    url: basePath + "/HighQualityTalentSupply/getAll",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        talentSupply(result);
                    }
                });
                return myData;
            })(),
            law: (function () {
                var myData = {};
                var picInfos = [];
                $.ajax({
                    url: basePath + "/LegalEnvironment/getAll",
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    success: function (result) {
                        var response = result;
                        function createPie() {
                            var pieOption;
                            var picInfo;
                            var myChartPie = echarts.init(document.getElementById('lawPieChart'));
                            for (var i = 0; i < response.data.length; i++) {
                                pieOption = {
                                    backgroundColor: 'transparent',
                                    title: {
                                        text: response.data[i].percent + '%',
                                        x: 'center',
                                        y: '5%',
                                        textStyle: {
                                            fontWeight: 'normal',
                                            color: '#fff',
                                            fontSize: '40'
                                        }
                                    },
                                    color: ['rgba(117, 85, 62, .8)'],
                                    series: [
                                        {
                                            name: 'Line 1',
                                            type: 'pie',
                                            clockWise: true,
                                            radius: ['20%', '36%'],
                                            itemStyle: {
                                                normal: {
                                                    label: {
                                                        show: false
                                                    },
                                                    labelLine: {
                                                        show: false
                                                    }
                                                }
                                            },
                                            hoverAnimation: false,
                                            animation: false,
                                            data: function () {
                                                var list = [];
                                                var dataPercent = response.data[i].percent;
                                                switch (true) {
                                                    case dataPercent < 0 && dataPercent >= -100:
                                                        list.push(
                                                            {
                                                                value: Math.abs(dataPercent),
                                                                percent: dataPercent,
                                                                name: '01',
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#71BB88',
                                                                        label: {
                                                                            show: false
                                                                        },
                                                                        labelLine: {
                                                                            show: false
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                value: 100 - Math.abs(dataPercent),
                                                                name: 'invisible'
                                                            }
                                                        );
                                                        break;
                                                    case dataPercent < -100:
                                                        list.push(
                                                            {
                                                                value: Math.abs(dataPercent),
                                                                percent: dataPercent,
                                                                name: '01',
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#71BB88',
                                                                        label: {
                                                                            show: false
                                                                        },
                                                                        labelLine: {
                                                                            show: false
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        );
                                                        break;
                                                    case dataPercent >= 0 && dataPercent <= 100:
                                                        list.push(
                                                            {
                                                                value: dataPercent,
                                                                percent: dataPercent,
                                                                name: '01',
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#FBA767',
                                                                        label: {
                                                                            show: false
                                                                        },
                                                                        labelLine: {
                                                                            show: false
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                value: 100 - Math.abs(dataPercent),
                                                                name: 'invisible'
                                                            }
                                                        );
                                                        break;
                                                    case dataPercent > 100:
                                                        list.push(
                                                            {
                                                                value: dataPercent,
                                                                percent: dataPercent,
                                                                name: '01',
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#FBA767',
                                                                        label: {
                                                                            show: false
                                                                        },
                                                                        labelLine: {
                                                                            show: false
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        );
                                                        break;
                                                }
                                                return list;
                                            }()
                                        },
                                        {
                                            name: 'Line 2',
                                            type: 'pie',
                                            clockWise: true,
                                            radius: ['0%', '20%'],
                                            itemStyle: {
                                                normal: {
                                                    label: {
                                                        show: false
                                                    },
                                                    labelLine: {
                                                        show: false
                                                    }
                                                }
                                            },
                                            hoverAnimation: false,
                                            animation: false,
                                            data: [
                                                {
                                                    value: 10,
                                                    name: '02',
                                                    itemStyle: {
                                                        normal: {
                                                            color: '#031941',
                                                            label: {
                                                                show: false
                                                            },
                                                            labelLine: {
                                                                show: false
                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                };
                                myChartPie.setOption(pieOption);
                                picInfo = myChartPie.getDataURL();
                                picInfos.push(
                                    {
                                        picInfo: picInfo
                                    }
                                );
                            }
                        }
                        createPie();
                        myData.option = {
                            tooltip: {
                                trigger: 'axis',
                                formatter: function (params) {
                                    if (params[1].data.percent < 0) {
                                        return params[0].axisValue + '月：<br/>' + '企业裁判数：' + params[0].data + '件<br/>' + '同比下降：' + Math.abs(params[1].data.percent) + '%';
                                    } else {
                                        return params[0].axisValue + '月：<br/>' + '企业裁判数：' + params[0].data + '件<br/>' + '同比上涨：' + params[1].data.percent + '%';
                                    }
                                }
                            },
                            grid: {
                                left: 50,
                                right: 40,
                                bottom: 25,
                                top: 35
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    name: '（月）',
                                    nameGap: 0,
                                    axisLine: {
                                        lineStyle: {
                                            color: '#1FA2D8'
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        color: '#1FA2D8'
                                    },
                                    data: function () {
                                        var list = [];
                                        for (var i = 0; i < response.data.length; i++) {
                                            list.push(response.data[i].month);
                                        }
                                        return list;
                                    }()
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    show: true,
                                    name: '（件）',
                                    axisLine: {
                                        lineStyle: {
                                            color: '#1FA2D8'
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        color: '#1FA2D8'
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            color: '#0B3053',
                                            width: 0.9
                                        }
                                    }
                                },
                                {
                                    type: 'value',
                                    show: false
                                }
                            ],
                            series: [
                                {
                                    name: '数量',
                                    type: 'bar',
                                    barWidth: '20%',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#E39C6C'
                                            }, {
                                                offset: 1,
                                                color: '#DE5396'
                                            }])
                                        }
                                    },
                                    data: function () {
                                        var list = [];
                                        for (var i = 0; i < response.data.length; i++) {
                                            list.push(response.data[i].amount);
                                        }
                                        return list;
                                    }()
                                },
                                {
                                    name: '环比',
                                    type: 'line',
                                    symbol: ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
                                    lineStyle: {
                                        normal: {
                                            color: '#776362',
                                            type: 'dotted'
                                        }
                                    },
                                    data: function () {
                                        var list = [];
                                        for (var i = 0; i < response.data.length; i++) {
                                            list.push(
                                                {
                                                    value: response.data[i].amount + 1500,
                                                    percent: response.data[i].percent,
                                                    symbol: 'image://' + picInfos[i].picInfo,
                                                    symbolSize: 68
                                                }
                                            );
                                        }
                                        return list;
                                    }()
                                }
                            ]
                        };
                        myData.total = response.total;
                        myData.subTitle = '截至今日与本市企业相关的企业裁判文书数量供给' + response.total + '件，其中裁判类别最高的为：合同、利息和交通事故有关的裁判；本市整体法制环境在全国排名' + response.ranking + '，整体在以上三个方面进行加强';
                        $('#lawTotal').html('<span>企业裁判：' + response.total + '件</span>');
                    }
                });
                return myData;
            })(),
            loadOperate: function (index) {
                var option;
                var myChart = echarts.init(document.getElementById('operateChart'));
                var data = this.operate.data;
                for (var k = 0; k < data.length; k++) {
                    if (k == index) {
                        $('#operateTab').find('li').eq(k).addClass('active');
                    } else {
                        $('#operateTab').find('li').eq(k).removeClass('active');
                    }
                }
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            return '当前价格：<span style="color: #F6F36C;font-size: 18px">'
                                + params[1].data.current
                                + '</span><br/>'
                                + '全国最高：' + params[1].data.high + '<br/>'
                                + '全国最低：' + params[1].data.low + '<br/>'
                                + '全国平均：' + params[1].data.average + '<br/>';
                        }
                    },
                    xAxis: {
                        type: 'category',
                        name: '（月）',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#0B3053',
                                width: 0.9
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#1FA2D8'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#1FA2D8'
                        },
                        data: function () {
                            var list = [];
                            for (var i = 0; i < data[0].list.length; i++) {
                                list.push(data[0].list[i].month);
                            }
                            return list;
                        }()
                    },
                    yAxis: {
                        type: 'value',
                        name: '（' + data[index].unit + '）',
                        axisLine: {
                            lineStyle: {
                                color: '#1FA2D8'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#1FA2D8'
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#0B3053',
                                width: 0.9
                            }
                        }
                    },
                    series: [
                        {
                            name: '辅助数据',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '50%',
                            itemStyle: {
                                normal: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                },
                                emphasis: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: function () {
                                var list = [];
                                for (var i = 0; i < data[index].list.length; i++) {
                                    list.push(data[index].list[i].low);
                                }
                                return list;
                            }()
                        },
                        {
                            name: '展示数据',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '50%',
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 2,
                                        colorStops: [
                                            {
                                                offset: 0, color: 'rgba(70, 206, 252, 1)'
                                            },
                                            {
                                                offset: 1, color: 'rgba(18, 118, 176, 1)' // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false
                                    }
                                },
                                emphasis: {
                                    color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 2,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(79, 175, 226, 1)'
                                        }, {
                                            offset: 1, color: 'rgba(97, 231, 243, 1)' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    },
                                    borderWidth: 0,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            markPoint: {
                                symbol: 'path://m-100 -100 h100 v1 h-100 z',
                                symbolSize: 1,
                                itemStyle: {
                                    normal: {
                                        color: '#3292C5',
                                        borderColor: '#34DDF2',
                                        borderWidth: 40
                                    },
                                    emphasis: {
                                        color: '#34DDF2',
                                        borderColor: '#34DDF2',
                                        borderWidth: 40
                                    }
                                },
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: function () {
                                    var list = [];
                                    for (var i = 0; i < data[index].list.length; i++) {
                                        list.push(
                                            {
                                                coord: [i, data[index].list[i].average]
                                            }
                                        );
                                    }
                                    return list;
                                }()
                            },
                            data: function () {
                                var list = [];
                                for (var i = 0; i < data[index].list.length; i++) {
                                    list.push(
                                        {
                                            value: data[index].list[i].high - data[index].list[i].low,
                                            current: data[index].list[i].price,
                                            high: data[index].list[i].high,
                                            low: data[index].list[i].low,
                                            average: data[index].list[i].average
                                        }
                                    );
                                }
                                return list;
                            }()
                        }
                    ]
                };
                myChart.setOption(option);
            }
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
                var myChart;
                var dom = $('#' + id);
                dom.find('h3').html(title);
                if (chartId) {
                    if (chartId === 'monitorChart') {
                        $('#monitorChart').append(this.charts[id].div);
                        myChart = echarts.init(document.getElementById('monitorBarChart'));
                        myChart.setOption(this.charts[id].option);
                    } else {
                        myChart = echarts.init(document.getElementById(chartId));
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
var social = new Social();
social.monitor.run('social', '社会环境评估', true, 'socialChart');
social.monitor.run('operate', '企业运营成本', true, 'operateChart');
social.monitor.run('fund', '资金机会', true, 'fundChart');
social.monitor.run('monitor', '不良企业监控', true, 'monitorChart');
social.monitor.run('personnel', '高素质人才供给', true, 'personnelChart');
social.monitor.run('law', '法制环境', true, 'lawChart');


