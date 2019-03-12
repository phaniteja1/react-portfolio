import React from "react";
import { Icon, Avatar, Row, Col, Card, Tag, Menu, Divider } from "antd";

function Sidebar() {
  return (
    <div className="sidebar">
      <Card className="post" style={{ width: "auto", color: "black" }}>
        <img
          alt="Profile"
          src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png"
          className="profile-picture"
        />
        <Divider />
        <Row>
          <Col span={24}>
            <h3>Bio</h3>
          </Col>
          <Col span={24}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus
              non nibh id amet.
            </p>
          </Col>
        </Row>
        <Divider />
        <Row className="profile-skills">
          <Col span={24}>
            <h3>Skills</h3>
          </Col>
          <Col span={24}>
            <Tag color="#108ee9">#javascript</Tag>
            <Tag color="#108ee9">#javascript</Tag>
            <Tag color="#108ee9">#javascript</Tag>
            <Tag color="#108ee9">#javascript</Tag>
            <Tag color="#108ee9">#javascript</Tag>
          </Col>
        </Row>
      </Card>

      <Menu mode="inline" className="profile-left-menu">
        <Menu.Item key="1">
          <Icon type="bars" />
          My Activity
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="mail" />
          Messages
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
