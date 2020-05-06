import React from "react";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class SecurityEchartsthree extends React.Component {
  state = {
    option: {}
  }

  componentDidMount() {
    //亮色图片
    var uploadedDataURL1 = "/asset/get/s/data-1514970761653-ByzqAf9XG.png";
    var uploadedDataURL2 = "/asset/get/s/data-1514970765660-B1I50M5QM.png";
    var baifenbi = [0.333, 0.444, 0.555];
    var grayBar = [1, 1, 1];
    var paiming = [3, 2, 1];
    var zongjine = [2000, 3000, 4000];
    var xingm = ['交通', '治安', '纠纷'];
    var option = {
      // color: ['#61A8FF'], //进度条颜色
      //  grid: {
      //      left: '10%',  //如果离左边太远就用这个......
      //      right: '14%',
      //      bottom: '0%',
      //      top: '0%',
      //      containLabel: true
      //  },
      // xAxis: [{
      //   show: false,
      // },
      // //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
      // {
      //   show: false,
      // }
      // ],
      // yAxis: {
      //   type: 'category',
      //   axisLabel: {
      //     show: false, //让Y轴数据不显示
      //   },
      //   itemStyle: {

      //   },
      //   axisTick: {
      //     show: false, //隐藏Y轴刻度
      //   },
      //   axisLine: {
      //     show: false, //隐藏Y轴线段
      //   },
      //   data: xingm,
      // },
      // series: [
      //   //背景色--------------------我是分割线君------------------------------//
      //   {
      //     show: true,
      //     type: 'bar',
      //     barGap: '-100%',
      //     barWidth: '35%', //统计条宽度 
      //     itemStyle: {
      //       normal: {
      //         color: 'rgba(102, 102, 102,0.5)'
      //       },
      //     },
      //     z: 1,
      //     data: grayBar,
      //   },
      //   //蓝条--------------------我是分割线君------------------------------//
      //   {
      //     show: true,
      //     type: 'bar',
      //     barGap: '-100%',
      //     barWidth: '35%', //统计条宽度
      //     itemStyle: {
      //       normal: {
      //         color: {
      //           type: 'bar',
      //           colorStops: [{
      //             offset: 0,
      //             color: '#39A7FC' // 0% 处的颜色
      //           }, {
      //             offset: 1,
      //             color: '#00FBFF' // 100% 处的颜色
      //           }],
      //           globalCoord: false, // 缺省为 false

      //         }
      //       },
      //     },
      //     max: 1,
      //     label: {
      //       normal: {
      //         show: true,
      //         textStyle: {
      //           color: '#fff', //百分比颜色
      //         },
      //         position: 'inside',
      //         //百分比格式
      //         formatter: function (data) {
      //           return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
      //         },
      //       }
      //     },
      //     labelLine: {
      //       show: false,
      //     },
      //     z: 2,
      //     data: baifenbi,
      //   },
      //   //数据条--------------------我是分割线君------------------------------//
      //   {
      //     show: true,
      //     type: 'bar',
      //     xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
      //     barGap: '-100%',
      //     barWidth: '25%', //统计条宽度
      //     itemStyle: {
      //       normal: {
      //         barBorderRadius: 200,
      //         color: 'rgba(22,203,115,0.05)'
      //       },
      //     },
      //     label: {
      //       normal: {
      //         show: true,
      //         //label 的position位置可以是top bottom left,right,也可以是固定值
      //         //在这里需要上下统一对齐,所以用固定值
      //         position: [0, '-100%'],
      //         rich: { //富文本
      //           white: { //自定义颜色
      //             color: '#ffffff',
      //           },
      //           start1: {
      //             backgroundColor: {
      //               image: uploadedDataURL1,
      //             }
      //           },
      //           start2: {
      //             backgroundColor: { //这里可以添加你想自定义的图片
      //               image: uploadedDataURL2,
      //             },
      //           },
      //           green: {
      //             color: '#70DDA7',
      //             fontSize: '16',
      //           },
      //           yellow: {
      //             color: 'rgb(247, 247, 41)',
      //             fontSize: '16',
      //           },
      //           red: {
      //             color: 'rgb(255, 40, 40)',
      //             fontSize: '16',
      //           },
      //           gray: {
      //             color: '#727CBA',
      //             fontSize: '16',
      //           }
      //         },
      //         formatter: function (data) {
      //           //富文本固定格式{colorName|这里填你想要写的内容}
      //           if (paiming[data.dataIndex] == 1) {
      //             return '{start1|}{red|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                      ' + '{white|    总数:}{gray|' + zongjine[data.dataIndex] + '}{white|件}';
      //           } else if (paiming[data.dataIndex] == 2) {
      //             return '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                   ' + '{white|    总数:}{gray|' + zongjine[data.dataIndex] + '}{white|件}';
      //           } else if (paiming[data.dataIndex] == 3) {
      //             return '{start1|}{green|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                    ' + '{white|    总数:}{gray|' + zongjine[data.dataIndex] + '}{white|件}';
      //           } else {
      //             return '{start2|}{white|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                    ' + '{white|    总数:}{gray|' + zongjine[data.dataIndex] + '}{white|件}';
      //           }

      //         },
      //       }
      //     },
      //     data: zongjine
      //   }

      // ]
      legend: {
        grid: {
          top: "30%",
        },
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#fff",
          fontSize: 14
        },
        top: "center",
        left: '60%',
        bottom: 0,
        orient: 'vertical',
        data: [
          "交通\r\n679(43%)",
          "治安\r\n346(22%)",
          "纠纷\r\n567(36%)"
        ]
      },
      color:['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
      series: [
        {
          name: '事件',
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
                html = "1589\r\n总事件数";
                return html;
              },
              textStyle: {
                fontSize: 14,
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
            { value: 679, name: "交通\r\n679(43%)" },
            { value: 346, name: "治安\r\n346(22%)" },
            { value: 567, name: "纠纷\r\n567(36%)" },
          ]
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
          style={{ height: "100%", width: "100%", margin: "0 auto" }}
        />
      </div>
    );
  }
}
