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
class ParkManagement extends Component {
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
                name: "合景·科汇发展中心",
                address: "广东省广州市黄埔区科学大道111号科学城信息大厦内",
                linkName: "李华",
                linkIphone: "18729075667",
                person: "张鹏",
                floorNum:23,
                houseNum: 6789,
            }, {
                key: 2,
                name: "状元谷电子商务产业园",
                address: "广东省广州市黄埔区护林路1199号",
                linkName: "李园",
                linkIphone: "13678936782",
                person: "孙涵涵",
                floorNum:34,
                houseNum: 3789,
            }, {
                key: 3,
                name: "新元路5号",
                address: "广东省广州市黄埔区新元路5号",
                linkName: "赵兵",
                linkIphone: "13678936782",
                person: "黄飞",
                floorNum:46,
                houseNum: 8452,
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
            title: "园区名称",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "园区位置",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "联系人",
            dataIndex: "linkName",
            key: "linkName"
        },
        {
            title: "联系电话",
            dataIndex: "linkIphone",
            key: "linkIphone"
        },
        {
            title: "法人",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "楼数",
            dataIndex: "floorNum",
            key: "floorNum"
        },
        {
            title: "房屋数",
            dataIndex: "houseNum",
            key: "houseNum"
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
            label: "园区名称",
            field: "name",
            width: 200
        },
        {
            type: "INPUT",
            label: "园区位置",
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
            title: "园区删除",
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
                    title={this.state.isAdd ? "园区新增" : "园区编辑"}
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
                                <Form.Item label="园区名称">
                                    {getFieldDecorator("name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入园区名称！"
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
                                <Form.Item label="园区位置">
                                    {getFieldDecorator("address", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入园区位置！"
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
                                <Form.Item label="联系人">
                                    {getFieldDecorator("linkName", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入联系人！"
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
                                <Form.Item label="联系电话">
                                    {getFieldDecorator("linkIphone", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入联系电话！"
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
                        <Row>
                            <Col span={12}>
                                <Form.Item label="法人">
                                    {getFieldDecorator("person", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入法人！"
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
                                <Form.Item label="楼数">
                                    {getFieldDecorator("floorNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入楼数！"
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
                                <Form.Item label="房屋数">
                                    {getFieldDecorator("houseNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入房屋数！"
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
                    title="园区导入"
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
export default Form.create()(ParkManagement);
