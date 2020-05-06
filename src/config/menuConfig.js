import Warning from "../view/warning/Warning"; //预警指挥
import FaceControl from "../view/controlBoundary/FaceControl"; //人脸布控
import PlateControl from "../view/controlBoundary/PlateControl"; //车牌布控
import BoundaryControl from "../view/controlBoundary/BoundaryControl"; //围界布控
import ParkManagement from "../view/fourMark/ParkManagement"; //园区管理
import BuildingManagement from "../view/fourMark/BuildingManagement"; //楼栋管理
import RealHousing from "../view/fourMark/RealHousing"; //实有房屋
import RealEntity from "../view/fourMark/RealEntity"; //实有单位
import RealVehicles from "../view/fourMark/RealVehicles"; //实有车辆
import RealPopulation from "../view/fourMark/RealPopulation"; //实有人口
import Search from "../view/search/Search"; //一键搜
import AttentionPersonnel from "../view/managementObjects/AttentionPersonnel"; //关注人员
import CaringStaff from "../view/managementObjects/CaringStaff"; //关爱人员
import KeyPersonnel from "../view/managementObjects/KeyPersonnel"; //重点人员
import KeyVehicle from "../view/managementObjects/KeyVehicle"; //重点车辆
import SystemPermissions from "../view/integratedServices/SystemPermissions"; //权限管理
import DisputeCases from "../view/integratedServices/DisputeCases"; //纠纷案件
import GridManagement from "../view/integratedServices/GridManagement"; //网格管理
const MenuList = [
  {
    title: "预警指挥",
    key: "/main/warning",
    component: Warning,
    icon:'sound'
    // children:[
    //     {
    //         title:'预警指挥',
    //         key:'/main/warning',
    //         component:Warning
    //     }
    // ]
  },
  {
    title: "布控和围界",
    icon:'project',
    children: [
      {
        title: "人脸布控",
        key: "/main/faceControl",
        component: FaceControl
      },
      {
        title: "车牌布控",
        key: "/main/plateControl",
        component: PlateControl
      },
      {
        title: "围界设定",
        key: "/main/boundaryControl",
        component: BoundaryControl
      }
    ]
  },
  {
    title: "四标四实",
    icon:'desktop',
    children: [
      {
        title: "园区管理",
        key: "/main/parkManagement",
        component: ParkManagement
      },
      {
        title: "楼栋管理",
        key: "/main/buildingManagement",
        component: BuildingManagement
      },
      {
        title: "实有房屋",
        key: "/main/realHousing",
        component: RealHousing
      },
      {
        title: "实有人数",
        key: "/main/realPopulation",
        component: RealPopulation
      },
      {
        title: "实有单位",
        key: "/main/realEntity",
        component: RealEntity
      },
      {
        title: "实有车辆",
        key: "/main/realVehicles",
        component: RealVehicles
      }
    ]
  },
  {
    title: "一键搜",
    key: "/main/search",
    component: Search,
    icon:'file-search',
    // children:[
    //     {
    //         title:'一键搜',
    //         key:'/main/search',
    //         component:Search
    //     },
    // ]
  },
  {
    title: "重点管理对象",
    icon:'team',
    children: [
      {
        title: "关注人员",
        key: "/main/attentionPersonnel",
        component: AttentionPersonnel
      },
      
      {
        title: "重点人员",
        key: "/main/keyPersonnel",
        component: KeyPersonnel
      },
      {
        title: "关注车辆",
        key: "/main/caringStaff",
        component: CaringStaff
      },
      {
        title: "重点车辆",
        key: "/main/keyVehicle",
        component: KeyVehicle
      }
    ]
  },
  {
    title: "综合业务管理",
    icon:'setting',
    children: [
      {
        title: "系统权限",
        key: "/main/systemPermissions",
        component: SystemPermissions
      },
      {
        title: "纠纷案件",
        key: "/main/disputeCases",
        component: DisputeCases
      },
      {
        title: "网格管理",
        key: "/main/gridManagement",
        component: GridManagement
      }
    ]
  }
];
export default MenuList;
