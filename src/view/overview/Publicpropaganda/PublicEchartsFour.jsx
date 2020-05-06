import React from "react";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class PublicEchartsFour extends React.Component {
  state = {
    // xData: ["和苑小区","中天花园","东城雅苑","岭南雅筑","瑞东花园","东兴楼","海安小区","科城山庄","锦林山庄","丰乐大厦","鱼木小区","阳光雅筑"],
    option: {}
  }

  componentDidMount() {
    let _this=this;
    var myColor = ['#76aaff', '#99ffd5', '#ffdc32', '#6bffff'];
    var myColor2 = ['#8a6bfd', '#ff987b', '#ff76d1', '#fff'];
    var values = [89, 142, 262, 898, 1583, 46, 85, 126, 963, 1457]
    var names = ["儿童(男)","青少年(男)","中年(男)","中老年(男)","老年(男)","儿童(女)","青少年(女)","中年(女)","中老年(女)","老年(女)"]
    var values1 = values.slice(0, 5)
    var names1 = names.slice(0, 5).map((item, index) => {
        return index + 1 + '  ' + item
    })
    var names2 = names.slice(5, 10).map((item, index) => {
        return index + 6 + '  ' + item
    })
    var datas2 = values.slice(5, 10)
    var max = values[0] + 50;
    var option ={
        grid: [{
                width: "49%",
                left: '1%',
                top: '10%',
                right: '0',
                bottom: '0'
            },
            {
                width: "49%",
               //  height: "75%",
                left: '51%',
                top: '10%',
                right: '0',
                bottom: '0'
            }
        ],
        xAxis: [{
            gridIndex: 0,
            show: false,
        }, {
            gridIndex: 1,
            show: false,
        }],
        yAxis: [
            {
                gridIndex: 0,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    verticalAlign: 'bottom',
                    align: 'left',
                    padding: [0, 0, 10, 8],
                    textStyle: {
                        color: '#ADB2C7',
                        fontSize: '12',
                    }
                },
                data: names1,
                inverse: true,
            }, 
            {
                gridIndex: 0,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                data: values1,
                inverse: true,
                axisLabel: {
                    show: true,
                    verticalAlign: 'bottom',
                    align: 'right',
                    padding: [0, 50, 10, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: '12',
                    },
                    formatter: function(value) {
                        return '{x|' + value + '}  {y|' + "人}"
                    },
                    rich: {
                        y: {
                            color: '#ADB2C7',
                            fontSize: 12
                        },
                        x: {
                            color: '#32F19F',
                            fontSize: 12
                        }
                    }
                },
   
   
   
            }, 
            {
                gridIndex: 0,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                data: []
            },
            {
                gridIndex: 1,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    verticalAlign: 'bottom',
                    align: 'left',
                    padding: [0, 0, 10, 8],
                    textStyle: {
                        color: '#ADB2C7',
                        fontSize: '12',
                    }
                },
                data: names2,
                inverse: true
            }, 
            {
                gridIndex: 1,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                data: datas2,
                inverse: true,
                axisLabel: {
                    show: true,
                    verticalAlign: 'bottom',
                    align: 'right',
                    padding: [0, 50, 10, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: '12',
                    },
                    formatter: function(value) {
                        return '{x|' + value + '}  {y|' + "人}"
                    },
                    rich: {
                        y: {
                            color: '#ADB2C7',
                            fontSize: 12
                        },
                        x: {
                            color: '#32F19F',
                            fontSize: 12
                        }
                    }
                },
   
   
   
            }, {
                gridIndex: 1,
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                data: []
            }
        ],
        series: [
            {
                name: '值',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: values1,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 2
            },
            {
                name: '外框',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 2,
                barGap: '-100%',
                data: [max, max, max, max, max],
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        opacity: .2,
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '值',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 3,
                data: datas2,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor2.length;
                            return myColor2[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 2
            },
            {
                name: '外框',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 5,
                barGap: '-100%',
                data: [max, max, max, max, max],
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor2.length;
                            return myColor2[params.dataIndex % num]
                        },
                        opacity: .2,
                        barBorderRadius: 5,
                    }
                },
                z: 0
            }
        ]
    };
    this.setState({
      option,
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
