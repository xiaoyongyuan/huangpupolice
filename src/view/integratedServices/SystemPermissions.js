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
    Icon,
    Tree
} from "antd";
import "../controlBoundary/public.less";
const { TreeNode } = Tree;
class SystemPermissions extends Component {
    
    state = {
        checkedKeys:[],
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
                nameRole: "0101",
                personnel: "TO-zhaoqing-02",
                lasttime: "2018-09-25 14:20",
            }, {
                key: 2,
                nameRole: "123",
                personnel: "TO-zhaoqing-02",
                lasttime: "2018-08-14 10:26",
            }, {
                key: 3,
                nameRole: "xiaoshou",
                personnel: "admin1",
                lasttime: "2019-06-10 16:47",
            }
        ],
        treeData: [
            {
                title: '预警指挥',
                key: '1',
            },
            {
                title: '布控和围界',
                key: '6',
                children: [
                    { title: '人脸布控', key: '11' },
                    { title: '车牌布控', key: '12' },
                    { title: '围界设定', key: '13' },
                ],
            }, {
                title: '四标四实',
                key: '2',
                children: [
                    { title: '园区管理', key: '14' },
                    { title: '楼栋管理', key: '15' },
                    { title: '实有房屋', key: '16' },
                    { title: '实有人数', key: '17' },
                    { title: '实有单位', key: '18' },
                    { title: '实有车辆', key: '19' },
                ],
            }, {
                title: '一键搜',
                key: '3',
            }, {
                title: '重点管理对象',
                key: '4',
                children: [
                    { title: '关注人员', key: '21' },
                    
                    { title: '重点人员', key: '23' },
                    { title: '关注车辆', key: '22' },
                    { title: '重点车辆', key: '24' },
                ],
            }, {
                title: '综合业务管理',
                key: '5',
                children: [
                    { title: '系统权限', key: '25' },
                    { title: '纠纷案件', key: '26' },
                    { title: '网格管理', key: '27' },
                ],
            },
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
            title: "角色名",
            dataIndex: "nameRole",
            key: "nameRole"
        },
        {
            title: "用户定制人员",
            dataIndex: "personnel",
            key: "personnel"
        },
        {
            title: "最新修改时间",
            dataIndex: "lasttime",
            key: "lasttime"
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
    handlePaginationChange = pagination => {
        this.setState({
            pagination
        });
    };
    // 编辑
    showModal = value => {
        console.log(value);
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
                // () => {
                //     // this.props.form.setFieldsValue(value);
                // }
            );
        }
    };
    handleModalCancel = () => {
        this.setState({
            isAdd: false,
            detail: {},
            showModal: false,
            checkedKeys:[]
        });
    };
    // 保存
    handleSave = () => {
        this.setState({
            isAdd: false,
            detail: {},
            showModal: false,
            checkedKeys:[]
        });


        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         if (this.state.isAdd) {
        //             let tableData = this.state.tableData;
        //             tableData.push(values);
        //             this.props.form.resetFields();
        //             this.setState({
        //                 tableData,
        //                 isAdd: false,
        //                 detail: {},
        //                 showModal: false
        //             });
        //         } else {
        //             let tableData = this.state.tableData;
        //             let newData = [];
        //             tableData.map(item => {
        //                 if (this.state.detail.key === item.key) {
        //                     newData.push({
        //                         key: item.key,
        //                         ...values
        //                     });
        //                 } else {
        //                     newData.push(item);
        //                 }
        //             });
        //             this.props.form.resetFields();
        //             this.setState({
        //                 tableData: newData,
        //                 isAdd: false,
        //                 detail: {},
        //                 showModal: false
        //             });
        //         }
        //     }
        // });

    };
    handleMany = keys => {
        console.log(keys);
    };

    // 树
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        this.setState({
            checkedKeys:checkedKeys
        })
        console.log('onCheck', checkedKeys, info);
    };
    // 全选
    allelection(){
        var treeData=this.state.treeData;
        var treelist=[];
        treeData.map(function(item,key){
            treelist.push(item.key)
            if(item.children){
                item.children.map(function(item2,key2){
                    treelist.push(item2.key)
                })
            }
        })
        this.setState({
            checkedKeys:treelist
        })
    }
    // 清除选中
    clearselect(){
        this.setState({
            checkedKeys:[]
        })
    }


    render() {
        return (
            <div style={{ padding: 20 }}>
                <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
                    <div className="leftbutton">
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
                    // className="viewWarningModal"
                    destroyOnClose={true}
                    title={this.state.isAdd ? "系统权限新增" : "系统权限编辑"}
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
                    <div className="titlecheck">
                        <div>角色名：</div>
                        <Input type="text" style={{ width: '50%', margin: "0 3px" }} value={this.state.detail.nameRole?this.state.detail.nameRole:""} />
                        <Button style={{ margin: "0 3px" }} onClick={() => {this.allelection()}}>全选</Button>
                        <Button style={{ margin: "0 3px" }} onClick={() => {this.clearselect()}}>清除选中</Button>
                    </div>
                    <div className="soldiv">
                        <Tree
                            checkable
                            onSelect={this.onSelect}
                            onCheck={this.onCheck}
                            checkedKeys={this.state.checkedKeys}
                            treeData={this.state.treeData}
                        />

                    </div>

                </Modal>
            </div>
        );
    }
}
export default SystemPermissions