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
    Icon
} from "antd";
import "../controlBoundary/public.less";
class BuildingManagement extends Component {
    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        exportModal:false,
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                floorNumber: "1#楼",
                quarters: "萝岗和苑",
                address: "广东省广州市黄埔区",
                layerNum: "33",
                cellNumber: "4",
                households:351,
                population: 1789,
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
            title: "楼编号",
            dataIndex: "floorNumber",
            key: "floorNumber"
        },
        {
            title: "所在小区",
            dataIndex: "quarters",
            key: "quarters"
        },
        {
            title: "位置",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "层数",
            dataIndex: "layerNum",
            key: "layerNum"
        },
        {
            title: "单元数",
            dataIndex: "cellNumber",
            key: "cellNumber"
        },
        {
            title: "户数",
            dataIndex: "households",
            key: "households"
        },
        {
            title: "人口",
            dataIndex: "population",
            key: "population"
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
                                this.props.history.push(`/main/building/detail/${record.floorNumber}`)
                            }}
                        >
                            详情
                        </Button>
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
            label: "小区",
            field: "quarters",
            width: 200
        },
        {
            type: "INPUT",
            label: "人口",
            field: "population",
            width: 200
        }, {
            type: "INPUT",
            label: "位置",
            field: "address",
            width: 200
        },
    ];
    return = key => {
        Modal.confirm({
            title: "人员布控撤销",
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
            title: "楼栋删除",
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
    exportModal=()=>{
        this.setState({exportModal:true})
    };
    handleExportCancel=()=>{
        this.setState({exportModal:false})
    };
    handleExportSave=()=>{
        this.setState({exportModal:false})
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
                        &nbsp;&nbsp;
                        <Button
                            size="small"
                            type="primary"
                            onClick={this.exportModal}
                        >
                            导入
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
                    title={this.state.isAdd ? "楼栋新增" : "楼栋编辑"}
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
                                <Form.Item label="楼编号">
                                    {getFieldDecorator("floorNumber", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入楼编号！"
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
                                <Form.Item label="所在小区">
                                    {getFieldDecorator("quarters", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入所在小区！"
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
                                <Form.Item label="位置">
                                    {getFieldDecorator("address", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入位置！"
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
                            <Col span={12}>
                                <Form.Item label="层数">
                                    {getFieldDecorator("layerNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入层数！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })( <Input maxLength={11} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="单元数">
                                    {getFieldDecorator("cellNumber", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入单元数！"
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
                                <Form.Item label="户数">
                                    {getFieldDecorator("households", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入户数！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="人口">
                                    {getFieldDecorator("population", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入人口！"
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
                    </Form>
                </Modal>
                <Modal
                    destroyOnClose={true}
                    title="楼栋导入"
                    visible={this.state.exportModal}
                    onCancel={this.handleExportCancel}
                    footer={
                        <div style={{ textAlign: "center" }}>
                            <Button type="primary" onClick={this.handleExportSave}>
                                保存
                            </Button>
                        </div>
                    }
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="文件" extra="仅支持扩展名：.xls .xlsx">
                            {getFieldDecorator("blueprint", {
                                rules: [
                                    {
                                        required: true,
                                        message: "请选择文件上传！"
                                    }
                                ]
                            })(
                                <Upload name="file" action="/upload.do" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'>
                                    <Button>
                                        <Icon type="upload" /> 点击选择文件
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        );
    }
}
export default Form.create()(BuildingManagement);
