import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import {
    Modal,
    Button,
    Form,
    Input,
    Row,
    Col,
    Upload,
    Icon,
    DatePicker
} from "antd";
import moment from "moment";
import "../controlBoundary/public.less";
class RealEntity extends Component {
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
                unitName: "广州市黄埔区经济发展和科技局",
                person: "陈道若",
                address: "香雪三路1号萝岗行政服务中心D栋1-2楼",
                linkPerson: "沈爽固",
                linkIphone: "13467890889",
                times:"2007-09-12 09:23",
                capital: "103.4万",
            },{
                key: 2,
                unitName: "广州市黄埔区广州开发区国土资源和规划局",
                person: "魏来芙",
                address: "广东省广州市黄埔区汇星路81号A栋5-6楼",
                linkPerson: "谭铮云",
                linkIphone: "13123452456",
                times:"2003-02-22 11:30",
                capital: "131万",
            },{
                key: 3,
                unitName: "国家知识产权局专利局专利审查协作广东中心",
                person: "常扬颖 ",
                address: "广东省广州市黄埔区Y079",
                linkPerson: "冯永",
                linkIphone: "18723456778",
                times:"2005-03-12 08:40",
                capital: "231万",
            },{
                key: 4,
                unitName: "广州市城市管理综合执法局萝岗分局夏港街执法队",
                person: "葛思花",
                address: " 广东省广州市黄埔区夏港街",
                linkPerson: "毕柱",
                linkIphone: "13478909876",
                times:"2001-03-24 10:20",
                capital: "631万",
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
            title: "单位名称",
            dataIndex: "unitName",
            key: "unitName"
        },
        {
            title: "法人",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "注册地址",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "联系人",
            dataIndex: "linkPerson",
            key: "linkPerson"
        },
        {
            title: "联系电话",
            dataIndex: "linkIphone",
            key: "linkIphone"
        },
        {
            title: "注册时间",
            dataIndex: "times",
            key: "times"
        },
        {
            title: "注册资金",
            dataIndex: "capital",
            key: "capital"
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
            type: "DATES",
            label: "注册时间",
            field: "times",
            width: 200
        },
        {
            type: "INPUT",
            label: "单位名称",
            field: "unitName",
            width: 200
        }
    ];
    return = key => {
        Modal.confirm({
            title: "单位布控撤销",
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
            title: "单位删除",
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
                    title={this.state.isAdd ? "单位新增" : "单位编辑"}
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
                                <Form.Item label="单位名称">
                                    {getFieldDecorator("unitName", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入单位名称！"
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
                                    })(
                                        <Input maxLength={20} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="注册地址">
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
                                <Form.Item label="联系人">
                                    {getFieldDecorator("linkPerson", {
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
                                    })( <Input maxLength={11} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="联系电话">
                                    {getFieldDecorator("linkIphone", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入联系电话！"
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
                                <Form.Item label="注册时间">
                                    {getFieldDecorator("times1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入户数！"
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
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="注册资金">
                                    {getFieldDecorator("capital", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入注册资金！"
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
                    title="单位导入"
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
export default Form.create()(RealEntity);
