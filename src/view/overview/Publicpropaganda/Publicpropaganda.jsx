import React from "react";
import ReactEcharts from "echarts-for-react";
import PublicEchartsOne from "./PublicEchartsOne";
import PublicEchartstwo from "./PublicEchartstwo";
import PublicEchartsThree from "./PublicEchartsThree";
import PublicEchartsFour from "./PublicEchartsFour";
import PublicEchartssecurity from "./PublicEchartssecurity";
import { List, Avatar } from 'antd';
import "./Publicpropaganda.less";
export default class Publicpropaganda extends React.Component {
    state = {
        listdata: [
            { title: "和苑小区", equipment: "设备2台", condition: "全部正常" },
            { title: "中天花园", equipment: "设备2台", condition: "全部正常" },
            { title: "东城雅苑", equipment: "设备2台", condition: "全部正常" },
            { title: "岭南雅筑", equipment: "设备2台", condition: "全部正常" },
            { title: "雅居乐富春山居", equipment: "设备2台", condition: "全部正常" },
            { title: "菠船生活区", equipment: "设备3台", condition: "全部正常" },
            { title: "瑞东花园", equipment: "设备2台", condition: "全部正常" },
            { title: "中洲流水人家", equipment: "设备2台", condition: "全部正常" },
            { title: "东兴楼", equipment: "设备2台", condition: "全部正常" },
            { title: "海安小区", equipment: "设备1台", condition: "全部正常" },
            { title: "佳大时代公寓", equipment: "设备2台", condition: "全部正常" },
            { title: "科城山庄", equipment: "设备2台", condition: "全部正常" },
            { title: "锦林山庄", equipment: "设备1台", condition: "全部正常" },
            { title: "丰乐大厦", equipment: "设备2台", condition: "全部正常" },
            { title: "鱼木小区", equipment: "设备2台", condition: "全部正常" },
            { title: "阳光雅筑", equipment: "设备2台", condition: "全部正常" },
            { title: "海关大院", equipment: "设备2台", condition: "全部正常" },
            { title: "飞晟文汇", equipment: "设备2台", condition: "全部正常" },
        ],
        PublicEchartdata1:[
            {name: '矛盾纠纷',value: 13}, 
            {name: '重点整治',value: 20},
            {name: '安全隐患',value: 28}
        ],
        PublicEchartdata2:[
            {name: '突发事件',value: 12}, 
            {name: '涉法信访',value: 10}, 
            {name: '其他事件',value: 17}
        ],
    }
    componentDidMount() {
        let _this=this;
        this.refs.flexdivcontent.scrollTop = 0;
        var timer = setInterval(this.rollStart.bind(_this), 100);
        this.setState({
            timer,
        },()=>{
            this.refs.flexdivcontent.onmouseover = function () {
                clearInterval(_this.state.timer);
            }
            this.refs.flexdivcontent.onmouseout = function () {
                timer = setInterval(_this.rollStart.bind(_this), 100);
                _this.setState({
                    timer
                })
            }
        })
    }
    rollStart(){
        if (this.refs.flexdivcontent.scrollTop >= this.refs.flexdivcontentch.offsetHeight - this.refs.flexdivcontent.clientHeight) {
            this.refs.flexdivcontent.scrollTop = 0;
        }
        else {
            this.refs.flexdivcontent.scrollTop += 1;
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.timer);
    }
    
    render() {
        return (
            <div className="Publicpropaganda_overCon">
                <div className="Publicpropaganda_left_content">
                    <div className="flexdiv" style={{flex:2}}>
                        <div className="title">设备状况</div>
                        <div className="flexdivcontent" ref='flexdivcontent'>
                            <div className="flexdivcontentch" ref="flexdivcontentch">
                                {this.state.listdata.map((v, keys) => {
                                    return (
                                        <p className="public-item" key={keys}>
                                            <span className="public-name">{v.title}</span>
                                            <span className="public-num">{v.equipment}</span>
                                            <span className="public-status">{v.condition}</span>
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flexdiv" style={{flex:1,margin:"15px 0"}}>
                        <div className="title">当日公益宣传主题</div>
                        <div className="flexdivcontenttwo">
                            <h2>抗击肺炎<span>(已展示次数 1786次)</span></h2>
                            <h2>扫黑除恶<span>(已展示次数 2834次)</span></h2>
                        </div>
                    </div>
                    <div className="flexdiv" style={{flex:2}}>
                        <div className="title">治安舆情</div>
                        <div className="Echartsone">
                            <PublicEchartssecurity data={this.state.PublicEchartdata1} />
                            <PublicEchartssecurity data={this.state.PublicEchartdata2} />
                        </div>
                    </div>
                </div>


                <div className="Publicpropaganda_right_content">
                    <div className="publicright" style={{marginBottom:"15px"}}>
                        <div className="title">主题浏览时间段</div>
                        <div className="Echartsone">
                            <PublicEchartsOne />
                        </div>
                    </div>
                    <div className="publicright" style={{marginBottom:"15px"}}>
                        <div className="title">今日驻足观看人数</div>
                        <div className="Echartsone">
                            <PublicEchartstwo />
                        </div>
                    </div>
                    <div className="publicright" style={{marginBottom:"15px"}}>
                        <div className="title">累计驻足观看人数</div>
                        <div className="Echartsone">
                            <PublicEchartsThree />
                        </div>
                    </div>
                    <div className="publicright" style={{flex:1.5}}>
                        <div className="title">观看人员年龄和性别分类</div>
                        <div className="Echartsone">
                            <PublicEchartsFour />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
