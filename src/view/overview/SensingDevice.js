import React, {Component} from 'react'
import "./SensingDevice.less";
import sensing from "../../assets/image/sensing.png";
import person from "../../assets/image/person.png";
import keyVehicle1 from "../../assets/image/keyVehicle1.jpg";
import keyVehicle2 from "../../assets/image/keyVehicle2.jpg";
import keyVehicle3 from "../../assets/image/keyVehicle3.jpg";
import keyVehicle4 from "../../assets/image/keyVehicle4.jpg";
export default class SensingDevice extends Component{
    state={
        sensingList:[
            {
                name:"2019年03月02日  23点12分",
                address:"广州市黄埔区黄埔东路188号怡港花园百佳1层",
                img:sensing
            },{
                name:"2019年12月23日  10点32分 ",
                address:"广东省茂名市茂南区油城四路51号[东桥大楼附近43米",
                img:person
            },{
                name:"2019年05月23日  08点24分",
                address:"广州市黄埔区近郊黄埔区丰乐北路633号丰乐广场",
                img:keyVehicle1
            },{
                name:"2017年09月12日  03点40分",
                address:"广州市黄埔区黄埔东路727号山水时尚酒店内B座1楼",
                img:keyVehicle2
            },{
                name:"2020年02月05日  23点49分 ",
                address:"广州市黄埔区石化路123号文冲商贸大厦1楼",
                img:keyVehicle4
            },{
                name:"2018年11月13日  03点32分",
                address:"广州市黄埔区大沙东路276-278号",
                img:keyVehicle3
            }
        ]
    };
    componentDidMount() {
        this.industryNews = setInterval(this.taskIndustryNews, 20);
    }
    handleIndustryNewsEnter = () => {
        clearInterval(this.industryNews);
    };
    taskIndustryNews = () => {
        if (this.refs.newDiv.scrollTop >= this.refs.newDivUI.offsetHeight - this.refs.newDiv.clientHeight) {
            this.refs.newDiv.scrollTop = 0;
        }
        else {
            this.refs.newDiv.scrollTop += 1;
        }
    }
    handleIndustryNewsLeave = () => {
        this.industryNews = setInterval(this.taskIndustryNews, 50);
    };
    tableBody = (item, index) => {
        return (
            <li key={index}>
                <span className='ceShiTable-text2'>
                    {item.name}
                    <p>{item.address}</p>
                    <img src={item.img} alt=""/>
                </span>
            </li>
        );
    };
    componentWillUnmount = () => {
        clearInterval(this.industryNews);
    };
    render(){
        return (
            <div className="sensingDevice">
                <div className="sensingLeft">
                    <div className="sensing-item sensing-journal">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">设备数量</span></div>
                        <div className="journal-con">
                            <span className="journal-num">0</span>
                            <span className="journal-num">9</span>
                            <span className="journal-num">6</span>
                            <span className="journal-num">3</span>
                            <span className="journal-num">4</span>
                            <span className="journal-num">5</span>
                        </div>
                    </div>
                    <div className="sensing-item sensingMargin security-public">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">治安设备</span></div>
                        <div className="public-con">
                            <p className="public-item">
                                <span className="public-name">治安摄像头</span>
                                <span className="public-num">数量：1796</span>
                                <span className="public-status">今日预警：19</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">围界设备</span>
                                <span className="public-num">数量：3690</span>
                                <span className="public-status">今日预警：16</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">人脸采集</span>
                                <span className="public-num">数量：665</span>
                                <span className="public-status">今日采集：1459</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">WIFI采集</span>
                                <span className="public-num">数量：16790</span>
                                <span className="public-status">今日采集：156</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">车辆道闸</span>
                                <span className="public-num">数量：11750</span>
                                <span className="public-status">今日进入：3456</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">通行门闸</span>
                                <span className="public-num">数量：12753</span>
                                <span className="public-status">今日通过：2954</span>
                            </p>
                            <p className="public-item">
                                <span className="public-name">单元门禁</span>
                                <span className="public-num">数量：7920</span>
                                <span className="public-status">今日开门：79.7万</span>
                            </p>
                        </div>
                    </div>
                 {/*   <div className="sensing-item sensingMargin security-smartPower">
                        <div className="mark-title"><span className="titleIcon" /><span className="title-name">智慧电力</span></div>
                        <div className="smartPower-con">
                            <p className="smartPower-item"><span className="smartPower-title">关爱人员用电异常：</span><span className="smartPower-num">45个</span></p>
                            <p className="smartPower-item"><span className="smartPower-title">疑似传销：</span><span className="smartPower-num">23个</span></p>
                            <p className="smartPower-item"><span className="smartPower-title">电压过大：</span><span className="smartPower-num">67个</span></p>
                            <p className="smartPower-item"><span className="smartPower-title">电流过大：</span><span className="smartPower-num">76个</span></p>
                            <p className="smartPower-item"><span className="smartPower-title">温度过高：</span><span className="smartPower-num">43个</span></p>
                        </div>
                    </div>*/}
                </div>
                <div className="sensingRight">
                    <div className="mark-title"><span className="titleIcon" /><span className="title-name">运行日志</span></div>
                    <div className='ceShiTable'>
                        <div
                            ref='newDiv'
                            className='ceShiTable-body'
                            onMouseEnter={this.handleIndustryNewsEnter.bind(this)}
                            onMouseLeave={this.handleIndustryNewsLeave.bind(this)}
                        >
                            <ul ref='newDivUI'>
                                {
                                    this.state.sensingList.map(this.tableBody)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}