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
                            <Form.Item label="人员类型">
                                {getFieldDecorator("type", {
                                })(
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="点击选择，可多选"
                                    >
                                        <Option key="残疾人">残疾人</Option>
                                        <Option key="灾区">灾区</Option>
                                        <Option key="弱势群体">弱势群体</Option>
                                        <Option key="贫困失学儿童">贫困失学儿童</Option>
                                        <Option key="孤儿">孤儿</Option>
                                        <Option key="其他">其他</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label="姓名">
                                {getFieldDecorator("name", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="身份证">
                                {getFieldDecorator("idNum", {
                                })(<Input maxLength={20} type='number' />)}
                            </Form.Item>
                            <Form.Item label="户籍地">
                                {getFieldDecorator("address", {
                                })(<Cascader options={this.cityOptions} placeholder="点击选择户籍地" />)}
                            </Form.Item>
                            <Form.Item label="详细地址">
                                {getFieldDecorator("addressDetail", {
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                            <Form.Item label="出生日期">
                                {getFieldDecorator("birthday", {
                                })(<RangePicker />)}
                            </Form.Item>
                            <Form.Item label="性别">
                                {getFieldDecorator("sex", {
                                    initialValue: 'all'
                                })(
                                    <Radio.Group>
                                        <Radio value='all'>全部</Radio>
                                        <Radio value='男'>男</Radio>
                                        <Radio value='女'>女</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                            {/*<Form.Item label="是否布控">
                                {getFieldDecorator("status", {
                                    initialValue: 'all'
                                })(
                                    <Radio.Group>
                                        <Radio value='all'>全部</Radio>
                                        <Radio value='是'>是</Radio>
                                        <Radio value='否'>否</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                            <Form.Item label="是否布控">
                                {getFieldDecorator("level", {
                                    initialValue: 'all'
                                })(
                                    <Radio.Group>
                                        <Radio value='all'>全部预警</Radio>
                                        <Radio value='一级预警'>一级预警</Radio>
                                        <Radio value='二级预警'>二级预警</Radio>
                                        <Radio value='三级预警'>三级预警</Radio>
                                        <Radio value='四级预警'>四级预警</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                            <Form.Item label="是否推送预警中心">
                                {getFieldDecorator("pushCenter", {
                                    initialValue: 'all'
                                })(
                                    <Radio.Group>
                                        <Radio value='all'>全部</Radio>
                                        <Radio value='是'>是</Radio>
                                        <Radio value='否'>否</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                            <Form.Item label="是否推送APP">
                                {getFieldDecorator("pushApp", {
                                    initialValue: 'pushApp'
                                })(
                                    <Radio.Group>
                                        <Radio value='all'>全部</Radio>
                                        <Radio value='是'>是</Radio>
                                        <Radio value='否'>否</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>*/}
                            <Form.Item label="创建时间">
                                {getFieldDecorator("creaton", {
                                })(<RangePicker />)}
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