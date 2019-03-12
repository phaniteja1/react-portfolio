import React from "react";
import { Icon, Avatar, Row, Col, Card, Tag, Divider } from "antd";
import { withRouter } from "react-router-dom";

function Profile() {
  return (
    <Col className="gutter-row" span={6}>
      <Card className="post" style={{ width: "auto", color: "black" }}>
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <Avatar size={80} icon="user" />
            <p className="profile-title">Person name</p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Tag color="#108ee9">#javascript</Tag>
          <Tag color="#108ee9">#reactjs</Tag>
        </Row>
        <Divider dashed />
        <Row style={{ textAlign: "center", marginTop: "1rem" }}>
          <p>Hello World!</p>
        </Row>
        <Row>
          <Col span={12}>
            <p className="post-actions">
              <Icon type="heart" />
              <Icon type="message" />
              <Icon type="book" />
            </p>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <p className="post-tags">#javascript</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default withRouter(Profile);
