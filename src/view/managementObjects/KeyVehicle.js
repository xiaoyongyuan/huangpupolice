import React, { Component } from 'react'
import MySelectTable from "../../component/myTable/mySelectTable";
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
    Icon,
    Tag,
    Cascader, message
} from "antd";
import Image from "../../assets/image/timg.jpg";
import Image1 from "../../assets/image/keyVehicle1.jpg";
import Image2 from "../../assets/image/keyVehicle2.jpg";
import Image3 from "../../assets/image/keyVehicle3.jpg";
import Image4 from "../../assets/image/keyVehicle4.jpg";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import './public.less'
import PersonSearchForm3 from './personSearchForm3'
import moment from 'moment'
const { Option } = Select;
class KeyVehicle extends Component {

    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        showDrawer: false,
        selectedRowKeys: [],
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                photo: Image1,
                name: '路长全',
                idNum: '粤K·FK725',
                sex: '家庭自用汽车',
                birthday: 'Alfa Romeo',
                height: '雷诺-日产联盟',
                pushCenter: "2018-10-12 10:23",
                pushApp: "2018-10-12 10:23",
                address: '8934JIUG83H894HJS',
                addressDetail:"广州市黄埔区香雪公园迳子村口",
                creaton: '14N4S2',
                tags: [ '逾期未报废', '刑事案件']
            },
            {
                key: 2,
                photo: Image3,
                name: '王方剑',
                idNum: '粤K·DB633',
                sex: '非营业',
                birthday: 'BMW, Mini',
                height: '雷诺-日产联盟',
                pushCenter: "2018-03-12 09:12",
                pushApp: "2018-03-12 09:12",
                address: '79034S94583H894HJS',
                addressDetail:"广州市黄埔区开泰大道601号大壮广场3楼301号(万达广场斜对面)",
                creaton: 'TU3AF',
                tags: [ '重大治安案件','强行闯卡']
            },
            {
                key: 3,
                photo: Image2,
                name: '袁 岳',
                idNum: '粤K·ZG817',
                sex: '非营业货车',
                birthday: 'Aston Martin',
                height: '雷诺-日产联盟',
                pushCenter:"2017-03-12 09:12",
                pushApp: "2017-07-12 09:12",
                address: 'DHEUSISJD23894HJS',
                addressDetail:"广州市黄埔区萝岗街黄麻社区居民委员会附近",
                creaton: 'TU5JP4',
                tags: ['法院检察院管控', '被盗抢机动车辆','重大治安案件']
            },
            {
                key: 4,
                photo: Image4,
                name: '潘英丽',
                idNum: '粤K·NQ866',
                sex: '营业客车',
                birthday: 'Citro&eugeot',
                height: '雷诺-日产联盟',
                pushCenter: "2019-03-22 19:15",
                pushApp: "2019-03-22 19:15",
                address: 'DHEUS94583H894HJS',
                addressDetail:"广州市黄埔区开创大道萝岗奥园广场126-132号铺",
                creaton: 'TU3AF',
                tags: [ '涉毒车辆','重大肇事逃逸车辆']
            }
        ]
    };
    columns = [
        {
            title: "序号",
            dataIndex: "index",
            key: "index",
            width: 50,
            render: (text, record, index) => <span>{index + 1}</span>
        },
        {
            title: "信息",
            dataIndex: "info",
            key: "info",
            render: (text, record) => this.renderRecord(record)
        },
    ];
    cityOptions = [
        {
            value: '广东省',
            label: '广东省',
            children: [
                {
                    value: '广州市',
                    label: '广州市',
                    children: [
                        {
                            value: '黄埔区',
                            label: '黄埔区',
                        },
                        {
                            value: '越秀区',
                            label: '越秀区',
                        },
                        {
                            value: '荔湾区',
                            label: '荔湾区',
                        },
                        {
                            value: '海珠区',
                            label: '海珠区',
                        },
                        {
                            value: '天河区',
                            label: '天河区',
                        },
                        {
                            value: '白云区',
                            label: '白云区',
                        },
                    ],
                },
                {
                    value: '深圳市',
                    label: '深圳市',
                    children: [
                        {
                            value: '福田区',
                            label: '福田区',
                        },
                        {
                            value: '罗湖区',
                            label: '罗湖区',
                        },
                        {
                            value: '南山区',
                            label: '南山区',
                        },
                        {
                            value: '宝安区',
                            label: '宝安区',
                        },
                        {
                            value: '龙岗区',
                            label: '龙岗区',
                        },
                        {
                            value: '盐田区',
                            label: '盐田区',
                        },
                    ],
                },
            ],
        },
        {
            value: '陕西省',
            label: '陕西省',
            children: [
                {
                    value: '西安市',
                    label: '西安市',
                    children: [
                        {
                            value: '莲湖区',
                            label: '莲湖区',
                        },
                        {
                            value: '新城区',
                            label: '新城区',
                        },
                        {
                            value: '碑林区',
                            label: '碑林区',
                        },
                        {
                            value: '灞桥区',
                            label: '灞桥区',
                        },
                    ],
                },
            ],
        },
    ];
    renderRecord = (record) => {
        return (<div className='infoWrap'>
            <div style={{ width: 80 }}>
                <img src={record.photo} style={{ width: 80, height: 100, marginBottom: 5 }}></img>
                <div><Button type='primary' size='small'>查看详情</Button></div>
            </div>
            <div style={{ width: '90%' }}>
                <div className='infoDetail'>
                    <div>所有人：{record.name}</div>
                    <div className="detail">地址:{record.addressDetail}</div>
                    <div className="keyOver">车牌号：{record.idNum}</div>
                </div>
                <div className='infoDetail'>
                    <div>使用性质：{record.sex}</div>
                    <div className="keyOver">品牌型号：{record.birthday}</div>
                    <div className="keyOver">车辆类型：{record.height}</div>
                    <div className="keyOver">发动机号：{record.creaton}</div>
                </div>
                <div className='infoDetail'>
                    <div >注册日期：{record.pushCenter}</div>
                    <div className="keyOver">发放时间：{record.pushApp}</div>
                    <div className="keyOver">车辆识别代号：{record.address}</div>
                </div>
                <div className='infoDetail' style={{ justifyContent: 'space-between' }}>
                    <div >标签：{record.tags.map((item, index) => {
                        return <Tag color="#6495ED" key={index}>{item}</Tag>
                    })}</div>
                    <div >
                        <Button type='primary' size='small' style={{ marginRight: 8 }}>轨迹分析</Button>
                        <Button type='primary' size='small' style={{ marginRight: 8 }}>图码分析</Button>
                        <Button type='primary' size='small' style={{ marginRight: 8 }}>伴随分析</Button>
                        {/*<Button type='primary' size='small' style={{ marginRight: 8 }}>告警分析</Button>*/}
                    </div>
                </div>
            </div>

        </div>)
    }
    renderLevel = level => {
        if (level == 1) {
            return <div className='level-1'>一级</div>
        } else if (level == 2) {
            return <div className='level-2'>二级</div>
        } else if (level == 3) {
            return <div className='level-3'>三级</div>
        } else if (level == 4) {
            return <div className='level-4'>四级</div>
        }
    }
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
    delete = () => {
        if (this.state.selectedRowKeys.length != 0) {
            Modal.confirm({
                title: "车辆删除",
                content: `您选择了${this.state.selectedRowKeys.length}条记录，是否确认要删除这些记录，删除后不可恢复？`,
                okText: "确定",
                cancelText: "取消",
                onOk: () => {
                    let tableData = this.state.tableData;
                    let newData = [];
                    tableData.map(item => {
                        if (this.state.selectedRowKeys.indexOf(item.key) > -1) {

                        } else {
                            newData.push(item);
                        }
                    });
                    this.setState({
                        tableData: newData,
                        selectedRowKeys: []
                    });
                }
            });
        } else {
            message.error('请先选择记录再删除')
        }

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
            if (this.state.selectedRowKeys.length !== 1) {
                message.error('请选择一条数据再编辑')
            } else {
                let tableData = this.state.tableData;
                let data = {}
                tableData.map(item => {
                    if (item.key === this.state.selectedRowKeys[0]) {
                        data = item;
                    }
                })
                data.pushCenter1=moment(value.pushCenter);
                data.pushApp1=moment(value.pushApp);
                this.setState(
                    {
                        isAdd: false,
                        detail: data,
                        showModal: true
                    },
                    () => {
                        this.props.form.setFieldsValue(data);
                    }
                );
            }

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
                    values.birthday = values.birthday1.format('YYYY-MM-DD')
                    values.tags = values.tag.split(',')
                    values.address = values.address1.join('')
                    values.key = `add${this.state.tableData.length + 1}`
                    values.status = '布控中'
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
                    values.birthday = values.birthday1.format('YYYY-MM-DD')
                    values.tags = values.tag.split(',')
                    values.address = values.address1.join('')
                    values.status = '布控中'
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
    handleSelectKeys = (selectedRowKeys, selectedRows) => {
        this.setState({
            selectedRowKeys
        })
    }
    handleClose = () => {
        this.setState({
            showDrawer: false,
        })
    }
    showDrawer = () => {
        this.setState({
            showDrawer: true,
        })
    }
    handleSubmit = (values) => {
        console.log(values)
        this.setState({
            showDrawer: false
        })
    }
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
            <div className='managementWrap'>
                <div className="searchFormWrap" style={{ marginBottom: "10px", padding: '10px 20px' }}>
                    <Button.Group >
                        <Button type="primary" onClick={() => { this.showModal('add') }}>
                            <Icon type="plus-circle" />
                            新增
                        </Button>
                        <Button type="primary" onClick={() => { this.showModal('edit') }}>
                            <Icon type="info-circle" />
                            编辑
                        </Button>
                        <Button type="primary" onClick={() => { this.delete() }}>
                            <Icon type="close-circle" />
                            删除
                        </Button>
                        <Button type="primary">
                            <Icon type="upload" />
                            批量导入
                        </Button>
                        <Button type="primary">
                            <Icon type="download" />
                            导出
                        </Button>
                        <Button type="primary">
                            <Icon type="download" />
                            模板下载
                        </Button>
                    </Button.Group>
                    <div>
                        <Button type='primary' style={{ marginRight: '10px' }}>
                            <Icon type="line-chart" />
                        </Button>
                        <Button type='primary' onClick={this.showDrawer}>
                            <Icon type="search" />
                        </Button>
                    </div>
                </div>
                <div style={{ minHeight: "520px", marginBottom: 10 }}>
                    <MySelectTable
                        columns={this.columns}
                        data={this.state.tableData}
                        ableSelect={true}
                        handleSelectKeys={this.handleSelectKeys}
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
                                <Form.Item label="所有人">
                                    {getFieldDecorator("name", {
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
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="地址">
                                    {getFieldDecorator("addressDetail", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入地址！"
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
                                <Form.Item label="车牌号">
                                    {getFieldDecorator("idNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择车牌号！"
                                            }
                                        ]
                                    })(
                                        <Input maxLength={20} />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="品牌型号">
                                    {getFieldDecorator("birthday", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入品牌型号！"
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="车辆类型">
                                    {getFieldDecorator("height", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车辆类型！"
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="使用性质">
                                    {getFieldDecorator("sex", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入使用性质！"
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="注册日期">
                                    {getFieldDecorator("pushCenter1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择注册日期！"
                                            }
                                        ]
                                    })( <DatePicker
                                        format="YYYY-MM-DD HH:mm"
                                        style={{width:"100%"}}
                                    />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="发放时间">
                                    {getFieldDecorator("pushApp1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择发放时间！"
                                            }
                                        ]
                                    })( <DatePicker
                                        format="YYYY-MM-DD HH:mm"
                                        style={{width:"100%"}}
                                    />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="车辆识别代号">
                                    {getFieldDecorator("address", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车辆类型！"
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="发动机号">
                                    {getFieldDecorator("creaton", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入发动机号！"
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
                <Modal
                    className="viewWarningModal"
                    title={`${this.state.detail.name}`}
                    visible={this.state.showPhotoModal}
                    onCancel={this.handlePhotoModelCancel}
                    footer={null}
                >
                    <img src={Image} style={{ width: "760px", height: "400px" }}></img>
                </Modal>
                <PersonSearchForm3 visible={this.state.showDrawer} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default Form.create()(KeyVehicle);