import React from "react";
import MapStyleJson from "../../config/map_style";
import "./overview.less";
import Overviewpage from "./overviewpage";
import Publicpropaganda from "./Publicpropaganda/Publicpropaganda";
import Securityforces from "./Securityforces/Securityforces";
import SensingDevice from "./SensingDevice";
import DisputeCases from "./DisputeCases/DisputeCases";
import KeyObjects from "./KeyObjects";
import Knowledge from "./Knowledge";
import carMap from "../../assets/image/carMap.png";
import carmMap from "../../assets/image/carmMap.png";
import doorMap from "../../assets/image/doorMap.png";
import doorNoMap from "../../assets/image/doorNoMap.png";
import equMap from "../../assets/image/equMap.png";
import faceMap from "../../assets/image/faceMap.png";
import wifiMap from "../../assets/image/wifiMap.png";
import specialPerson from "../../assets/image/specialPerson.png";
import childrenPerson from "../../assets/image/childrenPerson.png";
import lovePerson from "../../assets/image/lovePerson.png";
import factory from "../../assets/image/factory.png";
import hospital from "../../assets/image/hospital.png";
import school from "../../assets/image/school.png";
import security from "../../assets/image/security.png";
import police from "../../assets/image/police.png";
import address from "../../assets/image/address.png";
import PropagandaIcon from "../../assets/image/PropagandaIcon.png";
import { Icon } from 'antd'
let AMap=window.AMap;
export default class ManageOverview extends React.Component {
  state={
      navvalue:"总览",
      classNameDate:['overview bg',"overview allTitle","overview allTitle","overview titleImport","overview security","overview security","overview security"],
      heatmapData:[
          {'lng': 113.541219, 'lat': 23.20347, 'count': 594},
          {'lng': 113.521307, 'lat': 23.302516, 'count': 194},
          {'lng': 113.525426, 'lat': 23.082243, 'count': 54},
          {'lng': 113.478048, 'lat': 23.139081, 'count': 194},
          {'lng': 113.451269, 'lat': 23.13908, 'count': 567},
          {'lng': 113.445776, 'lat': 23.092349, 'count': 47},
          {'lng': 113.456762, 'lat': 23.110034, 'count': 32},
          {'lng': 113.452642, 'lat': 23.159285, 'count': 232},
    ],
      markers: [
        {
          icon: carMap,
          name:"车辆道闸",
          position: [113.452642, 23.159285]
      }, {
          icon: carmMap,
          name:"治安摄像头",
          position: [113.478048, 23.139081]
      }, {
          icon: doorMap,
          name:"通行门闸",
          position: [113.541219, 23.20347]
      },{
          icon: doorNoMap,
          name:"单元门禁",
          position:[113.552206,23.251898],
      },{
          icon:equMap,
          name:"围界设备",
          position:[113.544996,23.184377]
      },{
          icon:faceMap,
          name:"人脸采集",
          position:[113.560445,23.155655]
      },{
          icon:wifiMap,
          name:"wifi采集",
          position:[113.501394,23.201103]
      }],
      heatmap:{},//热力图
      polygon:{},
      polygon1:{},
      polygon2:{},
  };
  map={};
  //感知设备 坐标点
  markerPoints=[];
  //安保力量  坐标点
  forcesPoints=[];
  //辖区警情 坐标点
  jurisdictionPoint=[];
  //公共宣传 坐标点
  propagandaPoint=[];
  titleName = ["总览", "四标四实", "感知设备", "重点对象", "安保力量", "辖区警情", "公共宣传"];
  path=[
        new AMap.LngLat(113.47775638, 23.18939314),
        new AMap.LngLat(113.47957492, 23.19087244),
        new AMap.LngLat(113.48065317, 23.19005883),
        new AMap.LngLat(113.48101258, 23.18952628),
        new AMap.LngLat(113.482005, 23.18861897),
        new AMap.LngLat(113.47928524, 23.18722841)
    ];
  path1=[
        new AMap.LngLat(113.4740281100,23.1801915500),
        new AMap.LngLat(113.4736526000,23.1789685700,),
        new AMap.LngLat(113.4726762800,23.1768776300),
        new AMap.LngLat(113.4719681700,23.1759505100),
        new AMap.LngLat(113.4758734700,23.1743329700),
        new AMap.LngLat(113.4781479800,23.1752206500),
        new AMap.LngLat(113.4778904900,23.1766705100),
        new AMap.LngLat(113.4780299700,23.1783176200),
        new AMap.LngLat(113.4766995900,23.1787811700),
        new AMap.LngLat(113.4754335900,23.1799647000),
    ];
  path2=[
        new AMap.LngLat(113.4951531900,23.1782189900),
        new AMap.LngLat(113.4954696900,23.1764042100),
        new AMap.LngLat(113.4972292200,23.1763499700),
        new AMap.LngLat(113.4972828600,23.1767592800),
        new AMap.LngLat(113.4978997700,23.1767642100),
        new AMap.LngLat(113.4980177900,23.1774102300),
        new AMap.LngLat(113.4997397700,23.1774250300),
        new AMap.LngLat(113.4997612200,23.1782042000)
    ];
  //自定义坐标数据
  sts = [
        {
        url: "https://a.amap.com/jsapi_demos/static/images/blue.png",
        size: new AMap.Size(32, 32),
        offset: new AMap.Pixel(-16, -16)
        },
        {
        url: "https://a.amap.com/jsapi_demos/static/images/green.png",
        size: new AMap.Size(32, 32),
        offset: new AMap.Pixel(-16, -16)
         },
        {
        url: "https://a.amap.com/jsapi_demos/static/images/orange.png",
        size: new AMap.Size(36, 36),
        offset: new AMap.Pixel(-18, -18)
        },
        {
        url: "https://a.amap.com/jsapi_demos/static/images/red.png",
        size: new AMap.Size(48, 48),
        offset: new AMap.Pixel(-24, -24)
        },
        {
        url: "https://a.amap.com/jsapi_demos/static/images/darkRed.png",
        size: new AMap.Size(48, 48),
        offset: new AMap.Pixel(-24, -24)
    }];
  //聚合坐标点
  polymerization=[
      {
          name:"特殊人群",
          count:"320",
          lnt:"113.534353",
          lat:"23.186271"
      },{
          name:"重点青少年",
          count:"250",
          lnt:"113.479764",
          lat:"23.1727"
      },{
          name:"关爱人员",
          count:"734",
          lnt:"113.493497",
          lat:"23.212462"
      },{
          name:"特殊人群",
          count:"235",
          lnt:"113.561132",
          lat:"23.248428"
      },{
          name:"重点青少年",
          count:"567",
          lnt:"113.501394",
          lat:"23.290691"
      },{
          name:"关爱人员",
          count:"567",
          lnt:"113.584135",
          lat:"23.340506"
      },{
          name:"特殊人群",
          count:"456",
          lnt:"113.469121",
          lat:"23.3383"
      },{
          name:"关爱人员",
          count:"320",
          lnt:"113.408697",
          lat:"23.215933"
      },{
          name:"关爱人员",
          count:"352",
          lnt:"113.531606",
          lat:"23.243065"
      },{
          name:"特殊人群",
          count:"235",
          lnt:"113.494184",
          lat:"23.184377"
      },{
          name:"特殊人群",
          count:"235",
          lnt:"113.477705",
          lat:"23.210885"
      },{
          name:"特殊人群",
          count:"235",
          lnt:"113.512037",
          lat:"23.204258"
      },{
          name:"重点青少年",
          count:"567",
          lnt:"113.528173",
          lat:"23.175225"
      },{
          name:"重点青少年",
          count:"567",
          lnt:"113.509977",
          lat:"23.179643"
      },
  ];
  //聚合集合
  polymerList={};
  //安保力量 坐标点集合
  securityList=[
      {
          type:1,
          icon: security,
          count:"2289",
          name:"九佛派出所",
          position: [113.518619,23.353955]
      }, {
          type:1,
          icon: security,
          count:"4523",
          name:"联和派出所",
          position: [113.430618,23.194385]
      },{
          type:2,
          icon: school,
          name:"玉泉学校",
          position: [113.528251,23.159096]
      },{
          type:2,
          icon: school,
          name:"玉鸣小学",
          position: [113.547677,23.14056]
      },{
          type:2,
          icon: school,
          name:"东荟花园小学",
          position: [113.502573,23.161173]
      }, {
          type:2,
          icon: factory,
          name:"黄埔老厂",
          position: [113.417065,23.084572]
      }, {
          type:2,
          icon: factory,
          name:"广州华南船舶修造厂",
          position: [113.43022,23.083677]
      }, {
          type:2,
          icon: factory,
          name:"广州珠江冶炼厂",
          position: [ 113.450306,23.128036]
      },{
          type:4,
          icon: hospital,
          name:"广东省电力一局医院",
          position: [113.530085,23.093012]
      },{
          type:4,
          icon: hospital,
          name:"中山大学附属第三医院·岭南医院",
          position: [113.471986,23.170979]
      },{
          type:5,
          icon: police,
          name:"广州市公安局广州经济技术开发区分局",
          position: [113.534453,23.061446]
      },{
          type:5,
          icon: police,
          count:"289",
          name:"广州市公安局港航分局",
          position: [113.451707,23.093984]
      },
  ];
  //辖区警情 坐标点集合
   jurisdictionList=[
       {
           type:1,
           icon: security,
           count:"3289",
           name:"黄埔派出所",
           position: [113.447764,23.104088]
       },{
           type:1,
           icon: security,
           count:"6456",
           name:"萝岗派出所",
           position: [113.488111,23.177447]
       },{
           type:1,
           icon: security,
           count:"3461",
           name:"南岗派出所",
           position: [113.5398440000,23.0918400000]
       },{
           type:1,
           icon: security,
           count:"9834",
           name:"红山派出所",
           position: [113.4681050000,23.0994840000]
       },{
           type:1,
           icon: security,
           count:"2143",
           name:"大沙派出所",
           position: [113.4571100000,23.1070500000]
       },{
           type:1,
           icon: security,
           count:"1250",
           name:"镇龙派出所",
           position: [113.5729590000,23.2760160000]
       },{
           type:1,
           icon: security,
           count:"1092",
           name:"东区派出所",
           position: [113.5338310000,23.1278690000]
       },{
           type:1,
           icon: security,
           count:"1790",
           name:"九佛派出所",
           position: [113.5185600000,23.3539900000]
       },{
           type:1,
           icon: security,
           count:"2908",
           name:"联合派出所",
           position: [113.4303820000,23.1943680000]
       },
       {
           type:2,
           icon: address,
           infor:"广州黄埔区港湾一村附近发生交通事故，行车撞到一老人，双方发生争执。",
           position: [113.548498,23.22879]
       },{
           type:2,
           icon: address,
           infor:"广州保利·香雪山附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万。",
           position: [113.475329,23.175951]
       },{
           type:2,
           icon: address,
           infor:"广州黄埔区摩登大厦附近入室盗窃丢失大量笔记本电脑。",
           position: [113.51629,23.141015]
       },{
           type:2,
           icon: address,
           infor:"广州黄埔区东圃来来俱乐部门前发生枪击事件，造成５人受伤入院。",
           position: [113.3207700000,23.1461400000]
       },{
           type:2,
           icon: address,
           infor:"黄埔区科学城南翔支路、天河区车陂路中海康城路段被偷排废水刑事附带民事诉讼案由黄埔区人民法院作出一审判决，被告人及被告单位被判赔偿广州市净水有限公司、广州市猎德污水处理厂人民币共计15623692.12元。",
           position: [113.4928280000,23.1814400000]
       },{
           type:2,
           icon: address,
           infor:"广州黄埔区鱼珠商贸城发生一起疯狂砍人事件，十多个大汉光天化日之下，在大马路上挥刀追砍两名男子",
           position: [113.4155600000,23.1048700000]
       },{
           type:2,
           icon: address,
           infor:"广州黄埔两天发生两起剪刀伤人的事件，附近居民忧心忡忡",
           position: [113.5038860000,23.2145540000]
       },{
           type:2,
           icon: address,
           infor:"广州市黄埔区开发大道南往北方向发生一起小汽车追尾一辆由重型半挂牵引车牵引的挂车尾部的较大道路交通事故，造成小汽车司机及1名乘客当场死亡，小汽车上另1名乘客受伤，经送医院抢救无效死亡。",
           position: [113.5200600000,23.0908600000]
       }
   ];
   //公共宣传 坐标点集合
   propagandaList=[
        {
            icon: PropagandaIcon,
            count:"5674",
            name:"抗击肺炎,扫黑除恶",
            position: [113.447764,23.104088]
        }, {
           icon: PropagandaIcon,
           count:"2556",
           name:"保障稳定,依法防控",
           position: [113.479233,23.143264]
       },{
           icon: PropagandaIcon,
           count:"7533",
           name:"居小家，为大家",
           position: [113.494425,23.12669]
       },{
           icon: PropagandaIcon,
           count:"3689",
           name:"不忘初心,牢记使命",
           position: [113.538034,23.322741]
       },{
           icon: PropagandaIcon,
           count:"6703",
           name:"共同担当,此战必赢！",
           position: [113.581755,23.231203]
       },{
           icon: PropagandaIcon,
           count:"8740",
           name:"三强两促",
           position: [113.51217,23.181497]
       }
    ];
  componentDidMount() {
    this.renderMap();
    this.hanleDivision();
  }
  hanleSelect = (value,keys) => {
    this.titleName.map((v) => {
      if (v == value) {
        this.titleStyle = value;
        this.setState({
          navvalue:value
        })
      }
        //热力图  四标四实
        if(this.heatmap){
            this.heatmap.hide();
        }
        //覆盖物小区 四标四实
        if(this.polygon && this.polygon1 && this.polygon2){
            this.polygon.hide();
            this.polygon1.hide();
            this.polygon2.hide();
        }
        //感知设备 坐标点
        if(this.markerPoints){
          this.map.remove(this.markerPoints)
        }
        //安保力量 坐标点
        if(this.forcesPoints){
            this.map.remove(this.forcesPoints)
        }
        //辖区警情 坐标点
        if(this.jurisdictionPoint){
            this.map.remove(this.jurisdictionPoint);
        }
        if(this.propagandaPoint){
            this.map.remove(this.propagandaPoint);
        }
        //点聚合  重点对象
        if(this.polymerList){
            this.map.remove(this.polymerList);
        }
      if(value==='总览'){
      }else if(value==='四标四实'){
          this.addBeiJing();//热力图
          this.hanleFiled();
      }else if(value==='感知设备'){
          this.handlePoint();//感知设备坐标点
      }else if(value==='重点对象'){
          this.hanleKeyObj();
      }else if(value==='安保力量'){
          this.handleSecurity();
      }else if(value==='辖区警情'){
          this.handleJurisdiction();
      }else if(value==='公共宣传'){
          this.handlePropaganda();
      }
    });
    var classNameDate=["overview allTitle","overview allTitle","overview allTitle","overview titleImport","overview security","overview security","overview security"];
    if (value == "总览"||value == "四标四实"||value == "感知设备") {
      classNameDate[keys]="overview bg"
    } else if (value == "重点对象") {
      classNameDate[keys]="overview titleImport2"
    } else if (value == "安保力量"||value == "辖区警情"||value == "公共宣传") {
      classNameDate[keys]="overview security2"
    }
    this.setState({
      classNameDate
    })

  };
  renderMap=()=> {
    this.map = new AMap.Map("Map", {
      viewMode: '3D',
      pitch: 55,
      zoom: 12,//级别
      skyColor:"#1c81ff",
      center: [113.528173, 23.191478],//中心点坐标
      mapStyle: 'amap://styles/dbbc68118bee5e4bc4484074b7b87276', //设置地图的显示样式
    });
  };
  //小区区域，鼠标浮上去显示文字
  hanleFiled=()=>{
    // 多边形轮廓线的节点坐标数组
    let _this=this;
    this.polygon = new AMap.Polygon({
      path: this.path,
      fillColor: '#228B22', // 多边形填充颜色
      borderWeight: 1, // 线条宽度，默认为 1
      strokeColor: '#7FFF00', // 线条颜色
      strokeOpacity:0.6,
    });
      this.polygon1 = new AMap.Polygon({
      path: this.path1,
      fillColor: '#228B22', // 多边形填充颜色
      borderWeight: 1, // 线条宽度，默认为 1
      strokeColor: '#7FFF00', // 线条颜色
      strokeOpacity:0.6,
    });
    this.polygon2 = new window.AMap.Polygon({
      path: this.path2,
      fillColor: '#228B22', // 多边形填充颜色
      borderWeight: 1, // 线条宽度，默认为 1
      strokeColor: '#7FFF00', // 线条颜色
      strokeOpacity:0.6,
    });
    let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      this.polygon.content = '<div style="color:#fff">萝岗和苑</div>';
      this.polygon.on('mousemove', (e) => {
       infoWindow.setContent(e.target.content);
       infoWindow.open(_this.map,e.lnglat)
     });
      this.polygon.on('mouseout', (e) => {
       infoWindow.close()
     });
      this.polygon1.content = '<div style="color:#fff">保利·香雪山</div>';
      this.polygon1.on('mousemove', (e) => {
        infoWindow.setContent(e.target.content);
        infoWindow.open(_this.map,e.lnglat)
      });
      this.polygon1.on('mouseout', (e) => {
        infoWindow.close()
      });
      this.polygon2.content = '<div style="color:#fff">广州香雪国际公寓</div>';
      this.polygon2.on('mousemove', (e) => {
        infoWindow.setContent(e.target.content);
        infoWindow.open(_this.map,e.lnglat)
      });
      this.polygon2.on('mouseout', (e) => {
        infoWindow.close()
      });
    this.map.add(this.polygon);
    this.map.add(this.polygon1);
    this.map.add(this.polygon2);
  };
  //黄埔行政区域
  hanleDivision=()=>{
      let _this=this;
      //加载行政区划插件
      AMap.service('AMap.DistrictSearch', function() {
          var opts = {
              subdistrict: 1,   //返回下一级行政区
              extensions: 'all',  //返回行政区边界坐标组等具体信息
              level: 'city'  //查询行政级别为 市
          };
          //实例化DistrictSearch
          let district = new AMap.DistrictSearch(opts);
          district.setLevel('district');
          //行政区查询
          district.search('黄埔区', function(status, result) {
              let bounds = result.districtList[0].boundaries;
              let polygons = [];
              if (bounds) {
                  for (var i = 0, l = bounds.length; i < l; i++) {
                      //生成行政区划polygon
                      var polygon = new window.AMap.Polygon({
                          map: _this.map,
                          strokeWeight: 2,
                          path: bounds[i],
                          fillOpacity: 0,
                          fillColor: '#000001',
                          strokeColor: '#31ead7'
                      });
                      polygons.push(polygon);
                  }
                  _this.map.setFitView();//地图自适应
                  _this.hanleFiled();
              }
          });
      });
  };
  //黄埔区热力图
  addBeiJing=()=> {
    let _this=this;
    _this.map.plugin(["AMap.Heatmap"], function () {
      //初始化heatmap对象
        _this.heatmap = new AMap.Heatmap(_this.map, {
        radius:25, //给定半径
        opacity: [0, 0.8]
      });
      //设置数据集
       _this.heatmap.setDataSet({
        data:_this.state.heatmapData,
        max: 100
      });
    });
  };
  //感知设备坐标点
  handlePoint=()=>{
      let _this=this;
      this.state.markers.forEach(function(marker) {
          let markerIcon= new AMap.Marker({
              position: new AMap.LngLat(marker.position[0], marker.position[1]),
              icon:new AMap.Icon({
                  image: marker.icon,
                  size: new AMap.Size(38, 38),  //图标大小
                  imageSize: new AMap.Size(38,38)
              }),
              offset: new AMap.Pixel(-13, -30)
          });
          _this.markerPoints.push(markerIcon);
          _this.map.add(_this.markerPoints);
          let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
          markerIcon.content = '<div style="color:#fff">'+marker.name+'</div>';
          markerIcon.on('mousemove', (e) => {
              infoWindow.setContent(e.target.content);
              infoWindow.open(_this.map,e.lnglat)
          });
          markerIcon.on('mouseout',() => {
              infoWindow.close()
          });
      });
  };
  //重点对象点聚合
  hanleKeyObj=()=>{
      let markers=[];
      let _this=this;
      for (let i = 0; i < this.polymerization.length; i += 1) {
          let objIcon="";
          if(this.polymerization[i].name=="特殊人群"){
              objIcon=specialPerson;
          }else if(this.polymerization[i].name=="重点青少年"){
              objIcon=childrenPerson;
          }else if(this.polymerization[i].name=="关爱人员"){
              objIcon=lovePerson;
          }
          let keyObj=new AMap.Marker({
              position: new AMap.LngLat(this.polymerization[i].lnt,this.polymerization[i].lat),
              icon:new AMap.Icon({
                  // 图标尺寸
                  size: new AMap.Size(38, 38),
                  // 图标所用图片大小
                  imageSize: new AMap.Size(38,38),
                  // 图标的取图地址
                  image: objIcon,
              }),
              offset: new AMap.Pixel(-15, -15)
          });
          markers.push(keyObj);
          let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
          keyObj.content = `<div style="color:#fff"><p>类型：${this.polymerization[i].name}</p><p>数量：${this.polymerization[i].count}人</p></div>`;
          keyObj.on('mousemove', (e) => {
              infoWindow.setContent(e.target.content);
              infoWindow.open(_this.map,e.lnglat)
          });
          keyObj.on('mouseout',() => {
              infoWindow.close()
          });
      }
      this.polymerList=new AMap.MarkerClusterer(this.map, markers, {
          styles: this.sts,
          gridSize: 80
      });
  };
  //安保力量 坐标点
  handleSecurity=()=>{
      let _this=this;
      this.securityList.forEach(function(marker) {
          let forcesIcon= new AMap.Marker({
              position: new AMap.LngLat(marker.position[0], marker.position[1]),
              icon:new AMap.Icon({
                  image: marker.icon,
                  size: new AMap.Size(38, 38),  //图标大小
                  imageSize: new AMap.Size(38,38)
              }),
              offset: new AMap.Pixel(-13, -30)
          });
          _this.forcesPoints.push(forcesIcon);
          _this.map.add(_this.forcesPoints);
          let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
          let context="";
          let powerPolice=`<div style="color:#fff"><p>名称：${marker.name}</p><p>数量：${marker.count}人</p></div>`;
          let otherPolice='<div style="color:#fff">'+marker.name+'</div>';
          if(marker.type=="1"){
              context=powerPolice;
          }else{
              context=otherPolice;
          }
          forcesIcon.content=context;
          forcesIcon.on('mousemove', (e) => {
              infoWindow.setContent(e.target.content);
              infoWindow.open(_this.map,e.lnglat)
          });
          forcesIcon.on('mouseout',() => {
              infoWindow.close()
          });
      });
  };
  //辖区警情 坐标点
  handleJurisdiction=()=>{
      let _this=this;
      this.jurisdictionList.forEach(function(marker) {
          let jurisdictionIcon= new AMap.Marker({
              position: new AMap.LngLat(marker.position[0], marker.position[1]),
              icon:new AMap.Icon({
                  image: marker.icon,
                  size: new AMap.Size(38, 38),  //图标大小
                  imageSize: new AMap.Size(38,38)
              }),
              offset: new AMap.Pixel(-13, -30)
          });
          _this.jurisdictionPoint.push(jurisdictionIcon);
          _this.map.add(_this.jurisdictionPoint);
          let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
          let context="";
          let powerPolice=`<div style="color:#fff"><p>名称：${marker.name}</p><p>人数：${marker.count}人</p></div>`;
          let otherPolice='<div style="color:#fff">'+marker.infor+'</div>';
          if(marker.type=="1"){
              context=powerPolice;
          }else if(marker.type=="2"){
              context=otherPolice;
          }
          jurisdictionIcon.content=context;
          jurisdictionIcon.on('mousemove', (e) => {
              infoWindow.setContent(e.target.content);
              infoWindow.open(_this.map,e.lnglat)
          });
          jurisdictionIcon.on('mouseout',() => {
              infoWindow.close()
          });
      });
  };
  //公共宣传 坐标点
  handlePropaganda=()=>{
      let _this=this;
      this.propagandaList.forEach(function(marker) {
          let propagandaIcon= new AMap.Marker({
              position: new AMap.LngLat(marker.position[0], marker.position[1]),
              icon:new AMap.Icon({
                  image: marker.icon,
                  size: new AMap.Size(38, 38),  //图标大小
                  imageSize: new AMap.Size(38,38)
              }),
              label:{
                  offset: new AMap.Pixel(2, -20),  //设置文本标注偏移量
                  content: `<div class='propaganInfo'>${marker.name}</div>`, //设置文本标注内容
                  direction: 'right' //设置文本标注方位
              },
              offset: new AMap.Pixel(-13, -30)
          });
          _this.propagandaPoint.push(propagandaIcon);
          _this.map.add(_this.propagandaPoint);
          let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
          propagandaIcon.content = `<div style="color:#fff">今日播放次数：${marker.count}次</div>`;
          propagandaIcon.on('mousemove', (e) => {
              infoWindow.setContent(e.target.content);
              infoWindow.open(_this.map,e.lnglat)
          });
          propagandaIcon.on('mouseout', (e) => {
              infoWindow.close()
          });
      });
  };
    render() {
    return (
      <div className="manageOverview-wrap">
        <div className='map-top'>
          <span className="titleName"></span>
          <span className="titleNine">黄埔区AI智感防控</span>
          <div className="titleCon">
            {
              this.titleName.map((v, keys) => {
                return (
                  <span key={keys + ""} className={this.state.classNameDate[keys]} onClick={() => this.hanleSelect(v,keys)}>{v}</span>
                )
              })
            }
          </div>
          <div className='map-top-enter'>
            <div className='enter' onClick={() => { this.props.history.push('/main') }}>进入系统 <Icon type="double-right" /></div>
             <div className='logout' onClick={()=>{this.props.history.push('/')}}>退出</div>
          </div>
        </div>
        <div id="Map" className="Map" />

        {this.state.navvalue==='总览'?<Overviewpage />:null}
        {this.state.navvalue==='四标四实'?<Knowledge />:null}
        {this.state.navvalue==='感知设备'?<SensingDevice />:null}
        {this.state.navvalue==='重点对象'?<KeyObjects />:null}
        {this.state.navvalue==='安保力量'?<Securityforces />:null}
        {this.state.navvalue==='辖区警情'?<DisputeCases />:null}
        {this.state.navvalue==='公共宣传'?<Publicpropaganda />:null}
      </div>
    );
  }
}
