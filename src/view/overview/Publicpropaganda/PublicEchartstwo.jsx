import React from "react";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class PublicEchartstwo extends React.Component {
  state = {
    xData: [],
    yData: [],
    // data: [{
    //   "name": "和苑小区",
    //   "value": 1895457
    // }, {
    //   "name": "中天花园",
    //   "value": 722232
    // }, {
    //   "name": "东城雅苑",
    //   "value": 1723130
    // }, {
    //   "name": "岭南雅筑",
    //   "value": 854920
    // }],

    option: {}
  }
 
  componentDidMount() {
   
    var option =  {
      color:['#fb7293','#e7bcf3','#8378ea','#9fe6b8','#ffdb5c'],
      legend: {
        grid:{
          top:"30%",
        },
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
          "国运大厦\r\n1560(18%)",
          "岭顶山居\r\n1408(16%)",
          "南宁小区\r\n1047(12%)",
          "善居别墅\r\n988(11.4%)"
        ]
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['30%', '40%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: true,
              position: "center",
              formatter: function (argument) {
                var html;
                html = "8653\r\n总人数";
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
          data: [
            { value: 1560, name: "国运大厦\r\n1560(18%)" },
            { value: 1408, name: "岭顶山居\r\n1408(16%)" },
            { value: 1047, name: "南宁小区\r\n1047(12%)" },
            { value: 988, name: "善居别墅\r\n988(11.4%)" },
          ]
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
