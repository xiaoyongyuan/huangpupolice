import React from "react";
import MapStyleJson from "../../config/map_style";
import BuildingImg from "../../assets/image/building.png";
import { Table } from "antd";
import "./warning.less";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import echartsTheme from "../../config/echartTheme";
import ReactEcharts from "echarts-for-react";
import { Icon, Carousel, Tabs, Button } from "antd";
import Image1 from "../../assets/image/张渊凯.jpg";
import Image from "../../assets/image/timg.jpg";
const { TabPane } = Tabs;
export default class ManageOverview extends React.Component {
  importantOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}"
    },
    legend: {
      itemGap: 10,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#fff",
        fontSize: 10
      },
      orient: "horizontal",
      top: 180,
      data: [
        "广州港公安局老港派出所（在线140/总200）",
        "广州港公安局新港派出所（在线61/总100）",
        "广州市水上分局鱼珠派出所（在线80/总100）"
      ]
    },
    series: [
      {
        name: "警力资源",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        bottom: 50,
        label: {
          normal: {
            show: true,
            position: "center",
            formatter: function (argument) {
              var html;
              html = "201\r\n警力资源总数";
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
            show: true
          }
        },
        data: [
          { value: 140, name: "广州港公安局老港派出所（在线140/总200）" },
          { value: 61, name: "广州港公安局新港派出所（在线61/总100）" },
          { value: 80, name: "广州市水上分局鱼珠派出所（在线80/总100）" }
        ]
      }
    ]
  };
  componentDidMount() {
    echarts.registerTheme("myTheme", echartsTheme);
    this.renderMap();
  }

  renderMap = data => {
    let AMap = window.AMap;
    let map = new AMap.Map("Map", {
      zoom: 16, //级别
      center: [113.4818601600, 23.1864049100], //中心点坐标
      mapStyle: "amap://styles/dbbc68118bee5e4bc4484074b7b87276", //设置地图的显示样式
      viewMode: "3D" //使用3D视图
    });
    let marker = new AMap.Marker({
      position: [113.47998, 23.18876],
    });
    marker.setMap(map);
    let marker1 = new AMap.Marker({
      position: [113.4821605700, 23.1909809200],
    });
    marker1.setMap(map);
    let marker2 = new AMap.Marker({
      position: [113.4804010400, 23.1842746500],
    });
    marker2.setMap(map);
    let marker3 = new AMap.Marker({
      position: [113.4739208200, 23.1828544500],
    });
    marker3.setMap(map);
    let content = `
    <div class='infoWindow'>
      <div>人脸布控 毕琅迢 拍摄于22:22:22</div>
      <div class='infoWindow-Wrap'>
        <div><img src=${Image1} class='infoWindow-image'/></div>
        <div class='infoWindow-detail'>
          <p>姓名：毕琅迢</p>
          <p>性别：男</p>
          <p>身份证号：310101198810100643</p>
          <div class='infoWindow-status'>上访人员</div>
        </div>
      </div>
      <div class='infoWindow-zhipai'>
        下发任务：
        <div>
          <input name="xiafa" type="radio" value="张超(100米)"/>张超(100米)
          <input name="xiafa" type="radio" value="余斌(100米)"/>余斌(200米)
          <input name="xiafa" type="radio" value="刘胜涵(100米)" />刘胜涵(500米)
        </div>
        <div class='infoWindow-btns'>
          <button class='infoWindow-confirm'>确定</button>
          <button class='infoWindow-cancel'>取消</button>
        </div>
      </div>
    </div>`
    marker.content = content
    marker1.content = content
    marker2.content = content
    marker3.content = content
    let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
    marker.on('click', (e) => {
      infoWindow.setContent(e.target.content);
      infoWindow.open(map, e.target.getPosition())
    });
    marker1.on('click', (e) => {
      infoWindow.setContent(e.target.content);
      infoWindow.open(map, e.target.getPosition())
    });
    marker2.on('click', (e) => {
      infoWindow.setContent(e.target.content);
      infoWindow.open(map, e.target.getPosition())
    });
    marker3.on('click', (e) => {
      infoWindow.setContent(e.target.content);
      infoWindow.open(map, e.target.getPosition())
    });
    let canvas = document.createElement('canvas');
    canvas.width = canvas.height = 200;

    let context = canvas.getContext('2d')
    context.fillStyle = 'rgb(0,100,255)';
    context.strokeStyle = 'white';
    context.globalAlpha = 1;
    context.lineWidth = 2;
    let radious = 0;
    let draw = function () {
      context.clearRect(0, 0, 200, 200)
      context.globalAlpha = (context.globalAlpha - 0.01 + 1) % 1;
      radious = (radious + 1) % 100;

      context.beginPath();
      context.arc(100, 100, radious, 0, 2 * Math.PI);
      context.fill();
      context.stroke();

      //2D视图时可以省略
      CanvasLayer.reFresh();

      AMap.Util.requestAnimFrame(draw);
    };
    let CanvasLayer = new AMap.CanvasLayer({
      canvas: canvas,
      bounds: new AMap.Bounds(
        [113.47498, 23.18676],
        [113.48498, 23.19076]
      ),
      zooms: [3, 18],
    });
    CanvasLayer.setMap(map);
    draw()
  };
  //头部搜索
  onSearch = value => {
    console.log(value);
  };
  columns = [
    {
      title: "",
      dataIndex: "type",
      key: "type",
      width: 70
    },
    {
      title: "无效",
      dataIndex: "wuxiao",
      key: "wuxiao"
    },
    {
      title: "处置中",
      dataIndex: "chuzhizhong",
      key: "chuzhizhong"
    },
    {
      title: "已处置",
      dataIndex: "yichuzhi",
      key: "yichuzhi"
    },
    {
      title: "总数",
      dataIndex: "total",
      key: "total"
    }
  ];
  tableData = [
    {
      key: 1,
      type: "总数",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    },
    {
      key: 2,
      type: "人数",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    },
    {
      key: 3,
      type: "车牌",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    },
    // {
    //   key: 4,
    //   type: "IMSI",
    //   wuxiao: "28",
    //   chuzhizhong: "28",
    //   yichuzhi: "28",
    //   total: "56"
    // },
    {
      key: 5,
      type: "MAC",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    },
    {
      key: 6,
      type: "虚拟身份",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    },
    {
      key: 7,
      type: "异常行为",
      wuxiao: "28",
      chuzhizhong: "28",
      yichuzhi: "28",
      total: "56"
    }
  ];
  render() {
    return (
      <div className="manageOverview1">
        <div id="Map" className="Map" />
        <div className="left-content1">
          <div className="content-item" style={{ margin: "20px 10px" }}>
            <div className="title">警力资源</div>
            <ReactEcharts
              option={this.importantOption}
              theme="myTheme"
              style={{ height: 240 }}
            />
          </div>
          <div className="content-item" style={{ margin: "20px 10px" }}>
            <div className="title">预警统计</div>
            <div className="table">
              <Table
                pagination={false}
                columns={this.columns}
                dataSource={this.tableData}
                rowClassName={(record, index) => {
                  if (index % 2 !== 0) {
                    return "rowclass";
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="tabBtn">
          <div className="yujing">
            <p>预</p> <p>警</p>
          </div>
          <div className="fengxian">
            <p>风</p> <p>险</p>
          </div>
        </div>
        <div className="right-content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="人脸" key="1">
              <div className="total">
                <div className="total1">
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">今日数</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">未指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已处置</p>
                  </div>
                </div>
                <div className="total2">按时间排序▼</div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">张亚军</div>
                  <div className="status">已指派</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image1}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">粤AM26A1</div>
                  <div className="status">已处置</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员车辆
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">MAC	A5:64:CA:2A:91:77</div>
                  <div className="status">未处置</div>
                </div>
                <div className="content-detail">
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="车辆道闸" key="2">
              <div className="total">
                <div className="total1">
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">今日数</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">未指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已处置</p>
                  </div>
                </div>
                <div className="total2">按时间排序▼</div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">张亚军</div>
                  <div className="status">已指派</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image1}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">粤AM26A1</div>
                  <div className="status">已处置</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员车辆
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">MAC	A5:64:CA:2A:91:77</div>
                  <div className="status">未处置</div>
                </div>
                <div className="content-detail">
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </TabPane>
            <TabPane tab="MAC" key="3">
              <div className="total">
                <div className="total1">
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">今日数</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">未指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已处置</p>
                  </div>
                </div>
                <div className="total2">按时间排序▼</div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">张亚军</div>
                  <div className="status">已指派</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image1}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">粤AM26A1</div>
                  <div className="status">已处置</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员车辆
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">MAC	A5:64:CA:2A:91:77</div>
                  <div className="status">未处置</div>
                </div>
                <div className="content-detail">
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </TabPane>
            <TabPane tab="异常行为" key="4">
              <div className="total">
                <div className="total1">
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">今日数</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">未指派</p>
                  </div>
                  <div className="item">
                    <p className="number">90</p>
                    <p className="title">已处置</p>
                  </div>
                </div>
                <div className="total2">按时间排序▼</div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">张亚军</div>
                  <div className="status">已指派</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image1}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">粤AM26A1</div>
                  <div className="status">已处置</div>
                </div>
                <div className="content-detail">
                  <div>
                    <img src={Image}></img>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员车辆
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailItem">
                <div className="title">
                  <div className="name">MAC	A5:64:CA:2A:91:77</div>
                  <div className="status">未处置</div>
                </div>
                <div className="content-detail">
                  <div style={{ marginLeft: 10 }}>
                    <p>采集时间：10:10:10</p>
                    <p>采集地址：广州市越秀区星光印景正大门</p>
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: "12px" }}
                      >
                        上访人员
                      </Button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
