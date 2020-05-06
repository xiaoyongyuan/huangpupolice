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
import Image1 from "../../assets/image/张渊凯.jpg";
import Image2 from "../../assets/image/谢曼玉.jpg";
import Image3 from "../../assets/image/黄昌华.jpg";
import Image4 from "../../assets/image/姚远.jpg";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import './public.less'
import PersonSearchForm2 from './personSearchForm2'
import moment from 'moment'
const { Option } = Select;
class AttentionPersonnel extends Component {

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
                name: '毕琅迢',
                status: '布控中',
                level: 1,
                type: '涉恐人员',
                idNum: '310101198810100643',
                sex: '男',
                birthday: '1983-10-02',
                height: '185',
                pushCenter: true,
                pushApp: false,
                address: '广东省广州市黄埔区',
                addressDetail:"广州市荔湾区沙面南街5号(沙面网球场旁)",
                creaton: '2019-08-05 11:20:30',
                tags: [ '信访人员', '刑释人员']
            },
            {
                key: 2,
                photo: Image3,
                name: '孙浩粟',
                status: '布控中',
                level: 2,
                type: '涉恐人员',
                idNum: '310101198810100643',
                sex: '男',
                birthday: '1956-03-14',
                height: '174',
                pushCenter: true,
                pushApp: false,
                address: '广东省广州市黄埔区',
                addressDetail:"广州市黄埔区开创大道北香雪二路保利香雪山会所1-2层",
                creaton: '2019-05-15 10:20:14',
                tags: ['艾滋病', '上访人员']
            },
            {
                key: 3,
                photo: Image4,
                name: '石凯峰',
                status: '布控中',
                level: 3,
                type: '涉恐人员',
                idNum: '310101198810100643',
                sex: '男',
                birthday: '1968-05-09',
                height: '185',
                pushCenter: true,
                pushApp: false,
                address: '广东省广州市黄埔区',
                addressDetail:"广州市黄埔区194乡道南400米",
                creaton: '2019-03-14 14:16:14',
                tags: ['刑释人员', '信访人员', '艾滋病']
            },
            {
                key: 4,
                photo: Image2,
                name: '王子静',
                status: '布控中',
                level: 4,
                type: '涉恐人员',
                idNum: '310101198810100643',
                sex: '女',
                birthday: '1998-10-10',
                height: '164',
                pushCenter: true,
                pushApp: false,
                address: '广东省广州市黄埔区',
                addressDetail:"广州市黄埔区萝塱路31号2栋(近力特美健身俱乐部)",
                creaton: '2020-01-13 08:13:10',
                tags: ['精神病', '刑释人员', '信访人员']
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
                    <div>姓名：{record.name}</div>
                    <div className="detail">详细地址:{record.addressDetail}</div>
                {/*    <div className='status'>{record.status}</div>
                    {this.renderLevel(record.level)}
                    <div style={{ marginLeft: 30, display: 'flex' }}>人员类型：<div className='type'>{record.type}</div></div>*/}
                </div>
                <div className='infoDetail'>
                    <div style={{ marginRight: 30 }}>身份证号：{record.idNum}</div>
                    <div style={{ marginRight: 30 }}>性别：{record.sex}</div>
                    <div style={{ marginRight: 30 }}>出生日期：{record.birthday}</div>
                    <div style={{ marginRight: 30 }}>身高：{record.height}cm</div>
                    {/*<div style={{ marginRight: 30 }}>是否推送到预警中心：{record.pushCenter ? '是' : '否'}</div>
                    <div style={{ marginRight: 30 }}>是否推送到APP：{record.pushApp ? '是' : '否'}</div>*/}
                </div>
                <div className='infoDetail'>
                    <div style={{ marginRight: 30 }}>户籍地：{record.address}</div>
                    <div style={{ marginRight: 30 }}>创建时间：{record.creaton}</div>
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
                title: "关注人员删除",
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
                data.tag = data.tags.join(',')
                data.birthday1 = data.birthday ? moment(data.birthday) : undefined;
                data.address1 = data.address ? [data.address.substring(0, 3), data.address.substring(3, 6), data.address.substring(6, data.address.length)] : []
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
                    title={this.state.isAdd ? "关注人员新增" : "关注人员编辑"}
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
                                <Form.Item label="姓名">
                                    {getFieldDecorator("name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入人员姓名！"
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
                                <Form.Item label="详细地址">
                                    {getFieldDecorator("addressDetail", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入详细地址！"
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
                                <Form.Item label="性别">
                                    {getFieldDecorator("sex", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择性别！"
                                            }
                                        ]
                                    })(
                                        <Select placeholder="请选择性别">
                                            <Option value="男">男</Option>
                                            <Option value="女">女</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="出生日期">
                                    {getFieldDecorator("birthday1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择出生日期！"
                                            }
                                        ]
                                    })(<DatePicker locale={zh_CN} style={{ width: "100%" }} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="户籍地">
                                    {getFieldDecorator("address1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择户籍地"
                                            },
                                        ]
                                    })(<Cascader options={this.cityOptions} placeholder="点击选择户籍地" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="身份证号">
                                    {getFieldDecorator("idNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入身份证号！"
                                            },
                                            {
                                                pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                                message: `请输入正确的身份证号!`
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="照片">
                                    {getFieldDecorator("photo", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请上传照片！"
                                            }
                                        ]
                                    })(
                                        <Upload name="file" action="/upload.do">
                                            <Button>
                                                <Icon type="upload" /> 点击选择文件
                                            </Button>
                                        </Upload>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="标签">
                                    {getFieldDecorator("tag", {
                                        rules: [
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_,]+$/,
                                                message: `请不要输入特殊字符!`
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
                <PersonSearchForm2 visible={this.state.showDrawer} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default Form.create()(AttentionPersonnel);