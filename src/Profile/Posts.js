import React from "react";
import { Icon, Avatar, Row, Col, Card, Tag } from "antd";

function Post({ post }) {
  const data = [1, 2, 3, 4, 5, 6];

  return data.map(item => (
    <Card key={item} className="post" style={{ width: "auto", color: "black" }}>
      <Row gutter={16}>
        <Col span={2}>
          <Avatar size={50} icon="user" />
        </Col>
        <Col span={22}>
          <Row>
            <p className="post-title">Post title</p>
            <p>Author - Mar 8 (2 hours ago)</p>
          </Row>
        </Col>
      </Row>
      <Row>
        <p className="post-body">Post body</p>
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
          <Tag color="#108ee9">#javascript</Tag>
          <Tag color="#108ee9">#reactjs</Tag>
        </Col>
      </Row>
    </Card>
  ));
}

export default Post;
