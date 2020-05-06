import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class SecurityEchartsone extends React.Component {
    state = {
        option: {}
    }

    componentDidMount() {
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
        var option = {
            grid: {
                left: '11%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12',
                    }
                },
                data: ['东区派出所', '九佛派出所', '镇龙派出所', '联和派出所', '萝岗派出所', '夏港街派出所', '永和派出所', '老港派出所', '新港派出所', '局鱼珠派出所']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12',
                    }
                },
                data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
            }, {
                // name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12',
                        }
                    }
                },
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            },
             {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                yAxisIndex: 2,
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        opacity: 1,
                    }
                },
                z: 2
            }
            ]
        }
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
