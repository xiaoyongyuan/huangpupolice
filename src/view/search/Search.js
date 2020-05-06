import React, { Component } from "react";
import "./public.less";
import SearchImge from "../../assets/image/search.png";
import { Input, Icon, Button, Row, Col, List } from "antd";
import TimesImg from "../../assets/image/times.png";
import FaceImg from "../../assets/image/face.png";
import Face2Img from "../../assets/image/face2.png";
import MacImg from "../../assets/image/mac.png";
import SsidImg from "../../assets/image/ssid.png";
import CarImg from "../../assets/image/car.png";
export default class Search extends Component {
  render() {
    return (
      <div className="searchWrap">
        <div className="title">
          <img src={SearchImge}></img>
          <div style={{ marginTop: 15, marginLeft: 15 }}>一 键 搜</div>
        </div>
        <div className="inputWrap">
          <div class="left"></div>
          <div className="input">
            <Input
              addonAfter={<div>搜 索</div>}
              suffix={
                <Icon type="camera" style={{ color: "rgba(0,0,0,.45)" }} />
              }
            />
            <div className="text">
              <div>毕琅迢</div>
              <div>孙海丽</div>
              <div>粤AM26A1</div>
              <div>310101198810100643</div>
              <div className="more">
                更多
                <Icon type="double-right" />
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div className="btns">
          <Row>
            <Col span={8}>
              <div className="item">
                <img className="image" src={TimesImg}></img>
                <p>时空搜</p>
              </div>
            </Col>
            <Col span={8}>
              <div className="item">
                <img className="image" src={FaceImg}></img>
                <p>人脸搜</p>
              </div>
            </Col>
            <Col span={8}>
              <div className="item">
                <img className="image" src={Face2Img}></img>
                <p>人脸轨迹</p>
              </div>
            </Col>
            <Col span={8}>
              <div className="item">
                <img className="image" src={MacImg}></img>
                <p>MAC轨迹</p>
              </div>
            </Col>
            {/* <Col span={8}>
              <div className="item">
                <img className="image" src={SsidImg}></img>
                <p>SSID轨迹</p>
              </div>
            </Col> */}
            <Col span={8}>
              <div className="item">
                <img className="image" src={CarImg}></img>
                <p>车辆轨迹</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="discribe">
          <div style={{width:'65%',margin:'0px auto'}}>
            <p>说明：</p>
            <p>
              支持模糊搜索与精确搜索，精确搜索需要于词首尾加半角双引号，例"张三"
            </p>
            <p>
              在全部搜索中可指定特殊条件搜索，例"姓名:毕琅迢
              性别:男",可搜索出姓名为毕琅迢，性别为男的信息
            </p>
            <p>可指定的搜索条件包括：姓名、性别、地址、手机号码</p>
            <p>多条件搜索时空格表示与，OR表示或</p>
          </div>
        </div>
      </div>
    );
  }
}
