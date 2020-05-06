import React, { Component } from "react";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { Menu, Icon, Button } from "antd";
import "./nav.less";
import MenuList from "../../config/menuConfig";
import BoundaryDeatil from "../../view/controlBoundary/boundaryDetail";
import BoundarySetting from "../../view/controlBoundary/boundarySetting";
import BoundarySetarea from "../../view/controlBoundary/boundarySetarea";
import BuildingDetail from "../../view/fourMark/buildingDetail"
import BuildingUnitDetail from "../../view/fourMark/unitDetail"
const { SubMenu } = Menu;
export default class MyIndex extends Component {
  state = {
    openKeys: [],
    rootSubmenuKeys: [],
    collapsed: false
  };
  componentDidMount = () => {
    let urls = window.location.hash.split("#");
    let openKeys = [];
    let selectedKeys = [];
    if (urls.length > 1 && urls[1] !== "/main") {
      MenuList.map(item => {
        if (item.children) {
          item.children.map(i => {
            if (i.key === urls[1]) {
              openKeys.push(item.title);
              selectedKeys.push(i.key);
            }
          });
        } else {
          openKeys.push(item.title);
          //selectedKeys.push(item.key);
        }
      });
    }
    let rootSubmenuKeys = [];
    MenuList.map(item => {
      rootSubmenuKeys.push(item.title);
    });
    this.setState({
      rootSubmenuKeys,
      openKeys,
      selectedKeys
    });
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  onSelect = e => {
    this.setState({
      selectedKeys: e.selectedKeys
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="routerWrap">
        <div className="navWrap">
          <div className="navLeft">
            <div
              className="navLeftImage"
              onClick={() => {
                this.props.history.push("/overview");
              }}
            ></div>
            <div
              type="primary"
              onClick={this.toggleCollapsed}
              className="collapsed"
            >
              <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
            </div>
          </div>

          <div className="navCenter">黄埔区AI智感防控</div>
          <div
            className="navRight"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            退出系统
          </div>
        </div>
        <div className="content">
          <div className="leftMenu">
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              selectedKeys={this.state.selectedKeys}
              onSelect={this.onSelect}
              inlineCollapsed={this.state.collapsed}
            >
              {MenuList.map(item => {
                if (item.children) {
                  return (
                    <SubMenu
                      key={item.title}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          <span>{item.title}</span>
                        </span>
                      }
                    >
                      {item.children.map(i => {
                        return (
                          <Menu.Item key={i.key}>
                            <div
                              onClick={() => {
                                this.props.history.push(i.key);
                              }}
                            >
                              {i.title}
                            </div>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item
                      key={item.key}
                      onClick={() => {
                        this.props.history.push(item.key);
                      }}
                    >
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </div>
          <div className="contentWrap">
            <Router>
              <Switch>
                {MenuList.map(item => {
                  if (item.children) {
                    return item.children.map(i => {
                      return (
                        <Route
                          path={i.key}
                          component={i.component}
                          exact
                          key={i.key}
                        />
                      );
                    });
                  } else {
                    return (
                      <Route
                        path={item.key}
                        component={item.component}
                        exact
                        key={item.key}
                      />
                    );
                  }
                })}
                <Route
                  path="/main/building/detail/:id"
                  component={BuildingDetail}
                  exact
                />
                <Route
                  path="/main/building/unit/detail/:data"
                  component={BuildingUnitDetail}
                  exact
                />
                <Route
                  path="/main/boundaryControl/setarea"
                  component={BoundarySetarea}
                  exact
                />
                <Route
                  path="/main/boundaryControl/detail"
                  component={BoundaryDeatil}
                  exact
                />
                <Route
                  path="/main/boundaryControl/setting"
                  component={BoundarySetting}
                  exact
                />
                <Redirect to={MenuList[0].key}></Redirect>
              </Switch>
            </Router>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
