var Gov = function () {};
Gov.prototype = {
    monitor: {
        charts: {
            market: (function () {
                var myData = {};
                function marketAccessAnalysis(e_data1) {
                    myData.option = {
                        tooltip: {
                            formatter: function(params,ticket,callback) {
                                if (params.value < 0) {
                                    for(var i=0;i<e_data1.xAxisData1.length;i++) {
                                        if (params.name === e_data1.xAxisData1[i]) {
                                            return e_data1.xAxisData1[i] + '<br/>禁止:' + e_data1.data1[i]*(-1)
                                        }
                                    }
                                }else {
                                    for(var i=0;i<e_data1.xAxisData1.length;i++) {
                                        if (params.name === e_data1.xAxisData1[i]) {
                                            return e_data1.xAxisData2[i] + '<br/>限制:' + e_data1.data2[i]
                                        }
                                    }
                                }
                            }
                        },
                        xAxis: {
                            data: e_data1.xAxisData1,
                            name: '行业类别',
                            silent: false,
                            type: 'category',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#145A8D'
                                }
                            },
                            show:false,
                        },
                        legend: {
                            data: ['禁止', '限制'],
                            textStyle: {
                                color: '#ffffff'
                            },
                            y: "bottom"
                        },
                        yAxis: [{
                            inverse: true,
                            splitArea: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: function(value) {
                                    if (value < 0) {
                                        return -value
                                    } else {
                                        return value
                                    }
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#31A3E1'
                                }
                            }
                        }, {
                            inverse: true,
                            position: 'left',
                            nameLocation: 'start',
                            splitArea: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#145A8D'
                                }
                            }
                        }],
                        grid: {
                            right: '15%'
                        },
                        series: [{
                            name: '禁止',
                            type: 'bar',
                            stack: 'one',
                            barWidth: '30%',
                            //label: {
                            //    normal: {
                            //        show: true,
                            //        position: 'top',
                            //        formatter: '{b}',
                            //        color: '#ffffff',
                            //        rotate: 15
                            //    }
                            //},
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(159, 71,72, 1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(159, 71,72, 0.1)'
                                    }]),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            } ,
                            data: e_data1.data3
                        }, {
                            name: '限制',
                            type: 'bar',
                            stack: 'one',
                            barWidth: '30%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(90, 105,172, 1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(90, 105,172, 0.1)'
                                    }]),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                            data: e_data1.data2
                        }]
                    };
                    myData.subTitle = '本市目前禁止类项目为；' + e_data1.TextData['禁止类'] + '项'
                        + '<br>'
                        + '限制类项目共计：' + e_data1.TextData['限制类'] + '项'
                        + '<br>'
                        + '设有自贸区，自贸区负面清单项目数量为：122项，其中最多的为制造业、保险服务和信息技术服务等';
                    $('#marketTotal').html('<span class="name">准入度：<span class="num">' + e_data1.TextData['准入度'] + '分</span></span>');
                }
                $.ajax({
                    url:basePath+"/ProfessionTypeNumber/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        marketAccessAnalysis(result);
                    }
                });
                return myData;
            })(),
            publics: (function () {
                var myData = {};
                function ccc(data) {
                    myData.option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter: function (params, ticket, callback) {
                                var resCode = params.name + " <br/>" ;
                                for(var key in data.seriesLabel){
                                    resCode += key + ": " + data.seriesLabel[key][params.dataIndex] + " <br/>";
                                }
                                return resCode;
                            }
                        },
                        legend: {
                            data: data['legend'],
                            bottom: 0,
                            itemWidth: 13,
                            textStyle: {
                                color: '#1FA1DD'
                            }
                        },
                        xAxis: [{
                            type: 'category',
                            data: data['xAxis'],
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1E88C4',
                                    width: 1
                                }
                            },
                            splitLine: {
                                show:true,
                                lineStyle: {
                                    color: '#1E88C4',
                                    width: 0.9
                                }
                            }
                        }],
                        yAxis: [{
                            type: 'value',
                            name: '(万元)',
                            axisLabel: {
                                formatter: '{value}'
                            },
                            max: 1500,
                            splitNumber: 3,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#143B62'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1E88C4',
                                    width: 0.9
                                }
                            },
                        }],
                        series: [{
                            name: '工程建设',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var color1 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#A563C5'
                                            }, {
                                                offset: 1,
                                                color: '#662988'
                                            }]
                                        );
                                        return color1
                                    }
                                }
                            },
                            data: data['series'][ '工程建设']
                        }, {
                            name: '政府采购',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var color2 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#C16C6F'
                                            }, {
                                                offset: 1,
                                                color: '#883837'
                                            }]
                                        );
                                        return color2
                                    }
                                }
                            },
                            data: data['series'][ '政府采购']
                        }, {
                            name: '土地所有权',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var color3 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#BD9E70'
                                            }, {
                                                offset: 1,
                                                color: '#765A32'
                                            }]
                                        );
                                        return color3
                                    }
                                }
                            },
                            data: data['series'][ '土地所有权']
                        }, {
                            name: '矿业权',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var color4 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#76AF86'
                                            }, {
                                                offset: 1,
                                                color: '#44644C'
                                            }]
                                        );
                                        return color4
                                    }
                                }
                            },
                            data: data['series'][ '矿业权']
                        }, {
                            name: '国有产权',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var color5 = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#6699D8'
                                            }, {
                                                offset: 1,
                                                color: '#4366A0'
                                            }]
                                        );
                                        return color5
                                    }
                                }
                            },
                            data: data['series'][ '国有产权']
                        }]
                    };
                    myData.subTitle = '年度交易金额统计';
                    $('#table').append(
                        '<thead>' +
                        '<th>' + data.TextData[3] + '</th>' +
                        '<th>年度</th>' +
                        '<th>交易金额</th>' +
                        '<th>标的数量</th>' +
                        '</thead>' +
                        '<tbody>' +
                        '<td>共计</td>' +
                        '<td>' + data.TextData[2] + '</td>' +
                        '<td>' + data.TextData[1].toFixed(2) + '亿</td>' +
                        '<td>' + data.TextData[0] + '个</td>' +
                        '</tbody>'
                    )
                }
                $.ajax({
                    url:basePath+"/PublicResourceTransactionAnalysis/getAll",
                    type:"GET",
                    dataType:'json',
                    async: false,
                    success:function (result) {
                        ccc(result);
                    }
                });
                return myData;
            })(),
            information: (function () {
                var myData = {};
                function aaa(data) {
                    myData.option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: function (params, ticket, callback) {
                                for(var i = 0; i < data.exact_data.length; i++){
                                    if (params.name === data.exact_data[i]["name"]) {
                                        return data.exact_data[i]["name"]+" <br/>" +  data.exact_data[i]["value"] + "条  " +data.exact_data[i]["percent"] + "%";
                                    }
                                }
                            }
                            },
                        calculable: true,
                        series: [{
                            name: '信息公开',
                            data: data.handle_data,
                            type: 'pie',
                            radius: [15, 100],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            z: 4,
                            label: {
                                normal: {
                                    formatter: function (params) {
                                        for(var i = 0; i < data.exact_data.length; i++){
                                            if (params.name === data.exact_data[i]["name"]) {
                                                return data.exact_data[i]["name"]+"\n" +  data.exact_data[i]["value"] + "条  " +data.exact_data[i]["percent"] + "%";
                                            }
                                        }
                                    },
                                    fontSize: 14
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#BDA299', '#CF3C3A', '#609CA6', '#D58165', '#749F83'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        },{
                            type: 'pie',
                            legendHoverLink: false,
                            hoverAnimation: false,
                            radius: [0, 120],
                            center: ['50%', '50%'],
                            data: [10],
                            tooltip: {
                                show: false
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.5,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(5,22,55,0.0)'
                                        }, {
                                            offset: 1, color: 'rgba(22,44,84,0.3)' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        },{
                            type: 'pie',
                            legendHoverLink: false,
                            hoverAnimation: false,
                            radius: [15, 15],
                            center: ['50%', '50%'],
                            data: [10],
                            tooltip: {
                                show: false
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            z: 5,
                            itemStyle: {
                                normal: {
                                    color: '#ffffff',
                                    borderWidth: 1,
                                    borderColor: '#6EBD24'
                                }
                            }
                        },{
                            type: 'pie',
                            legendHoverLink: false,
                            hoverAnimation: false,
                            radius: [0, 20],
                            tooltip: {
                                show: false
                            },
                            z: 4,
                            center: ['50%', '50%'],
                            data: [10],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ffffff'
                                }
                            }
                        }]
                    };
                    myData.subTitle = '全市政府信息主要通过';
                    for (var n = 0; n < data.exact_data.length; n++) {
                        if (n === data.exact_data.length - 1) {
                            myData.subTitle += data.exact_data[n].name;
                        }else {
                            myData.subTitle += data.exact_data[n].name + '、';
                        }
                    }
                    myData.subTitle += '等载体进行公开，主动公开信息' + data.TextData['主动公开信息数'] + '条（去重），其中：主动公开规范文件数' + data.TextData['主动公开规范文件数'] + '条，占制发规范性文件总数的' + (data.TextData['占制发规范性文件总数'] * 100).toFixed(2) + '%';
                    $('#informationTotal').html('<span class="name">透明度：<span class="num">' + data.TextData['透明度'] + '分</span></span>');
                }
                $.ajax({
                    url:basePath+"/InformationPublic/getAll",
                    type:"GET",
                    dataType:'json',
                    async: false,
                    success:function (result) {
                        aaa(result);
                    }
                });
                return myData;
            })(),
            ents: (function () {
                var myData = {};
                function successfulEnterprisesTypes(e_data2) {
                    myData.option = {
                        tooltip: {
                            trigger: 'item',
                            show:false,
                        },
                        radar: {
                            // shape: 'circle',
                            name: {
                                textStyle: {
                                    color: '#31A3E1',
                                }
                            },
                            splitArea: {
                                areaStyle: {
                                    color: ['#031843', '#031843', '#031843', '#031843'],
                                    shadowColor: 'rgba(0, 100, 0, 0.3)'
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: ['#218BC5', '#0F3B74']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#143E6E'
                                }
                            },
                            indicator: e_data2.des
                        },
                        series: [{
                            type: 'radar',
                            data: [
                                {
                                    value: e_data2.data,
                                    name: '数据',
                                    itemStyle: {
                                        normal: {
                                            color: '#F7D200',
                                            borderWidth: 5,
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            color:"#3CE34C",
                                            width:3
                                        }
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: '#196C56',
                                            opacity: 0.5
                                        }
                                    }
                                }
                            ]
                        }]
                    };
                    myData.subTitle = '<ul>';
                    var n = 1;
                    var k = 1;
                    for (var obj in e_data2.TextData) {
                        myData.subTitle += '<li class="clearfix">'
                            + n + '、'
                            + obj
                            + '<span class="pull-right"><span class="num">' + e_data2.TextData[obj] + '</span>次</span>'
                            + '</li>';
                        n++;
                    }
                    myData.subTitle += '</ul>';
                    myData.legends = '<ul>';
                    for (var data in e_data2.dsData) {
                        myData.legends += '<li>'
                            + data
                            + '：'
                            + e_data2.dsData[data]
                            + '</li>';
                        k++;
                    }
                }
                $.ajax({
                    url:basePath+"/WinBiddingType/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        successfulEnterprisesTypes(result);
                    }
                });
                return myData;
            })(),
            service: (function () {
                var myData = {};
                var totalArr = [];
                var resultArr = [];
                var e_data;
                $.ajax({
                    url:basePath+"/ServiceEvaluationSpaceBallYear/getAll",
                    type:"GET",
                    dataType:'json',
                    async : false,
                    success:function (result) {
                        e_data = result;
                        myData.option = {
                            backgroundColor: 'trasparent',
                            tooltip: {
                                show: true,
                                trigger: 'item',
                                formatter: function (params) {
                                    if (params.name != '' && params.seriesType === 'scatter3D') {
                                        return '分数：' + params.data.socore;
                                    }
                                }
                            },
                            color: ['#CAF1FF', '#B2546F'],
                            legend: {
                                orient: 'vertical',
                                data: ['可优化', '正常'],
                                left: 0,
                                top: 100,
                                itemGap: 20,
                                textStyle: {
                                    color: '#31A3E1',
                                    fontSize: 16
                                }
                            },
                            xAxis3D: {},
                            yAxis3D: {},
                            zAxis3D: {},
                            grid3D: {
                                show: false,
                                boxWidth: 130,
                                boxHeight: 130,
                                boxDepth: 130,
                                viewControl: {
                                    projection: 'perspective',
                                    autoRotate: true,
                                    panSensitivity: 0
                                }
                            },
                            series: [
                                {
                                    type: 'surface',
                                    parametric: true,
                                    shading: 'color',
                                    wireframe: {
                                        show: true,
                                        lineStyle: {
                                            color: '#578AE8',
                                            width: 1
                                        }
                                    },
                                    itemStyle: {
                                        color: '#02183F',
                                        opacity: .5
                                    },
                                    parametricEquation: {
                                        u: {
                                            min: -Math.PI,
                                            max: Math.PI,
                                            step: Math.PI / 20
                                        },
                                        v: {
                                            min: 0,
                                            max: Math.PI,
                                            step: Math.PI / 20
                                        },
                                        x: function(u, v) {
                                            return Math.sin(v) * Math.sin(u);
                                        },
                                        y: function(u, v) {
                                            return Math.sin(v) * Math.cos(u);
                                        },
                                        z: function(u, v) {
                                            return Math.cos(v);
                                        }
                                    }
                                },
                                {
                                    type: 'scatter3D',
                                    coordinateSystem: 'cartesian3D',
                                    label: {
                                        show: false
                                    },
                                    symbolSize: function (value, params) {
                                        if (params.data.status === 'normal') {
                                            return 7;
                                        }
                                    },
                                    blendMode: 'lighter',
                                    data: function() {
                                        var result = [];
                                        var scatterArr = [];
                                        for (var k = 0; k <= Math.PI; k += Math.PI / 20) {
                                            for (var i = -Math.PI; i <= Math.PI; i += Math.PI / 20) {
                                                scatterArr.push(Math.sin(k) * Math.sin(i), Math.sin(k) * Math.cos(i), Math.cos(k));
                                            }
                                        }
                                        for (var l = 0, len = scatterArr.length; l < len; l += 3) {
                                            totalArr.push(l / 3);
                                            result.push({
                                                name: '',
                                                value: scatterArr.slice(l, l + 3),
                                                status: 'normal',
                                                itemStyle: {
                                                    color: '#578AE8'
                                                }
                                            });
                                        }
                                        resultArr = result;
                                        return result;
                                    }()
                                },
                                {
                                    name: '可优化',
                                    type: 'scatter3D',
                                    coordinateSystem: 'cartesian3D',
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            return params.name;
                                        },
                                        backgroundColor: 'transparent',
                                        textStyle: {
                                            color: 'red',
                                            fontSize: 16
                                        }
                                    },
                                    symbolSize: function (value, params) {
                                        return 15;
                                    },
                                    blendMode: 'lighter',
                                    data: function() {
                                        var result = [];
                                        for (var n = 0; n < e_data.length; n++) {
                                            if (e_data[n].type === 0) {
                                                var x = Math.floor(totalArr.length * Math.random());
                                                if (x < 20) {
                                                    x = x + 21;
                                                }else if (x > totalArr.length - 20) {
                                                    x = totalArr.length - 21;
                                                }
                                                result[n] = resultArr[x];
                                                result[n].status = 'notRegular';
                                                result[n].name = e_data[n].name;
                                                result[n].socore = e_data[n].value.toFixed(2);
                                                result[n].itemStyle = {
                                                    color: '#B2546F'
                                                }
                                            }
                                            totalArr.splice(x, 1);
                                        }
                                        return result;
                                    }()
                                },
                                {
                                    name: '正常',
                                    type: 'scatter3D',
                                    coordinateSystem: 'cartesian3D',
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            return params.name;
                                        },
                                        backgroundColor: 'transparent',
                                        textStyle: {
                                            color: '#CAF1FF',
                                            fontSize: 16
                                        }
                                    },
                                    symbolSize: function (value, params) {
                                        return 12;
                                    },
                                    blendMode: 'lighter',
                                    data: function() {
                                        var result = [];
                                        for (var n = 0; n < e_data.length; n++) {
                                            if (e_data[n].type === 1) {
                                                var x = Math.floor(totalArr.length * Math.random());
                                                if (x < 20) {
                                                    x = x + 21;
                                                }else if (x > totalArr.length - 20) {
                                                    x = totalArr.length - 21;
                                                }
                                                result[n] = resultArr[x];
                                                result[n].status = 'regular';
                                                result[n].name = e_data[n].name;
                                                result[n].socore = e_data[n].value.toFixed(2);
                                                result[n].itemStyle = {
                                                    color: '#CAF1FF'
                                                }
                                            }
                                            totalArr.splice(x, 1);
                                        }
                                        return result;
                                    }()
                                }
                            ]
                        };
                        myData.subTitle = '每条政务信息的公开，每次市场准入机制的变化，所有政府服务相关的公开数据，都会通过优易网络实时进入指数计算评估中。政府服务纵横交错，优易评估算法球全面覆盖所有服务';
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
                var myChart = echarts.init(document.getElementById(chartId));
                myChart.setOption(this.charts[id].option);
            }
            if (isSubTitle) {
                var subTitle;
                subTitle = this.charts[id].subTitle;
                if (id === 'service') {
                    dom.find('small').append('<div class="small_corner"><div class="small_corner_pic"></div><div class="small_corner_pic"></div><div class="small_corner_pic"></div><div class="small_corner_pic"></div></div>');
                    dom.find('small').append(subTitle);
                }else if (id === 'ents') {
                    var ulParent = dom.find('div#rollList');
                    dom.siblings('#entsChartTotal').html(this.charts[id].legends);
                    ulParent.html(subTitle);
                    ulParent.myScroll(
                        {
                            speed: 60,
                            rowHeight: 20
                        }
                    );
                }else {
                    dom.find('small').html(subTitle);
                }
            }
        }
    }
};
var gov = new Gov();
gov.monitor.run('market', '市场准入分析', true, 'marketChart');
gov.monitor.run('publics', '公共资源交易分析', true, 'publicsChart');
gov.monitor.run('information', '信息公开', true, 'informationChart');
gov.monitor.run('ents', '中标企业及类型', true, 'entsChart');
gov.monitor.run('service', '服务测评空间球', true, 'serviceChart');