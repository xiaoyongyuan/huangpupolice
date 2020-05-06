import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import "./knowledge.less";
import echartsTheme from "../../config/echartTheme";
import echarts from "echarts/lib/echarts";
export default class Knowledge extends Component{
    state={
        library:{},
        buildingCode:{},
        basicGrid:{},
        population:{},
        house:{},
        company:{},
        facilities:{}
    };
    //标准作业图
    standard={
        legend: {
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "#fff",
                fontSize: 12
            },
            top: "center",
            left: '50%',
            bottom: 0,
            orient: 'vertical',
            data: [
                "建筑物\r\n569(24%)",
                "地址数据库\r\n581(25%)",
                "单位\r\n132(5.6%)",
                "设施\r\n1062(45%)"
            ]
        },
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['30%', '45%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: "center",
                        formatter: function (argument) {
                            var html;
                            html = "2346\r\n总数";
                            return html;
                        },
                        textStyle: {
                            fontSize: 12,
                            color: "#c6cccc"
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 25, name: "建筑物\r\n569(24%)" },
                    { value: 8, name: "地址数据库\r\n581(25%)" },
                    { value: 15, name: "单位\r\n132(5.6%)" },
                    { value: 22, name: "设施\r\n1062(45%)" },
                ]
            }
        ]
    };
    componentDidMount() {
        echarts.registerTheme("myTheme", echartsTheme);
        this.hanleLibrary();
        this.handleBuilding();
        this.handlebasicGrid();
        this.handlePopulation();
        this.handleHouse();
        this.handleCompany();
        this.handleFacilities();
    }
    //标准地址库
    hanleLibrary=()=>{
        let library = {
            grid: {
                top: '0',
                left: '5%',
                right: '4.75%',
                bottom: '0',
                containLabel: true
            },
            yAxis: [{
                type: 'category',
                data: ['旧地址数据标准化', '新地址数据建设'],
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#fff'
                    }
                },
                axisLine: {
                    show: false
                },
                splitLine:{
                    show:false
                },
            }],
            xAxis: [{
                type: 'value',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
            }],
            series: [{
                type: 'bar',
                barWidth: "10%",
                itemGap: "-20%",
                data: [70, 80],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%'
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#57eabf' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2563f9' // 100% 处的颜色
                        }], false),
                        barBorderRadius: 14
                    }
                }
            }, {
                type: "bar",
                barWidth: "10%",
                xAxisIndex: 0,
                barGap: "-100%",
                data: [120, 120],
                itemStyle: {
                    normal: {
                        color: "#444a58",
                        barBorderRadius: 14
                    }
                },
                zlevel: -1
            }]
        };
        this.setState({
            library
        })
    };
    //标准建筑物编码
    handleBuilding=()=>{
        let myColor = ['#81E7ED'];
        let dataLine = [50, 66, 33, 25];
        let positionLeft = 0.4,
            max = 100 + 2*positionLeft;
        let buildingCode = {
            grid: [
                {
                    left: '8%',
                    top: '12%',
                    right: '5%',
                    bottom: '8%',
                    containLabel: true
                },
                {
                    left: '5%',
                    top: '10%',
                    right: '5%',
                    bottom: '8%',
                    containLabel: true
                }
            ],
            xAxis: [{
                max:max,
                show: false,
                axisLine:{
                    show:false
                },
                splitLine:{
                    show:false
                },
                axisTick: 'none',
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '17',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                },
                splitLine:{
                    show:false
                },
                data: ['区行政区域', '道路(街巷)', '建筑物', '房间号']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                show: false,
                axisLabel: {
                    textStyle: {
                        color: '#0a5fb8',
                        fontSize: '16'
                    }
                },
                data: [1, 1, 1, 1]
            }, {

                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: []
            }],
            series: [

                { //间距
                    type: 'bar',
                    barWidth: 8,
                    stack: 'b',
                    legendHoverLink: false,
                    itemStyle: {
                        normal: {
                            color: '#0a5fb8'
                        }
                    },
                    data: [positionLeft,positionLeft,positionLeft,positionLeft]
                },
                {
                    name: '条',
                    type: 'bar',
                    stack: 'b',
                    yAxisIndex: 0,
                    data: dataLine,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            distance: 10,
                            formatter: function(param) {
                                return param.value + '%'
                            },
                            textStyle: {
                                color: '#adb4b8',
                                fontSize: '14'
                            }
                        }
                    },
                    barWidth: 0,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length
                                return myColor[params.dataIndex % num]
                            }
                        }
                    },
                    z: 2
                }
            ]
        };
        this.setState({buildingCode})
    };
    //标准基本网格
    handlebasicGrid=()=>{
        let echartData = [{
            value: 3854,
            name: '城市\r\n2982(60%)'
        }, {
            value: 2154,
            name: '乡村\r\n1982(40%)'
        }];
       let basicGrid = {
           legend:{
               data:["城市\r\n2982(60%)","乡村\r\n1982(40%)"],
               textStyle:{
                   color:"#fff"
               },
               itemGap: 10,
               itemWidth: 10,
               itemHeight: 10,
               top: "center",
               left: '16%',
               bottom: 0,
               orient: 'vertical',
           },
            series: [{
                type: 'pie',
                radius: ['34%', '50%'],
                center:["64%","50%"],
                color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                label:{
                    show:false
                },
                data: echartData
            }]
        };
        this.setState({basicGrid})
    };
    //实有人口
    handlePopulation=()=>{
        let population = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 500,
                max: 600,
                inRange: {
                    //colorLightness: [0, 1]
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //27','rgb(11,228,96)','#FE5050'
                data: [{
                    value: 676420,
                    name: '户籍人口'
                },
                    {
                        value: 260620,
                        name: '流动人口'
                    },
                    {
                        value: 153960,
                        name: '境外人员'
                    }
                ].sort(function(a, b) {
                    return a.value - b.value
                }),
                roseType: 'radius',

                label: {
                    normal: {
                        formatter: ['{c|{c}人}', '{b|{b}}'].join('\n'),
                        rich: {
                            c: {
                                color: 'rgb(241,246,104)',
                                fontSize: 16,
                                fontWeight:'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: '#fff',
                                fontSize: 15,
                                height: 40
                            },
                        },
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgb(98,137,169)',
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20,

                    }
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(0, 0, 0, 0.8)',
                        shadowBlur: 50,
                    }
                }
            }]
        };
        this.setState({population})
    };
    //居住建筑
    handleHouse=()=>{
        let dataIPSxAxis = ['公共建筑', '综合建筑', '民用建筑', '工业建筑 ',"其他"];
        let dataIPS = [830, 657, 523, 678,457];
        let house = {
            tooltip: {
                trigger: 'axis',
            },
            xAxis: [{
                data: dataIPSxAxis,
                axisTick:{
                    show:false,
                },
                axisLabel:{
                    interval: 0,
                    rotate:25,
                    textStyle: {
                        color:'#fff',
                        fontSize:14,
                    }
                },
                axisLine: {
                  show:false
                },
                splitLine: {
                    show:false
                }
            }],
            yAxis: [{
                splitLine: {
                    show: false,
                },
                axisTick:{
                    show:false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize:15,//坐标值得具体的颜色
                    }
                },
                axisLine: {
                    show:false,
                },
                min:0,
                max:1000,
                splitNumber:2,
            }],
            series: [
                {
                    name: '居住建筑',
                    type: 'bar',
                    smooth: true,
                    barWidth: '18%',
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#CB8993' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#CB8993' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#CC56CB' // 100% 处的颜色
                            }])
                        },
                        emphasis: {
                           show:false
                        }
                    },
                    data: dataIPS,
                },
            ]
        };
        this.setState({house})
    };
    //实有单位
    handleCompany=()=>{
        let company = {
            legend: {
                itemGap: 10,
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                },
                top: "center",
                left: '50%',
                bottom: 0,
                orient: 'vertical',
                data: [
                    "机关单位\r\n154(12%)",
                    "事业单位\r\n240(19%)",
                    "企业单位\r\n321(26%)",
                    "社会团体\r\n178(14%)",
                    "民办非企业单位\r\n361(28%)"
                ]
            },
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['30%', '45%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: true,
                            position: "center",
                            formatter: function (argument) {
                                var html;
                                html = "1254\r\n总单位数";
                                return html;
                            },
                            textStyle: {
                                fontSize: 12,
                                color: "#39CCCC"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 154,
                        name: '机关单位\r\n154(12%)'
                    }, {
                        value: 240,
                        name: '事业单位\r\n240(19%)'
                    }, {
                        value: 321,
                        name: '企业单位\r\n321(26%)'
                    }, {
                        value: 178,
                        name: '社会团体\r\n178(14%)'
                    }, {
                        value: 361,
                        name: '民办非企业单位\r\n361(28%)'
                    }]
                }
            ]
        };
        this.setState({company})
    };
    //实有设施
    handleFacilities=()=>{
        let facilities = {
            grid: {
                top: "25%",
                bottom: "30%"
            },
            xAxis: {
                data: [
                    "公共安全设施",
                    "道路交通设施",
                    "市政公用设施",
                    "公共文化设施",
                    "房屋配套设施",
                    "其他服务设施",
                    "视频监控",
                    "市政设施",
                    "道路交通设施",
                    "园林绿化设施",
                    "供水供电设施"
                ],
                axisLine: {
                    show: false //隐藏X轴轴线
                },
                axisTick: {
                    show: false //隐藏X轴刻度
                },
                splitLine:{
                    show:false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff" //X轴文字颜色
                    }
                }
            },
            yAxis: [{
                type: "value",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff"
                    }
                },
                min:0,
                max:1000,
                splitNumber:2,
            }
            ],
            "dataZoom": [{
                "show": true,
                "height": 15,
                "xAxisIndex": [0],
                 bottom: 26,
                "start": 0,
                "end": 23,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle:{
                    color:"#d3dee5",

                },
                textStyle:{
                    color:"#fff"},
                borderColor:"#90979c"


            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            series: [
                {
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                            ])
                        }
                    },
                    data: [456, 340, 245, 167, 123, 456, 674, 345,675,345,256]
                }
            ]
        };
        this.setState({facilities})
    };
    render(){
        return (
            <div className="fourmark">
                <div className="leftmark">
                    <div className="mark-item">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">标准作业图</span></div>
                        <ReactEcharts
                            option={this.standard}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item markMargin">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">标准地址库</span></div>
                        <ReactEcharts
                            option={this.state.library}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item markMargin">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">标准建筑物编码</span></div>
                        <ReactEcharts
                            option={this.state.buildingCode}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">标准基本网格</span></div>
                        <ReactEcharts
                            option={this.state.basicGrid}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                        <span className="gridMark">网格员数量：248</span>
                    </div>
                </div>
                <div className="rightmark">
                    <div className="mark-item">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">实有人口</span></div>
                        <ReactEcharts
                            option={this.state.population}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item markMargin">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">居住建筑</span></div>
                        <ReactEcharts
                            option={this.state.house}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item markMargin">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">实有单位</span></div>
                        <ReactEcharts
                            option={this.state.company}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                    <div className="mark-item">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">实有设施</span></div>
                        <ReactEcharts
                            option={this.state.facilities}
                            theme="myTheme"
                            style={{height: "calc((100vh - 100px)/4.2)"}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}