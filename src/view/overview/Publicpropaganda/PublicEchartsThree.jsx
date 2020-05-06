import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class PublicEchartsThree extends React.Component {
  state = {
    scale: 1,
    echartData: [{
      value: 1124,
      name: '和苑小区'
    }, {
      value: 854,
      name: '中天花园'
    }, {
      value: 515,
      name: '东城雅苑'
    }, {
      value: 1515,
      name: '岭南雅筑'
    }, {
      value: 954,
      name: '菠船生活区'
    }, {
      value: 1623,
      name: '瑞东花园'
    }],

    option: {}
  }

  componentDidMount() {
    let _this = this;
    //字符串截取
    var wordLength = (value) => {
      var ret = ""; //拼接加\n返回的类目项
      var maxLength = 4; //每项显示文字个数
      var valLength = value.length; //X轴类目项的文字个数
      var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
      if (rowN > 1) //如果类目项的文字大于3,
      {
        for (var i = 0; i < rowN; i++) {
          var temp = ""; //每次截取的字符串
          var start = i * maxLength; //开始截取的位置
          var end = start + maxLength; //结束截取的位置
          //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
          temp = value.substring(start, end) + "\n";
          ret += temp; //凭借最终的字符串
        }
        return ret;
      } else {
        return value;
      }
    }
    
    //偏移量
    var offsetData = [
      [80, 53],
      [35, 73],
      [30, 33],
      [60, 33],
      [10, 48]
    ];
    //symbolSize 散点气泡大小
    var symbolSizeData = [40, 60, 25, 37, 57];
    //
    //循环定义series的data值
    var datas = [];
    for (var i = 0; i < this.state.echartData.length; i++) {
      var item = this.state.echartData[i];
      //var itemToStyle = datalist[i];

      datas.push({
        name: wordLength(item.name) + "\n" + item.value + "人",
        value: offsetData[i],
        symbolSize: symbolSizeData[i],
        label: {
          normal: {
            textStyle: {
              fontSize: 12
            }
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
              offset: 0,
              color: "rgba(31,102,162,0)"
            },
            {
              offset: 1,
              color: "#036DE8"
            }
            ]),
            opacity: 0.8,
            shadowColor: '#11A4E8',
            shadowBlur: 10,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },

        }
      });
    }

    var option = {
      //   backgroundColor: "transparent",
      // backgroundColor: '#0e2147',
      grid: {
        show: false,
        top: 10,
        bottom: 10
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} "
      },
      xAxis: [{
        gridIndex: 0,
        type: "value",
        show: false,
        min: 0,
        max: 100,
        nameLocation: "middle",
        nameGap: 5
      }],
      yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: "middle",
        nameGap: 30
      }],

      series: [{
        type: "scatter",
        symbol: "circle",
        symbolSize: 120,
        label: {
          normal: {
            show: true,
            formatter: "{b}",
            color: "#fff",
            textStyle: {
              fontSize: "12"
            }
          }
        },
        animationDurationUpdate: 1000,
        animationEasingUpdate: 1000,
        animationDelay: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        itemStyle: {
          normal: {
            color: "#00acea"
          }
        },
        data: datas
      }],
     
    };

    var rotation = 0;
  


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
