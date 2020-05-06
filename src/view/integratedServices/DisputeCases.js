import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import {
    Modal,
    Button,
    Form,
    Input,
    Select,
    Row,
    Col,
    Upload,
    DatePicker,
    Icon
} from "antd";
import "../controlBoundary/public.less";
import traffic1 from "../../assets/image/traffic1.jpg";
import traffic2 from "../../assets/image/traffic2.jpg";
import traffic3 from "../../assets/image/traffic3.jpg";
class DisputeCases extends Component {
    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        exportModal:false,
        imgModel:false,
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                times: "2018-10-02 09:24",
                caseType: "交通事件",
                description: "广州黄埔区港湾一村附近发生交通事故，行车撞到一老人，双方发生争执。",
                status: "已完成",
                person: "张鹏",
                processing:"2018-10-02 10:24",
                result: "警员现场已经协调赔偿完成",
                url:traffic1,
            },{
                key: 2,
                times: "2020-02-10 20:35",
                caseType: "抢劫",
                description: "广州黄埔新村附近一金店发生三人抢劫事件，很多首饰被抢，预计损失上百万",
                status: "正在进行中",
                person: "朱小英",
                processing:"2020-2-10 21:40",
                result: "目前案件正在调查中",
                url:traffic2,
            },{
                key: 3,
                times: "2019-11-26 07:59",
                caseType: "贩卖毒品",
                description: "广州黄埔区公安分局在“飓风2019”专项行动中，侦破一宗省目标特大贩毒案件，捣毁一个以黄埔区本地户籍人员为首的贩毒团伙",
                status: "正在进行中",
                person: "杨晓虹",
                processing:"2020-03-10 11:40",
                result: "该案仍在进一步侦办中",
                url:traffic3,
            }
        ]
    };
    columns = [
        {
            title: "序号",
            dataIndex: "index",
            key: "index",
            render: (text, racord, index) => <span>{index + 1}</span>
        },
        {
            title: "报警时间",
            dataIndex: "times",
            key: "times"
        }, {
            title: "案件类型",
            dataIndex: "caseType",
            key: "caseType"
        },
        {
            title: "事件描述",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "图片",
            dataIndex: "url",
            key: "url",
            width:150,
            render:(text)=>{
                return (<img src={text} alt="" style={{width:"90%",margin:"0 auto"}} onClick={()=>this.handleImg(text)} />)
            }
        },
        {
            title: "处理状态",
            dataIndex: "status",
            key: "status"
        },
        {
            title: "处理人",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "处理时间",
            dataIndex: "processing",
            key: "processing"
        },
        {
            title: "处理结果",
            dataIndex: "result",
            key: "result"
        }
    ];
    searchFormList = [
        {
            type: "DATE",
            label: "报警时间",
            field: "name",
            width: 200
        },
        {
            type: "INPUT",
            label: "处理状态",
            field: "status",
            width: 200
        },{
            type: "INPUT",
            label: "案件类别",
            field: "type",
            width: 200
        }
    ];
    handleImg=(text)=>{
        this.setState({
            url:text,
            imgModel:true
        })
    };
    hanleImgModel=()=>{
        this.setState({imgModel:false})
    };
    handleSearchSubmit = values => {
        console.log(values);
    };
    handlePaginationChange = pagination => {
        this.setState({
            pagination
        });
    };
    showModal = value => {
        if (value === "add") {
            this.setState({
                isAdd: true,
                detail: {},
                showModal: true
            });
        } else {
            this.setState(
                {
                    isAdd: false,
                    detail: value,
                    showModal: true
                },
                () => {
                    this.props.form.setFieldsValue(value);
                }
            );
        }
    };
    handleModalCancel = () => {
        this.props.form.resetFields();
        this.setState({
            isAdd: false,
            detail: {},
            showModal: false
        });
    };
    handleSave = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.isAdd) {
                    let tableData = this.state.tableData;
                    tableData.push(values);
                    this.props.form.resetFields();
                    this.setState({
                        tableData,
                        isAdd: false,
                        detail: {},
                        showModal: false
                    });
                } else {
                    let tableData = this.state.tableData;
                    let newData = [];
                    tableData.map(item => {
                        if (this.state.detail.key === item.key) {
                            newData.push({
                                key: item.key,
                                ...values
                            });
                        } else {
                            newData.push(item);
                        }
                    });
                    this.props.form.resetFields();
                    this.setState({
                        tableData: newData,
                        isAdd: false,
                        detail: {},
                        showModal: false
                    });
                }
            }
        });
    };
    handleMany = keys => {
        console.log(keys);
    };
    render() {
        return (
            <div style={{ padding: 20 }}>
                <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
                    <MySearchForm
                        formList={this.searchFormList}
                        filterSubmit={this.handleSearchSubmit}
                    />
                </div>
                <div style={{ minHeight: "520px" }}>
                    <MyTable
                        columns={this.columns}
                        data={this.state.tableData}
                        ableSelect={false}
                        handleMany={this.handleMany}
                    />
                </div>
                <MyPagination
                    pagination={this.state.pagination}
                    onChange={this.handlePaginationChange}
                    showSizeChange={true}
                />
                <Modal
                    title="纠纷案件图片"
                    visible={this.state.imgModel}
                    onCancel={this.hanleImgModel}
                    footer={null}
                    width={700}
                >
                    <img src={this.state.url} alt="" style={{width:"100%"}}/>
                </Modal>
            </div>
        );
    }
}
export default Form.create()(DisputeCases);
