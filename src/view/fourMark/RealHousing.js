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
import moment from "moment";
import "../controlBoundary/public.less";
class RealHousing extends Component {
    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                year: "2019年",
                houseNumber: "2765",
                times: "2019-12-09 12:00:02",
                person: "刘小宝",
            },{
                key: 2,
                year: "2019年",
                houseNumber: "3245",
                times: "2019-04-24 17:23:45",
                person: "李强",
            },{
                key: 3,
                year: "2018年",
                houseNumber: "3245",
                times: "2018-11-24 10:47:02",
                person: "王梅",
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
            title: "年份",
            dataIndex: "year",
            key: "year"
        },
        {
            title: "实有房屋数",
            dataIndex: "houseNumber",
            key: "houseNumber"
        },
        {
            title: "上传时间",
            dataIndex: "times",
            key: "times"
        },
        {
            title: "上传人",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (text, record) => {
                return (
                    <div>
                        <Button
                            size="small"
                            type="primary"
                            style={{ marginRight: 10 }}
                            onClick={() => {
                                this.showModal(record);
                            }}
                        >
                            编辑
                        </Button>
                        <Button
                            size="small"
                            type="danger"
                            style={{ marginRight: 10 }}
                            onClick={() => {
                                this.delete(record.key);
                            }}
                        >
                            删除
                        </Button>
                    </div>
                );
            }
        }
    ];
    searchFormList = [
        {
            type: "INPUT",
            label: "年份",
            field: "year",
            width: 200
        }
    ];
    return = key => {
        Modal.confirm({
            title: "房屋布控撤销",
            content: "是否确认要撤销此布控记录？",
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                let tableData = this.state.tableData;
                tableData.map(item => {
                    if (item.key == key) {
                        item.status = "未下发";
                    }
                });
                this.setState({
                    tableData: tableData
                });
            }
        });
    };
    delete = key => {
        Modal.confirm({
            title: "房屋删除",
            content: "是否确认要删除此记录，删除后不可恢复？",
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                let tableData = this.state.tableData;
                let newData = [];
                tableData.map(item => {
                    if (item.key !== key) {
                        newData.push(item);
                    }
                });
                this.setState({
                    tableData: newData
                });
            }
        });
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
            value.times1=moment(value.times);
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
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        return (
            <div style={{ padding: 20 }}>
                <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
                    <MySearchForm
                        formList={this.searchFormList}
                        filterSubmit={this.handleSearchSubmit}
                    />
                    <div className="topBtns">
                        <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                                this.showModal("add");
                            }}
                        >
                            新增
                        </Button>
                    </div>
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
                    className="viewWarningModal"
                    destroyOnClose={true}
                    title={this.state.isAdd ? "房屋新增" : "房屋编辑"}
                    visible={this.state.showModal}
                    onCancel={this.handleModalCancel}
                    footer={
                        <div style={{ textAlign: "center" }}>
                            <Button type="primary" onClick={this.handleSave}>
                                保存
                            </Button>
                        </div>
                    }
                >
                    <Form {...formItemLayout}>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="年份">
                                    {getFieldDecorator("year", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入年份！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="实有房屋数">
                                    {getFieldDecorator("houseNumber", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输实有房屋数！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })(
                                        <Input maxLength={20} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="上传时间">
                                    {getFieldDecorator("times1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择上传时间！"
                                            }
                                        ]
                                    })(
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            style={{width:"100%"}}
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="上传人">
                                    {getFieldDecorator("person", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入上传人！"
                                            },
                                            {
                                                pattern: /^1[3456789]\d{9}$/,
                                                message: `请输入正确的联系电话!`
                                            }
                                        ]
                                    })( <Input maxLength={11} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </div>
        );
    }
}
export default Form.create()(RealHousing);
