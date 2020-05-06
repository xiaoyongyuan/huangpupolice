import React from "react";
import { Table, Button } from "antd";
import "./myTable.less";

export default class SimpleTable extends React.Component {
  state = {
    selectedRowKeys: []
  };
  render() {
    const rowSelection = this.props.ableSelect
      ? {
          onChange: (selectedRowKeys, selectedRows) => {
            this.setState({
              selectedRowKeys
            });
          }
        }
      : null;
    return (
      <div className="myTable">
        {this.props.ableSelect ? (
          <div>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                this.props.handleMany(this.state.selectedRowKeys);
              }}
            >
              批量下发
            </Button>
          </div>
        ) : null}
        <Table
          bordered
          rowSelection={rowSelection}
          pagination={false}
          columns={this.props.columns}
          dataSource={this.props.data}
          rowClassName={(record, index) => {
            if (index % 2 !== 0) {
              return "rowclass";
            }
          }}
        />
      </div>
    );
  }
}
