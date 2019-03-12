import React from "react";
import { Row, Col, Icon } from "antd";
import MainImage from "../MainImage.png";

function Home() {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <Row>
        <Col span={24}>
          <h1 className="title">Phani Teja Komaravolu</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 className="sub-title">
            Full Stack Developer and Ardent Lover of ReactJs
          </h2>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3>
            <i>"To iterate is human. To recurse is divine"</i>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="content-footer">
          <a href="https://github.com/phaniteja1">
            <Icon type="github" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img className="section-image" alt="main" src={MainImage} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
