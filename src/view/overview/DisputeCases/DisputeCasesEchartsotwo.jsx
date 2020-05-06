import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class DisputeCasesEchartsotwo extends React.Component {
    state = {
        option: {}
    }

    componentDidMount() {
        var labelData = ['已上报  ', '未上报  '];
        var manData = [50, 28,];
        var womanData = [-50, -28,];
        var option = {
            legend:{
                orient: 'horizontal', // 'vertical'
                x: '10%', // 'center' | 'left' | {number},
                y: 'top', // 'center' | 'bottom' | {number}
                data: [
                {
                    name:'已处理报警信息',
                    textStyle:{
                        color:'#fff',
                        fontWeight:'bolder',
                        padding: [10, 100, 15, 0]
                    },
                },
                {
                    name:'未处理报警信息',
                    textStyle:{
                        color:'#fff',
                        fontSize:12,
                        fontWeight:'bolder'
                    },
                }
            ]
                
            },
            // tooltip（提示框组件）
            tooltip: {
                //trigger(触发类型)，可选'item','axis','none'
                trigger: 'axis',
                axisPointer: {
                    //指示器类型,可选'line','shadow','cross'
                    type: 'shadow'
                },
                // 自定义提示内容
                formatter: function (a) {
                    var v = a[0];
                    return v.name + '<br/>' + v.marker + v.seriesName + '：' + Math.abs(v.value);
                }
            },
            xAxis: [{
                type: 'value',
                min: -100, max: 0,
                gridIndex: 0,
                axisTick: { show: false, inside: false },
                axisLabel: { show: false },
                axisLine: {// Y轴轴线样式
                    show: false,
                    lineStyle: {
                        color: '#000',
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                type: 'value',
                gridIndex: 1, min: 0, max: 100,
                axisTick: { show: false }, //是否显示刻度
                axisLine: {// Y轴轴线样式
                    show: false, // 是否显示X轴
                    lineStyle: {
                        color: '#000',
                    }
                },
                axisLabel: {
                    show: false //是否显示X轴内容
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                gridIndex: 0,
                inverse: true,
                data: labelData,
                axisTick: { show: false },
                axisLabel: { show: false },
                axisLine: {// Y轴轴线样式
                    show: false,
                    lineStyle: {
                        color: '#000',
                    }
                }
            }, {
                type: 'category',
                gridIndex: 1,
                inverse: true,
                data: labelData,
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    }
                },
                axisLine: {
                    show: false //是否显示轴线
                }
            }
            ],
            grid: [{
                top: 50,
                width: '40%',
                left: 25, gridIndex: 0,
            }, {
                top: 50,
                left: '60%', gridIndex: 1,
            }],
            color: ['#2FACFA', '#F5A623'],
            series: [
                {
                    name: '已处理报警信息',
                    type: 'bar',
                    barWidth: '10',
                    gridIndex: 0,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#5de3e1',
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                            label: {
                                show: true, position: 'left',
                                formatter: function (v) {
                                    return (v.value * -1);
                                }
                            }
                        }
                    },
                    data: womanData
                },
                {
                    name: '未处理报警信息',
                    type: 'bar',
                    barWidth: '10',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#b6a0eb',
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                            label: {
                                show: true, position: 'right',
                                formatter: function (v) {
                                    return v.value;
                                }
                            }
                        }
                    },
                    data: manData
                }

            ]
        };
        this.setState({
            option
        })
    }
    render() {

        return (
            <div style={{ height: "100%", width: "100%" }}>
                <ReactEcharts
                    option={this.state.option}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>
        );
    }
}
