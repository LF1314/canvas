{
	"tooltip": {
		"backgroundColor": "#333",
		"trigger": "item",
		"textStyle": {
			"fontSize": 20,
			"color": "#fff"
		}
	},
	"legend": {
	
		"data": [

            '正常',
            '预警',
            '良好',
            '',
            '行政审批',
            '企业开办',
            '施工许可证',
            '用电报装',
            '办理纳税',
            '不动产登记',
            '获得信贷',
            '水气报装',
            '商标注册',
            '专利审批',


            '货物通关',
            '财税优惠办理',
            '工业产品生产许可证',

            '社会环境',
            '人才供给',
            '投融资',
            '企业运营成本',
            '法治环境',
            '企业信用',

            '政府服务',
            '市场准入机制',
            '政府采购',
            '政府招投标',
            '信息公开'
		],
        orient: 'horizontal', // 'vertical'
        x: 'center', // 'center' | 'left' | {number},
        y: 'bottom', // 'center' | 'bottom' | {number}
        padding: 0,    // [5, 10, 15, 20]
        itemGap: 20,
		"textStyle": {
			"fontSize": 20,
			"color": "#fff"
        },
        selectedMode : false
        
	},
	series : [
        {
            center:['50%',400],
            "name": "正常",
            "type": "chord",
            "showScaleText": false,
            "clockWise": false,
            itemStyle:{
                normal:{
                    label:{
                        rotate: false,
                        show:true,
                        distance : 25,
                        textStyle:{
                            color:'#ffffff',
                            fontSize:14,
                            align:'center'
                        }
                    }
                }
            },
            "data" : [
                {
                    "name": "行政审批",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#ffce60',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "企业开办"},
                {"name": "施工许可证"},
                {"name": "用电报装"},
                {"name": "办理纳税"},
                {"name": "不动产登记"},
                {"name": "获得信贷"},
                {"name": "水气报装"},
                {"name": "商标注册"},
                {"name": "专利审批"},

                {"name": "货物通关"},
                {"name": "财税优惠办理"},

                {"name": "工业产品生产许可证"},

                {
                    "name": "社会环境",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#4cb4df',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "人才供给"},
                {"name": "投融资"},
                {"name": "企业运营成本"},
                {"name": "企业信用"},
                {"name": "法治环境"},

                {
                    "name": "政府服务",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#67dead',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "市场准入机制"},
                {"name": "政府采购"},
                {"name": "政府招投标"},
                {"name": "信息公开"}

            ],

            "matrix": [
                [0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ]
        },
        {
            "name": "预警",
            "type": "chord",
            "insertToSerie": "正常",
            "data" : [
                {
                    "name": "行政审批",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#ffce60',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "企业开办"},
                {"name": "施工许可证"},
                {"name": "用电报装"},
                {"name": "办理纳税"},
                {"name": "不动产登记"},
                {"name": "获得信贷"},
                {"name": "水气报装"},
                {"name": "商标注册"},
                {"name": "专利审批"},

                {"name": "货物通关"},
                {"name": "财税优惠办理"},

                {"name": "工业产品生产许可证"},

                {
                    "name": "社会环境",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#4cb4df',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "人才供给"},
                {"name": "投融资"},
                {"name": "企业运营成本"},
                {"name": "企业信用"},
                {"name": "法治环境"},

                {
                    "name": "政府服务",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#67dead',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "市场准入机制"},
                {"name": "政府采购"},
                {"name": "政府招投标"},
                {"name": "信息公开"}

            ],
            "matrix": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 10]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
            ]
        },
        {
            "name": "良好",
            "type": "chord",
            "insertToSerie": "正常",
            "data" : [
                {
                    "name": "行政审批",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#ffce60',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "企业开办"},
                {"name": "施工许可证"},
                {"name": "用电报装"},
                {"name": "办理纳税"},
                {"name": "不动产登记"},
                {"name": "获得信贷"},
                {"name": "水气报装"},
                {"name": "商标注册"},
                {"name": "专利审批"},

                {"name": "货物通关"},
                {"name": "财税优惠办理"},

                {"name": "工业产品生产许可证"},

                {
                    "name": "社会环境",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#4cb4df',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "人才供给"},
                {"name": "投融资"},
                {"name": "企业运营成本"},
                {"name": "企业信用"},
                {"name": "法治环境"},

                {
                    "name": "政府服务",
                    itemStyle : {
                        normal : {
                            label :{
                                textStyle : {
                                    color: '#67dead',
                                    fontSize:24,
                                    fontWeight:'bold'
                                }
                            }
                        }
                    }
                },
                {"name": "市场准入机制"},
                {"name": "政府采购"},
                {"name": "政府招投标"},
                {"name": "信息公开"}

            ],
            "matrix": [
                [0, 10, 10, 10, 10, 10, 10, 0, 10, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                
            ]
        }
      
    ],
	"UI": [
		{
			"name": "提示框",
			"key": "tooltip",
			"options": [
				{
					"des": "背景色",
					"key": "backgroundColor",
					"type": "color"
				},
				{
					"des": "字号",
					"key": "textStyle.fontSize",
					"type": "number"
				},
				{
					"des": "颜色",
					"key": "textStyle.color",
					"type": "color"
				}
			]
		},
		{
			"name": "图例",
			"key": "legend",
			"options": [
				{
					"des": "布局",
					"key": "orient",
					"type": "select",
					"tips": [
						{
							"value": "horizontal",
							"label": "水平"
						},
						{
							"value": "vertical",
							"label": "垂直"
						}
					]
				},
				{
					"des": "字号",
					"key": "textStyle.fontSize",
					"type": "number"
				},
				{
					"des": "颜色",
					"key": "textStyle.color",
					"type": "color"
				}
			]
		}
	]
}





function(result){
    console.log(result)
   let list,
       secondClass=[],
       secondClassValue=[],
       datas=[],
       degree=[]
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
    console.log(secondClassValue)
    return {
      'angleData':secondClassValue,
       datas:datas,
        radiusData:degree,
      
    }
  
  }




{  itemStyle: {color: "#B2546F"},
  name: "负面清单规定数量",
  socore: "30.00",
  status: "notRegular",
  value:[0.7208394201673423, -0.5237204946142993, -0.45399049973954675]}
 ,
 { itemStyle: {color: "#B2546F"},
  name: "政府信息公开总数",
  socore: "33.89",
  status: "notRegular",
  value:[-1.2095693648649962e-16, -1.915769668878472e-17, -1]}


{  itemStyle: {color: "#CAF1FF"},
  name: "政府采购总额",
  socore: "50.05",
  status: "regular",
  value:  [0.8910065241883679, -0.45399049973954675, 6.123233995736766e-17]}
,
{  itemStyle: {color: "#CAF1FF"},
  name: "中标服务(建设工程)",
  socore: "70.18",
  status: "regular",
  value: [-0.3672860295740685, 0.26684892042779546, 0.8910065241883679]
},
{  itemStyle: {color: "#CAF1FF"},
  name: "互联网公示条数",
  socore: "54.00",
  status: "regular",
  value: [0.6724985119639574, -0.6724985119639573, -0.30901699437494734]
},
{  itemStyle: {color: "#CAF1FF"},
  name: "标的数量",
  socore: "52.37",
  status: "regular",
  value: [-0.9876883405951378, 6.047846824324981e-17, 0.15643446504023092]
}
  














function(data){
    console.log(this.settings)
     let rolearr=[
      [100,50],
       [200,50],
       [300,50]
     ]
     let currnetIndex =0
     setInterval(()=>{
       if(currnetIndex == 2){
       currnetIndex 
       }else{
       currnetIndex +=1
       }
       console.log( rolearr[currnetIndex][0])
       this.settings
       .end.x = rolearr[currnetIndex]['0']
        this.settings
       .end.y= rolearr[currnetIndex]['1']
      
     },2000)
   }










