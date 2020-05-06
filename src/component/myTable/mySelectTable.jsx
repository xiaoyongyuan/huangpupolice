import React from "react";
import { Table } from "antd";
import "./myTable.less";

export default class SimpleTable extends React.Component {
    state = {
        selectedRowKeys: []
    };
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => { this.props.handleSelectKeys(selectedRowKeys, selectedRows) }
        }
        return (
            <div className="myTable" >
                <Table
                    bordered
                    rowSelection={rowSelection}
                    pagination={false}
                    columns={this.props.columns}
                    dataSource={this.props.data}
                />
            </div>
        );
    }
}
