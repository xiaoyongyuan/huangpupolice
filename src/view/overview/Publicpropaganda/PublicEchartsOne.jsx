import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class PublicEchartsOne extends React.Component {
  state = {
    data: ['抗击肺炎', '扫黑除恶', '复工', '其  它'],
    option: {}
  }

  componentDidMount() {
    var option ={
      color: [new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: "#13ace8"
      }, {
          offset: 1,
          color: "#0167e8"
      }], false)],
      grid: {
          left: '8%',
          right: '10%',
          top: '8%',
          bottom: '8%',
          containLabel: true
      },
      tooltip: {
          show: "true",
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      yAxis: {
           type: 'value',
         
          axisTick: {
              show: false
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#ccc',
              }
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color:"#fff"
              }
          },
            splitLine: {
              show: false,
          },
          min:0,
          max:80,
          splitNumber:2
      },
      xAxis: [{
          axisTick: {
              show: false
          },
         
          type: 'category',
          axisLine: {
              show: false
          },
          axisLabel: {
              show: true,
              color: '#ccc',
              interval: 0,  
          },
          splitLine: {
              show: false,
              lineStyle: {
                  type: 'dashed'
              }
          },
          data: this.state.data,
      }],
      series: [{
          name: '小时/次数',
          type: 'bar',
          barWidth: 15,
          label: {
              normal: {
                  show: false,
                  position: 'right',
                  textStyle: {
                      color: "#ccc",
                      fontSize: 14
                  }
              }
          },
          itemStyle: {
              normal: {
                  // barBorderRadius: [0, 0, 5, 0],
              }
          },
          data: [58, 68, 42, 14]
      }]
  }
    this.setState({
      option
    })
  }
  render() {

    return (
      <div style={{height: "100%",width:"100%"}}>
        <ReactEcharts
          option={this.state.option}
        style={{ height: "100%",width:"100%" }}
        />
      </div>
    );
  }
}
