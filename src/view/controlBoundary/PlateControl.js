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
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import Image from "../../assets/image/timg.jpg";
import Image1 from "../../assets/image/1.jpg";
import Image2 from "../../assets/image/2.jpg";
import Image3 from "../../assets/image/3.jpg";
import Image11 from "../../assets/image/11.jpg";
import Image22 from "../../assets/image/22.jpg";
import Image33 from "../../assets/image/33.jpg";
import "./public.less";
const { Option } = Select;
class People extends Component {
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
        type: "上访人员车辆",
        carNum: "粤AEJ5320",
        status: "未下发",
        photo: Image1,
        detailPhoto: Image11,
      },
      {
        key: 2,
        type: "在逃人员车辆",
        carNum: "粤AM26A1",
        status: "未下发",
        photo: Image2,
        detailPhoto: Image22,
      },
      {
        key: 3,
        type: "挂失车辆",
        carNum: "粤A327QF",
        status: "已下发",
        photo: Image3,
        detailPhoto: Image33,
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
      dataIndex: "carNum",
      key: "carNum"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "照片",
      dataIndex: "photo",
      key: "photo",
      width:150,
      render: (text, record) => {
        return (
          <div>
            <img
              src={record.photo}
              style={{
                width: 130,
                height: 80,
                margin: "0px auto",
                cursor: "pointer"
              }}
              onClick={() => {
                this.showPhotoModal(record);
              }}
            />
          </div>
        );
      }
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            {record.status == "已下发" ? (
              <Button
                size="small"
                type="danger"
                style={{ marginRight: 10 }}
                onClick={() => {
                  this.return(record);
                }}
              >
                撤销
              </Button>
            ) : (
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
              )}
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
      label: "录入时间",
      field: "times",
      width: 200
    },
    {
      type: "SELECT",
      label: "类型",
      field: "type",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "上访人员车辆", name: "上访人员车辆" },
        { id: "在逃人员车辆", name: "在逃人员车辆" },
        { id: "挂失车辆", name: "挂失车辆" }
      ]
    }
  ];
  return = key => {
    Modal.confirm({
      title: "车牌布控撤销",
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
      title: "车牌布控删除",
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
  showPhotoModal = record => {
    this.setState({
      detail: record,
      showPhotoModal: true
    });
  };
  handlePhotoModelCancel = () => {
    this.setState({
      detail: {},
      showPhotoModal: false
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
            ableSelect={true}
            handleMany={this.handleMany}
          />
        </div>
        <MyPagination
          pagination={this.state.pagination}
          onChange={this.handlePaginationChange}
          showSizeChange={true}
        />
        <Modal
          destroyOnClose={true}
          title={this.state.isAdd ? "车牌布控新增" : "车牌布控编辑"}
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
            <Form.Item label="车牌号">
              {getFieldDecorator("carNum", {
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

            <Form.Item label="类型">
              {getFieldDecorator("type", {
                rules: [
                  {
                    required: true,
                    message: "请选择类型！"
                  }
                ]
              })(
                <Select placeholder="请选择类型">
                  <Option value="上访人员车辆">上访人员车辆</Option>
                  <Option value="在逃人员车辆">在逃人员车辆</Option>
                  <Option value="挂失车辆">挂失车辆</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          className='viewWarningModal'
          title={`${this.state.detail.carNum}`}
          visible={this.state.showPhotoModal}
          onCancel={this.handlePhotoModelCancel}
          footer={null}
        >
          <img src={this.state.detail.detailPhoto} style={{ width: "700px", height: "480px", margin: '0px auto' }}></img>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(People);
