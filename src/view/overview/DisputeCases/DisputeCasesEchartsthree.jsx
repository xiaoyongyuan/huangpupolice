import React from "react";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class DisputeCasesEchartsthree extends React.Component {
  state = {
    data: [],
    colors: [['#389af4', '#dfeaff'], ['#ff8c37', '#ffdcc3'], ['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'], ['#a181fc', '#e3d9fe']],
    option: {}
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    }, () => {
      let _this = this;
      var titleArr = [];
      var seriesArr = [];
      _this.state.data.forEach(function (item, index) {
        titleArr.push(
          {
            text: item.name,
            left: index * 22 + 18 + '%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: '16',
              color: _this.state.colors[index][0],
              textAlign: 'center',
            },
          }
        );
        seriesArr.push(
          {
            name: item.name,
            type: 'pie',
            clockWise: false,
            radius: [30, 35],
            itemStyle: {
              normal: {
                color: _this.state.colors[index][0],
                shadowColor: _this.state.colors[index][0],
                shadowBlur: 0,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
              }
            },
            hoverAnimation: false,
            center: [index * 22 + 18 + '%', '50%'],
            data: [{
              value: item.value,
              label: {
                normal: {
                  formatter: function (params) {
                    return params.value + '%';
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: _this.state.colors[index][0]
                  }
                }
              },
            }, {
              value: 100 - item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: _this.state.colors[index][1]
                },
                emphasis: {
                  color: _this.state.colors[index][1]
                }
              }
            }]
          }
        )
      });


      var option = {
        // title: titleArr,
        // series: seriesArr
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}:{c}({d}%)"
        },
        color:["#D38642","#32A5FD","#F26759"],
        series: [{
          name: '警情类别',
          type: 'pie',
          selectedMode: 'single',
          label: {
            normal: {
              position: 'inner'
            }
          },
          data: [{
            value: 40,
            name: '小偷小摸', selected: true
          }, {
            value: 48,
            name: '寻衅滋事'
          }, {
            value: 56,
            name: '车辆剐蹭'
          }, {
            value: 56,
            name: '道路违停'
          }]
        }]
      }
      this.setState({
        option,
      })
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
