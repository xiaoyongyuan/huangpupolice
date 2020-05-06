import React from "react";
import ReactEcharts from "echarts-for-react";
import DisputeCasesEchartsone from "./DisputeCasesEchartsone";
import DisputeCasesEchartsotwo from "./DisputeCasesEchartsotwo";
import DisputeCasesEchartsthree from "./DisputeCasesEchartsthree";
import { List } from 'antd';
import "./DisputeCases.less";
import { DEFAULT_MIN_VERSION } from "tls";
export default class DisputeCases extends React.Component {
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
            { policetime: "2020年1月13日", minute: "10:35:50", describe: "广州黄埔区港湾一村附近发生交通事故，行车撞到一老人，双方发生争执。", result: "警员现场已经协调赔偿完成" },
            { policetime: "2020年2月10日", minute: "20:35:50", describe: "广州黄埔新村附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万。", result: "目前案件正在调查中" },
            { policetime: "2020年2月13日", minute: "10:35:50", describe: "广州黄埔区黄埔花园附近发生交通事故，行车撞到一老人，双方发生争执。", result: "警员现场已经协调赔偿完成" },
            { policetime: "2020年1月19日", minute: "20:35:50", describe: "广州保利·香雪山附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万。", result: "目前案件正在调查中" },
        ]
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
            <div className="DisputeCases_overCon">
                <div className="DisputeCases_left_content">
                    <div className="flexdiv">
                        <div className="title">今日警情比例</div>
                        <div className="everecharts">
                            <DisputeCasesEchartsone />
                        </div>
                    </div>
                    <div className="flexdiv">
                        <div className="title">警情接报收集</div>
                        <div className="everecharts">
                            <DisputeCasesEchartsotwo />
                        </div>
                    </div>
                    <div className="flexdiv">
                        <div className="title">警情类别</div>
                        <div className="everecharts">
                            <DisputeCasesEchartsthree data={this.state.Echartsdata1} />
                        </div>
                    </div>
                </div>


                <div className="DisputeCases_right_content">
                    <div className="policetoday">
                        <h2>今日警情</h2>
                        <div className="policetodaycontent">
                            <div className="policetodayone">报警人员</div>
                            <div className="policetodaytwo">
                                <div>王一凡</div>
                                <div>蒋丽娟</div>
                                <div>王建成</div>
                                <div>刘芳芳</div>
                                <div>百奇</div>
                                <div>吴欢茜</div>
                                <div>施玉肖</div>
                                <div>岳 万</div>
                                <div>乐烽玟</div>
                                <div>陈晨晗</div>
                                <div>赖方霄</div>
                                <div>余雄锡</div>
                                <div>金名冬</div>
                                <div>张城庸</div>
                                <div>田江雯</div>
                                <div>陈洋圣</div>
                                <div>朱闫莹</div>
                                <div>陈俊</div>
                                <div>王俊然</div>
                                <div>陈国柏</div>
                            </div>
                        </div>
                    </div>
                    <div className="Detailedpolice">
                        <h2>详细警情</h2>
                        <div className="Detailedcontent">
                            <div className="evercontent">
                                <div className="tabtitle">报警时间</div>
                                <div className="tabtitle">事件描述</div>
                                <div className="tabtitle">处理结果</div>
                            </div>

                            <div className="soll" ref='flexdivcontent'>
                                <div className="sollch" ref="flexdivcontentch">
                                    {
                                        this.state.policedata.map((v, keys) => {
                                            return (
                                                <div className="evercontent" key={keys + ""}>
                                                    <div>
                                                        <span>{v.policetime}</span>
                                                        <br />
                                                        <span>{v.minute}</span>
                                                    </div>
                                                    <div>{v.describe}</div>
                                                    <div>{v.result}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
