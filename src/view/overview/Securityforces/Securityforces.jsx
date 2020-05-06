import React from "react";
import ReactEcharts from "echarts-for-react";
import SecurityEchartsone from "./SecurityEchartsone";
import SecurityEchartstwo from "./SecurityEchartstwo";
import SecurityEchartsthree from "./SecurityEchartsthree";
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import "./Securityforces.less";
import { DEFAULT_MIN_VERSION } from "tls";
const { TabPane } = Tabs;
export default class Securityforces extends React.Component {
    state = {
        Echartsdata1: [
            { name: '小偷小摸', value: 20 },
            { name: '寻衅滋事', value: 24 },
            { name: '车辆刮蹭', value: 28 },
            { name: '道路违停', value: 28 }
        ],
        policedata: [
            { policetime: "2020年1月13日", minute: "10:35:50", describe: "广州黄埔区港湾一村附近发生交通事故，行车撞到一老人，双方发生争执。", result: "警员现场已经协调赔偿完成" },
            { policetime: "2020年2月10日", minute: "20:35:50", describe: "广州黄埔新村附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万。", result: "目前案件正在调查中" },
            { policetime: "2020年2月13日", minute: "10:35:50", describe: "广州黄埔区黄埔花园附近发生交通事故，行车撞到一老人，双方发生争执。", result: "警员现场已经协调赔偿完成" },
            { policetime: "2020年1月19日", minute: "20:35:50", describe: "广州保利·香雪山附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万。", result: "目前案件正在调查中" },
        ],
        securitydata: [
            { name: '接警', value: 1567 },
            { name: '处警', value: 1056 },
        ],
        patroltaskdata: [
            [
                "广州港公安局老港派出所346 采集123条",
                "广州港公安局新港派出所355 采集323条",
                "广州市水上分局鱼珠派出所567 采集42条",
                "广州市黄埔区鱼珠派出所643 采集244条",
                "广州市黄埔区穗东派出所768 采集145条",
                "广州市黄埔区荔联派出所843 采集231条",
                "广州市黄埔区黄埔派出所456 采集145条",
                "广州市黄埔区红山派出所435 采集213条",
                "广州市黄埔区大沙派出所763 采集167条",
                "广州市黄埔区南岗派出所456 采集198条",
                "广州市黄埔区长洲派出所762 采集165条",
                "广州市黄埔区文冲派出所532 采集276条",
                "广州市东区派出所457 采集173条",
                "广州市九佛派出所987 采集234条",
                "广州市镇龙派出所780 采集276条",
                "广州市联和派出所567 采集180条",
            ],
            [
                "广州市黄埔区穗东派出所568 采集234条",
                "广州市黄埔区荔联派出所435 采集65条",
                "广州市黄埔区黄埔派出所632 采集94条",
                "广州市黄埔区红山派出所567 采集69条",
                "广州市黄埔区大沙派出所354 采集49条",
                "广州市黄埔区南岗派出所768 采集257条",
                "广州市黄埔区长洲派出所987 采集194条",
                "广州市黄埔区文冲派出所324 采集279条",
                "广州市东区派出所456 采集58条",
                "广州市九佛派出所235 采集165条",
                "广州市镇龙派出所784 采集179条",
                "广州市联和派出所324 采集159条",
                "萝岗派出所563 采集148条",
                "广州市夏港街派出所459 采集158条",
                "广州市黄埔区永和派出所067 采集158条",
            ],
            [
                "广州港公安局老港派出所435 采集85条",
                "广州港公安局新港派出所234 采集158条",
                "广州市水上分局鱼珠派出所543 采集158条",
                "广州市黄埔区鱼珠派出所423 采集123条",
                "广州市东区派出所432 采集158条",
                "广州市九佛派出所768 采集147条",
                "广州市镇龙派出所563 采集174条",
                "广州市联和派出所797 采集148条",
                "萝岗派出所745 采集123条",
                "广州市夏港街派出所963 采集138条",
                "广州市黄埔区永和派出所537 采集167条",
                "广州市水上分局鱼珠派出所856 采集93条",
                "广州市黄埔区鱼珠派出所352 采集147条",
                "广州市黄埔区穗东派出所345 采集158条",
                "广州市黄埔区荔联派出所234 采集147条",
            ],
            [
                "广州市东区派出所346 采集134条",
                "广州市九佛派出所125 采集168条",
                "广州市镇龙派出所764 采集148条",
                "广州市联和派出所345 采集148条",
                "萝岗派出所453 采集148条",
                "广州市夏港街派出所346 采集185条",
                "广州市黄埔区永和派出所243 采集147条",
                "广州港公安局老港派出所578 采集147条",
                "广州港公安局新港派出所647 采集268条",
                "广州市水上分局鱼珠派出所853 采集69条",
                "广州市黄埔区鱼珠派出所567 采集269条",
                "广州市黄埔区穗东派出所845 采集165条",
                "广州市黄埔区荔联派出所795 采集143条",
                "广州市黄埔区黄埔派出所579 采集68条",
            ]
        ],
        isactive1: null,
        isactive2: null,
        isactive3: null,
        isactive4: null,
        protect: [
            { name: "学校", num: "267", content: [{ name: "幼儿园", num: "95" }, { name: "小学", num: "74" }, { name: "初中", num: "52" }, { name: "高中", num: "33" }, { name: "大学", num: "13" }] },
            { name: "医院", num: "127", content: [{ name: "三级", num: "23" }, { name: "二级", num: "45" }, { name: "一级", num: "59" }] },
            { name: "店铺", num: "451", content: [{ name: "餐饮", num: "138" }, { name: "零售", num: "105" }, { name: "其他", num: "208" }] },
        ],
        lundata: [{ num: "57", name: '东区派出所' }, { num: "12", name: '九佛派出所' }, { num: "32", name: '镇龙派出所' }, { num: "56", name: '联和派出所' }, { num: "13", name: '萝岗派出所' }, { num: "87", name: '夏港街派出所' }, { num: "65", name: '永和派出所' }, { num: "32", name: '老港派出所' }, { num: "32", name: '新港派出所' }, { num: "32", name: '局鱼珠派出所' },{ num: "23", name: '东区派出所' }, { num: "45", name: '九佛派出所' }, { num: "56", name: '镇龙派出所' }, { num: "87", name: '联和派出所' }, { num: "78", name: '萝岗派出所' }, { num: "45", name: '夏港街派出所' }, { num: "65", name: '永和派出所' }, { num: "76", name: '老港派出所' }, { num: "32", name: '新港派出所' }, { num: "87", name: '局鱼珠派出所' }],
        luncolor:["rgb(255,144,105)","rgb(127,255,228)","rgb(0,150,243)","rgb(233,219,120)","rgb(0,233,219)","rgb(52,218,98)","rgb(208,161,14)","rgb(208,87,14)","rgb(235,54,0)","rgb(325,33,0)",]
    };
    isactive1(val) {
        this.setState({
            isactive1: val
        })
    }
    isactive2(val) {
        this.setState({
            isactive2: val
        })
    }
    isactive3(val) {
        this.setState({
            isactive3: val
        })
    }
    isactive4(val) {
        this.setState({
            isactive4: val
        })
    }
    renderTabBar = (props, DefaultTabBar) => (
        <Sticky bottomOffset={80}>
            {({ style }) => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
            )}
        </Sticky>
    );
    componentDidMount() {
        let _this=this;
        this.refs.everechartss.scrollTop = 0;
        console.log(this.refs.everechartss);
        var timer = setInterval(this.rollStart.bind(_this), 100);
        this.setState({
            timer,
        },()=>{
            this.refs.everechartss.onmouseover = function () {
                clearInterval(_this.state.timer);
            }
            this.refs.everechartss.onmouseout = function () {
                timer = setInterval(_this.rollStart.bind(_this), 100);
                _this.setState({
                    timer
                })
            }
        })
    }
    rollStart(){
        if (this.refs.everechartss.scrollTop >= this.refs.lunfa.offsetHeight - this.refs.everechartss.clientHeight) {
            this.refs.everechartss.scrollTop = 0;
        }
        else {
            this.refs.everechartss.scrollTop += 1;
        }
    }
    hanleSecurity=(name)=>{
        if(name=="学校"){
            return "protectimg security1";
        }else if(name=="医院"){
            return "protectimg security2";
        }else if(name=="店铺"){
            return "protectimg security3";
        }
    };
    componentWillUnmount(){
        clearInterval(this.state.timer);
    }
    render() {
        let _this = this;
        return (
            <div className="Security_overCon">
                <div className="Security_left_content">
                    <div className="flexdivs" style={{ flex: 1 }}>
                        <div className="titlepolice">基本警力情况</div>
                        <div className="everechartss">
                            <div className="Basicpolice">
                                <div className="Basicpolicesix">
                                    <p className="titlenum">5510</p>
                                    <p className="futitle">户籍民警</p>
                                </div>
                                <div className="Basicpolicesix">
                                    <p className="titlenum">8357</p>
                                    <p className="futitle">内勤民警</p>
                                </div>
                                <div className="Basicpolicesix">
                                    <p className="titlenum">2667</p>
                                    <p className="futitle">案件民警</p>
                                </div>
                            </div>
                            <div className="Basicpolice">
                                <div className="Basicpolicesix">
                                    <p className="titlenum">21770</p>
                                    <p className="futitle">社区民警</p>
                                </div>
                                <div className="Basicpolicesix">
                                    <p className="titlenum">2291</p>
                                    <p className="futitle">巡逻民警</p>
                                </div>
                                <div className="Basicpolicesix">
                                    <p className="titlenum">4235</p>
                                    <p className="futitle">辅警</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexdivs" style={{ flex: 1, margin: "15px 0" }}>
                        <div className="titlepolice">派出所警力</div>
                        <div className="everechartss"  ref='everechartss'>
                            {/* <SecurityEchartsone /> */}
                            <div className="lunfa" ref="lunfa">
                                {this.state.lundata.map((v, keys) => {
                                    return (
                                        <div className="everpink" key={keys+""}>
                                            <div className="evertitle">{v.name}</div>
                                            <div className="strip">
                                                <span className="colour1" style={{ backgroundColor:_this.state.luncolor[parseInt(keys/3)] }}></span>
                                                <span className="colour2" style={{ backgroundColor: _this.state.luncolor[parseInt(keys/3)], width: v.num+"%" }}></span>
                                                <span className="colournum">{v.num}</span>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="flexdivs" style={{ flex: 2 }}>
                        <div className="titlepolice">巡逻任务</div>
                        <div className="everechartss">
                            <StickyContainer>
                                <Tabs defaultActiveKey="1" renderTabBar={this.renderTabBar}>
                                    <TabPane tab="警车" key="1">
                                        <div className="car">
                                            {this.state.patroltaskdata[0].map((v, keys) => {
                                                return (
                                                    <div onClick={_this.isactive1.bind(_this, keys)} className={_this.state.isactive1 === keys ? 'carcontent_active' : 'carcontent'} key={keys + ""}>
                                                        <div className="carben"><span className="iconfont icon-xiaojiaoche"></span></div>
                                                        <div className="carpolice">{v}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="摩托车" key="2">
                                        <div className="car">
                                            {this.state.patroltaskdata[1].map((v, keys) => {
                                                return (
                                                    <div onClick={_this.isactive2.bind(_this, keys)} className="carcontent" className={_this.state.isactive2 === keys ? 'carcontent_active' : 'carcontent'} key={keys + ""}>
                                                        <div className="carben"><span className="iconfont icon-icon-test"></span></div>
                                                        <div className="carpolice">{v}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="便衣" key="3">
                                        <div className="car">
                                            {this.state.patroltaskdata[2].map((v, keys) => {
                                                return (
                                                    <div onClick={_this.isactive3.bind(_this, keys)} className="carcontent" className={_this.state.isactive3 === keys ? 'carcontent_active' : 'carcontent'} key={keys + ""}>
                                                        <div className="carben"><span className="iconfont icon-yifu"></span></div>
                                                        <div className="carpolice">{v}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="卡点" key="4">
                                        <div className="car">
                                            {this.state.patroltaskdata[3].map((v, keys) => {
                                                return (
                                                    <div onClick={_this.isactive4.bind(_this, keys)} className="carcontent" className={_this.state.isactive4 === keys ? 'carcontent_active' : 'carcontent'} key={keys + ""}>
                                                        <div className="carben"><span className="iconfont icon-weibiaoti-_huabanfuben"></span></div>
                                                        <div className="carpolice">{v}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </StickyContainer>
                        </div>
                    </div>
                </div>


                <div className="Security_right_content">
                    <div className="flexdivs" style={{ flex: 1, marginBottom: "15px" }}>
                        <div className="titlepolice">今日接警和处警</div>
                        <div className="everechartss">
                            <SecurityEchartstwo data={this.state.securitydata} />
                        </div>
                    </div>
                    <div className="flexdivs" style={{ flex: 2, marginBottom: "15px" }}>
                        <div className="titlepolice">事件比例</div>
                        <div className="everechartss">
                            <SecurityEchartsthree />
                        </div>
                    </div>
                    <div className="flexdivs" style={{ flex: 2 }}>
                        <div className="titlepolice">辖区安保</div>
                        <div className="everechartss">
                            {this.state.protect.map((v, keys) => {
                                return (
                                    <div className="protectd" key={keys + ""}>
                                        <div className={this.hanleSecurity(v.name)} >
                                            <p>{v.num}</p>
                                            <p>{v.name}</p>
                                        </div>
                                        <div className="protectcontent">
                                            {v.content.length > 0 ?
                                                v.content.map((v2, keys2) => {
                                                    return (
                                                        <div className="evercontent" key={keys2 + ""}>
                                                            <p className="contentnum">{v2.num}</p>
                                                            <p className="contentname">{v2.name}</p>
                                                        </div>
                                                    )
                                                })
                                                :
                                                ""
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
