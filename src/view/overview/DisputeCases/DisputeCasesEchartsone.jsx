import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import ReactEcharts from "echarts-for-react";
import { List, Avatar } from 'antd';
export default class DisputeCasesEchartsone extends React.Component {
  state = {
    option: {}
  }

  componentDidMount() {
    var option ={
        title: {
            text: "",
            subtext: "",
            left: "center",
            textStyle: {
                color: "#fff",
                fontSize: 18
            },
        },
    
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}:{c}({d}%)"
        },
        color:['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)'],
        series: [{
            name: '辖区警员比例',
            type: 'pie',
            selectedMode: 'single',
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 19,
                name: '东区派出所',selected: true
            }, {
                value: 11,
                name: '九佛派出所'
            },{
                value: 11,
                name: '镇龙派出所'
            },{
                value: 11,
                name: '联和派出所'
            }]
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
