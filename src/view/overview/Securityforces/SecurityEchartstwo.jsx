import React from "react";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class SecurityEchartstwo extends React.Component {
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
            left: index * 40 + 30 + '%',
            top: '80%',
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
            center: [index * 40 + 30 + '%', '50%'],
            data: [{
              value: item.value,
              label: {
                normal: {
                  formatter: function (params) {
                    return ""+params.value + '';
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
              value: 2000 - item.value,
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
        title: titleArr,
        series: seriesArr
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
          style={{ height: "100%", width: "100%",margin:"0 auto" }}
        />
      </div>
    );
  }
}
