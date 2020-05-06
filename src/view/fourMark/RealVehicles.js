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
import bigCar from "../../assets/image/bigCar.jpg";
import car2 from "../../assets/image/car2.jpg";
class RealVehicles extends Component {
    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        exportModal:false,
        ImgModal:false,
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                licenseNumber: "粤A·5TG68",
                carType:"小型轿车",
                person: "汤万",
                address: "广州市黄埔区政府东区街道办事处2楼203",
                nature:"非营运",
                times:"2013-09-12 09:23",
                paymentTime:"2013-09-13 10:00",
                brandModel:"大众汽车牌SVW348R",
                identification:"LFPH4ACB411C02008",
                engine:"JL4762QCA",
                car:bigCar
            },{
                key: 2,
                licenseNumber: "粤A·1006R",
                carType:"小型轿车",
                person: "李浩龙",
                address: "广东省广州市黄埔区文冲安置房六期(黄埔华苑酒家西北)",
                nature:"家庭自用汽车",
                times:"2015-10-02 11:13",
                paymentTime:"2015-10-02 11:13",
                brandModel:"广汽本田飞度FIt",
                identification:"TOYOTA MOTOR CORPORATION",
                engine:"30V6VTEC",
                car:car2
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
            title: "车牌号",
            dataIndex: "licenseNumber",
            key: "licenseNumber"
        },
        {
            title: "车辆类型",
            dataIndex: "carType",
            key: "carType"
        },
        {
            title: "所有人",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "地址",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "使用性质",
            dataIndex: "nature",
            key: "nature"
        },
        {
            title: "注册日期",
            dataIndex: "times",
            key: "times"
        },
        {
            title: "发放时间",
            dataIndex: "paymentTime",
            key: "paymentTime"
        },{
            title: "品牌型号",
            dataIndex: "brandModel",
            key: "brandModel"
        },{
            title: "车辆识别代号",
            dataIndex: "identification",
            key: "identification "
        },{
            title: "发动机号",
            dataIndex: "engine",
            key: "engine "
        },{
            title: "车辆图片",
            dataIndex: "car",
            key: "car",
            width:"12%",
            render:(text)=>{
                return(
                    <img src={text} style={{width:"160px",height:"90px",margin:"0 auto"}} alt="" onClick={()=>this.handleImgModal(text)} />
                )
            }
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
                            onClick={() => {
                                this.showModal(record);
                            }}
                        >
                            编辑
                        </Button>
                        <Button
                            size="small"
                            type="danger"
                            style={{ margin:"2px 5px"}}
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
            label: "注册日期",
            field: "times",
            width: 200
        },
        {
            type: "INPUT",
            label: "车牌号",
            field: "licenseNumber",
            width: 200
        }
    ];
    return = key => {
        Modal.confirm({
            title: "车辆布控撤销",
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
            title: "车辆删除",
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
    handleImgModal=(text)=>{
        this.setState({
            ImgModal:true,
            url:text
        })
    };
    handleImgCancel=()=>{
        this.setState({ImgModal:false})
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
            value.paymentTime1=moment(value.paymentTime);
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
                    title={this.state.isAdd ? "车辆新增" : "车辆编辑"}
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
                                <Form.Item label="车牌号">
                                    {getFieldDecorator("licenseNumber", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车牌号！"
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
                                <Form.Item label="车辆类型">
                                    {getFieldDecorator("carType", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车辆类型！"
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
                                <Form.Item label="所有人">
                                    {getFieldDecorator("person", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入所有人！"
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
                                <Form.Item label="地址">
                                    {getFieldDecorator("address", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入地址！"
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
                                <Form.Item label="使用性质">
                                    {getFieldDecorator("nature", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入使用性质！"
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
                                <Form.Item label="发放时间">
                                    {getFieldDecorator("paymentTime1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择发放时间！"
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
                                <Form.Item label="品牌型号">
                                    {getFieldDecorator("brandModel", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入品牌型号！"
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
                                <Form.Item label="车辆识别代号">
                                    {getFieldDecorator("identification", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车辆识别代号！"
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
                                <Form.Item label="发动机号">
                                    {getFieldDecorator("engine", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入发动机号！"
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
                    title="车辆导入"
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
                <Modal
                    destroyOnClose={true}
                    title="车辆图片"
                    visible={this.state.ImgModal}
                    onCancel={this.handleImgCancel}
                    footer={null}
                    width={700}
                >
                    <img src={this.state.url} alt="" style={{width:"100%"}} />
                </Modal>
            </div>
        );
    }
}
export default Form.create()(RealVehicles);
