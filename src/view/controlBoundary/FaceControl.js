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
import Image1 from "../../assets/image/张渊凯.jpg";
import Image2 from "../../assets/image/谢曼玉.jpg";
import Image3 from "../../assets/image/黄昌华.jpg";
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
        name: "毕琅迢",
        sex: "男",
        type: "上访人员",
        idNum: "310101198810100643",
        status: "未下发",
        address: "广东省广州市黄埔区",
        age: 20,
        photo: Image1
      },
      {
        key: 2,
        name: "孙海丽",
        sex: "女",
        type: "上访人员",
        idNum: "310101198810100643",
        status: "未下发",
        address: "广东省广州市黄埔区",
        age: 30,
        photo: Image2
      },
      {
        key: 3,
        name: "梁枢",
        sex: "男",
        type: "在逃人员",
        idNum: "310101198810100643",
        status: "已下发",
        address: "广东省广州市黄埔区",
        age: 40,
        photo: Image3
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
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "身份证号",
      dataIndex: "idNum",
      key: "idNum"
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "人脸",
      dataIndex: "photo",
      key: "photo",
      render: (text, record) => {
        return (
          <div>
            <img
              src={record.photo}
              style={{
                width: 60,
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
            {/* <Button
              size="small"
              onClick={() => {
                this.showPhotoModal(record);
              }}
            >
              查看照片
            </Button> */}
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
        { id: "上访人员", name: "上访人员" },
        { id: "在逃人员", name: "在逃人员" }
      ]
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
      title: "人员布控删除",
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
          className="viewWarningModal"
          destroyOnClose={true}
          title={this.state.isAdd ? "人脸布控新增" : "人脸布控编辑"}
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
                      <Option value="上访人员">上访人员</Option>
                      <Option value="在逃人员">在逃人员</Option>
                    </Select>
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
                  {getFieldDecorator("date", {
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
                  })(<Input maxLength={20} />)}
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
                <Form.Item label="人脸">
                  {getFieldDecorator("photo", {
                    rules: [
                      {
                        required: true,
                        message: "请上传人脸！"
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
            </Row>
          </Form>
        </Modal>
        <Modal
          title={`${this.state.detail.name}`}
          visible={this.state.showPhotoModal}
          onCancel={this.handlePhotoModelCancel}
          footer={null}
        >
          <img src={this.state.detail.photo} style={{ width: "380px", height: "480px",margin:'0px auto' }}></img>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(People);
