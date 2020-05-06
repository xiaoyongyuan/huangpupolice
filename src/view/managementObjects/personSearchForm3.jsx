import React from 'react'
import { Drawer, Form, Select, Input, Tabs, Cascader, DatePicker, Radio, Button } from 'antd'
const { Option } = Select;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker
class PersonSearchForm1 extends React.Component {
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
    handleClose = () => {
        this.props.form.resetFields()
        this.props.handleClose()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            }
        };
        return (
            <Drawer
                className='personSearchFormWrap'
                title={null}
                placement='right'
                closable={true}
                maskClosable={false}
                onClose={this.handleClose}
                visible={this.props.visible}
            >
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="条件搜索" key="1">
                        <Form {...formItemLayout} onSubmit={this.props.handleSubmit}>
                            <Form.Item label="车辆类型">
                                {getFieldDecorator("type", {
                                })(
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="点击选择，可多选"
                                    >
                                        <Option key="违法未处理">违法未处理</Option>
                                        <Option key="逾期未报废">逾期未报废</Option>
                                        <Option key="刑事案件">刑事案件</Option>
                                        <Option key="强行闯卡">强行闯卡</Option>
                                        <Option key="违法未处理车辆">违法未处理车辆</Option>
                                        <Option key="法院检察院管控">法院检察院管控</Option>
                                        <Option key="逾期未投保">逾期未投保</Option>
                                        <Option key="危化品车未安装切断装置">危化品车未安装切断装置</Option>
                                        <Option key="逾期未检验">逾期未检验</Option>
                                        <Option key="营转非大客车保有量">营转非大客车保有量</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label="所有人">
                                {getFieldDecorator("name", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="车牌号">
                                {getFieldDecorator("idNum", {
                                })(<Input maxLength={20} type='number' />)}
                            </Form.Item>
                            <Form.Item label="地址">
                                {getFieldDecorator("addressDetail", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="品牌型号">
                                {getFieldDecorator("birthday", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="使用性质">
                                {getFieldDecorator("sex")(
                                    <Input maxLength={20} />
                                )}
                            </Form.Item>
                            <Form.Item label="注册日期">
                                {getFieldDecorator("pushCenter", {
                                })(<DatePicker
                                    format="YYYY-MM-DD HH:mm"
                                    style={{width:"100%"}}
                                />)}
                            </Form.Item>
                            <Form.Item label="发放时间">
                                {getFieldDecorator("pushApp", {
                                })(<DatePicker
                                    format="YYYY-MM-DD HH:mm"
                                    style={{width:"100%"}}
                                />)}
                            </Form.Item>
                            <Form.Item label="车辆识别代号">
                                {getFieldDecorator("address", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="发动机号">
                                {getFieldDecorator("creaton", {
                                })( <Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="标签">
                                {getFieldDecorator("tag", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 20, offset: 20 }}>
                                <Button type="primary" htmlType="submit">
                                    搜索
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="以图搜图" key="2">
                        以图搜图
                    </TabPane>
                </Tabs>

            </Drawer>
        )
    }
}
export default Form.create()(PersonSearchForm1);