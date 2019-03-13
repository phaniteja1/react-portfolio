import React from "react";
import { Row, Col, Icon, Popover } from "antd";
import MainImage from "../MainImage.jpg";

function Home() {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <Row>
        <Col span={11}>
          <img className="section-image" alt="main" src={MainImage} />
        </Col>
        <Col span={1} />
        <Col span={12}>
          <Row>
            <Col span={24}>
              <h1 className="title">Phani Teja Komaravolu</h1>
            </Col>
            <Col span={24}>
              <h2 className="sub-title">
                Full Stack Developer & Ardent Lover of ReactJs
              </h2>
            </Col>
            <Row>
              <Col span={6} />
              <Col span={4} className="content-footer">
                <Popover
                  placement="bottom"
                  content="Github Profile"
                  trigger="hover"
                >
                  <a href="https://github.com/phaniteja1">
                    <Icon type="github" />
                  </a>
                </Popover>
              </Col>
              <Col span={4} className="content-footer">
                <Popover
                  placement="bottom"
                  content="Linkedin Profile"
                  trigger="hover"
                >
                  <a href="https://www.linkedin.com/in/phanitejaone">
                    <Icon type="linkedin" />
                  </a>
                </Popover>
              </Col>
              <Col span={4} className="content-footer">
                <Popover
                  placement="bottom"
                  content="Send Email"
                  trigger="hover"
                >
                  <a
                    href="mailto:someone@example.com?Subject=Hello%World!"
                    target="_top"
                  >
                    <Icon type="mail" />
                  </a>
                </Popover>
              </Col>
              <Col span={6} />
            </Row>
          </Row>
        </Col>
      </Row>
      {/* <Row>
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
          <img className="section-image" alt="main" src={AnotherImage} />
        </Col>
      </Row> */}
    </div>
  );
}

export default Home;
