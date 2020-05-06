import React from "react";
import BuildingImg from "../../assets/image/building.png";
import XiaoquImg from "../../assets/image/小区.png"
import XiezilouImg from "../../assets/image/写字楼.png"
import FangwuImg from "../../assets/image/房屋.png"
import DanweiImg from "../../assets/image/单位.png"
import RenkouImg from "../../assets/image/人口.png"
import CheliangImg from "../../assets/image/车辆.png"
import RenlianImg from "../../assets/image/人脸.png"
import ShexiangtouImg from "../../assets/image/摄像头.png"
import WeijieImg from "../../assets/image/围界.png"
import KakouImg from "../../assets/image/卡口.png"
import WifiImg from "../../assets/image/WIFI.png"
import MenjinImg from "../../assets/image/门禁.png"
import MinjingImg from "../../assets/image/民警.png"
import FujingImg from "../../assets/image/警察.png"
import QunzhongImg from "../../assets/image/群众工作部.png"
import GangtingImg from "../../assets/image/治安岗亭.png"
import ShebaoanImg from "../../assets/image/保安配置.png"
import QibaoanImg from "../../assets/image/保安.png"
import "./overviewpage.less";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import echartsTheme from "../../config/echartTheme";
import moment from "moment";
import ReactEcharts from "echarts-for-react";
import huangPu from "../../assets/json/huangPu.json";
export default class OverviewPage extends React.Component {
  state = {
    newTime: "",
    yearDate: "",
    dayDate: "",
    huangPuMap: {}
  };
  importantOption = {
    legend: {
      grid: {
        top: "30%",
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
        "重点上访\r\n 4091(26%)",
        "涉恐人员\r\n356(2.5%)",
        "涉稳人员\r\n1276(8.9%)",
        "重大刑事犯罪前科人员\r\n8606(60%)"
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
              html = "14329\r\n总人数";
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
          { value: 25, name: "重点上访\r\n 4091(26%)" },
          { value: 8, name: "涉恐人员\r\n356(2.5%)" },
          { value: 15, name: "涉稳人员\r\n1276(8.9%)" },
          { value: 22, name: "重大刑事犯罪前科人员\r\n8606(60%)" },
        ]
      }
    ]
  };
  caseOption = {
    legend: {
      itemGap: 10,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#fff",
        fontSize: 14
      },
      orient: "vertical",
      left: 25,
      top: "center",
      data: ["故意杀人", "故意伤害", "抢劫", "贩卖毒品", "防火"]
    },
    series: [
      {
        name: "纠纷案件A",
        type: "pie",
        radius: ["20%", "28%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: params => {
            let colors = ["#c23531", "transparent"];
            return colors[params.dataIndex];
          }
        },
        data: [{ value: 10, name: "故意杀人" }, { value: 90, name: "2" }]
      },
      {
        name: "故意伤害",
        type: "pie",
        radius: ["38%", "46%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: params => {
            let colors = ["#2f4554", "transparent"];
            return colors[params.dataIndex];
          }
        },
        data: [{ value: 20, name: "故意伤害" }, { value: 80, name: "2" }]
      },
      {
        name: "抢劫",
        type: "pie",
        radius: ["56%", "64%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: params => {
            let colors = ["#61a0a8", "transparent"];
            return colors[params.dataIndex];
          }
        },
        data: [{ value: 25, name: "抢劫" }, { value: 75, name: "2" }]
      },
      {
        name: "贩卖毒品",
        type: "pie",
        radius: ["74%", "82%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: params => {
            let colors = ["#d48265", "transparent"];
            return colors[params.dataIndex];
          }
        },
        data: [{ value: 35, name: "贩卖毒品" }, { value: 65, name: "2" }]
      },
      {
        name: "防火",
        type: "pie",
        radius: ["92%", "100%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: params => {
            let colors = ["#91c7ae", "transparent"];
            return colors[params.dataIndex];
          }
        },
        data: [{ value: 40, name: "防火" }, { value: 60, name: "2" }]
      }
    ]
  };
  componentDidMount() {
    echarts.registerTheme("myTheme", echartsTheme);
    echarts.registerMap('huangpu', huangPu);
    this.hanleHuangPuMap();
    let date = new Date();
    this.timer=setInterval(()=>{
      this.setState({
        newTime: moment(new Date()).format("HH:mm:ss"),
      })
    },1000);
    this.setState({
      newTime: moment(date).format("HH:mm:ss"),
      yearDate: moment(date).format("YYYY-MM-DD"),
      dayDate: moment(date).format('dddd')
    })
  }
  hanleHuangPuMap = () => {
    let huangPuMap = {
      title: {
        text: "黄埔区行政地图",
        left: 'left',
        top: 5,
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'huangpu',
        aspectScale: 0.75,
        silent: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        },
        zoom: 1,
        roam: false,
        itemStyle: {
          normal: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: 'rgba(13, 36, 55, 0.5)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(13, 36, 55, .9)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(128, 217, 248, 1)',
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10
          },
          emphasis: {
            show: false,
            areaColor: '#389BB7',
            borderWidth: 1
          }
        }
      },
      series: [
        {
          type: 'map',
          mapType: 'huangpu',
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false,
          roam: false,
          top: '10%',
          left: '9%',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              show: false
            }
          },
          data: []
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [{
            name: '黄埔公安局',
            value: [113.579508, 23.281622]
          }, {
            name: '连云港',
            value: [113.514801, 23.143732]
          }, {
            name: '东荟城',
            value: [113.507507, 23.166094]
          }, {
            name: '大岭顶',
            value: [113.499494, 23.24093]
          }
          ],
          symbolSize: 12,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#13DA86',
              shadowBlur: 10,
              shadowColor: '#13DA86'
            }
          },
          zlevel: 1
        }, {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [{
            name: '大唐',
            value: [113.509052, 23.337957]
          }, {
            name: '石门围',
            value: [113.53133, 23.299493]
          }],
          symbolSize: 12,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#FD1A2F',
              shadowBlur: 10,
              shadowColor: '#13DA86'
            }
          },
          zlevel: 1
        }, , {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [{
            name: '水西',
            value: [113.485265, 23.192074]
          }, {
            name: '土坑',
            value: [113.529318, 23.197356]
          }, {
            name: '石人岭',
            value: [113.498883, 23.256636]
          }],
          symbolSize: 12,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#FCD834',
              shadowBlur: 10,
              shadowColor: '#FCD834'
            }
          },
          zlevel: 1
        }
      ]
    }
    this.setState({ huangPuMap })
  };
 /* componentWillUnmount(){
    clearInterval(this.timer);
  }*/
  render() {
    return (
      <div className="overCon">
        <div className="left-content">
          <div className=" weather-item">
            <div className="weather">
              <div className="weatherLeft">
                <span className="w">黄埔区</span>
                <p className="sunImg"></p>
                <p className="day">{this.state.newTime}</p>
              </div>
              <div className="weatherRight">
                <p className="year">{this.state.yearDate}</p>
                <p className="days">{this.state.dayDate}</p>
              </div>
            </div>
          </div>
          <div className="fourMark overMargin">
            <div className="over-title"><span className="titleIcon" /><span className="title-name">四标四实</span></div>
            <div className="item-row">
              <div className="num-item">
                <img src={XiaoquImg} alt="" />
                <div className="num">
                  <span>社区</span>
                  <span className="number">132</span>
                </div>
              </div>
              <div className="num-item">
                <img src={XiezilouImg} alt="" />
                <div className="num">
                  <span>写字楼</span>
                  <span className="number">156</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={FangwuImg} alt="" />
                <div className="num">
                  <span>实有房屋</span>
                  <span className="number">624064</span>
                </div>
              </div>
              <div className="num-item">
                <img src={DanweiImg} alt="" />
                <div className="num">
                  <span>实有单位</span>
                  <span className="number">21402</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={RenkouImg} alt="" />
                <div className="num">
                  <span>实有人口</span>
                  <span className="number">109.10万</span>
                </div>
              </div>
              <div className="num-item">
                <img src={RenkouImg} alt="" />
                <div className="num">
                  <span>实有人口</span>
                  <span className="number">119.10万</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={CheliangImg} alt="" />
                <div className="num">
                  <span>实有车辆</span>
                  <span className="number">280.31万</span>
                </div>
              </div>
              <div className="num-item">
                <img src={CheliangImg} alt="" />
                <div className="num">
                  <span>实有车辆</span>
                  <span className="number">260.61万</span>
                </div>
              </div>
            </div>
          </div>
          <div className="over-item overMargin">
            <div className="over-title"><span className="titleIcon" /><span className="title-name">感知设备</span></div>
            <div className="item-row">
              <div className="num-item">
                <img src={RenlianImg} alt="" />
                <div className="num">
                  <span>人脸广告牌</span>
                  <span className="number">665</span>
                </div>
              </div>
              <div className="num-item">
                <img src={ShexiangtouImg} alt="" />
                <div className="num">
                  <span>摄像头</span>
                  <span className="number">50952</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={WeijieImg} alt="" />
                <div className="num">
                  <span>围界防范</span>
                  <span className="number">13960</span>
                </div>
              </div>
              <div className="num-item">
                <img src={KakouImg} alt="" />
                <div className="num">
                  <span>车牌卡口</span>
                  <span className="number">21528</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={WifiImg} alt="" />
                <div className="num">
                  <span>WIFI</span>
                  <span className="number">1320</span>
                </div>
              </div>
              <div className="num-item">
                <img src={MenjinImg} alt="" />
                <div className="num">
                  <span>门闸门禁</span>
                  <span className="number">7920</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainOver">
          <ReactEcharts
            option={this.state.huangPuMap}
            theme="myTheme"
            style={{ height: "calc(100vh - 80px)" }}
          />
          <div className="mapInfor">
            <p className="mapPerson"><span>人口：</span><span>109.10万</span></p>
            <p className="maproom"><span>下辖： </span><span>14个街道、1个镇</span></p>
            <p className="mapShow"><span className="mapPolice"></span><span>布控预警</span></p>
            <p className="mapShow"><span className="mapwei"></span><span>围界预警</span></p>
            <p className="mapShow"><span className="mapjiu"></span><span>纠纷案件</span></p>
          </div>
        </div>
        <div className="right-content">
          <div className="over-item">
            <div className="over-title"><span className="titleIcon" /><span className="title-name">重点对象</span></div>
            <ReactEcharts
              option={this.importantOption}
              theme="myTheme"
              style={{ height: "calc((100vh - 100px)/3.6)" }}
            />
          </div>
          <div className="over-item overMargin">
            <div className="over-title"><span className="titleIcon" /><span className="title-name">治安力量</span></div>
            <div className="item-row">
              <div className="num-item">
                <img src={MinjingImg} alt="" />
                <div className="num">
                  <span>民警</span>
                  <span className="number">154</span>
                </div>
              </div>
              <div className="num-item">
                <img src={FujingImg} alt="" />
                <div className="num">
                  <span>辅警</span>
                  <span className="number">257</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={QunzhongImg} alt="" />
                <div className="num">
                  <span>群防群治</span>
                  <span className="number">1521</span>
                </div>
              </div>
              <div className="num-item">
                <img src={GangtingImg} alt="" />
                <div className="num">
                  <span>治安岗亭</span>
                  <span className="number">45</span>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={ShebaoanImg} alt="" />
                <div className="num">
                  <span>社区保安</span>
                  <span className="number">3828</span>
                </div>
              </div>
              <div className="num-item">
                <img src={QibaoanImg} alt="" />
                <div className="num">
                  <span>企业保安</span>
                  <span className="number">1560</span>
                </div>
              </div>
            </div>
          </div>
          <div className="over-item overMargin">
            <div className="over-title"><span className="titleIcon" /><span className="title-name">纠纷案件</span></div>
            <ReactEcharts
              option={this.caseOption}
              theme="myTheme"
              style={{ height: "calc((100vh - 100px)/3.6)" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
