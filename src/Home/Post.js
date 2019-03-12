import React from "react";
import { Icon, Avatar, Row, Col, Card, Tag } from "antd";

function Post({ post }) {
  return (
    <Card className="post" style={{ width: "auto", color: "black" }}>
      <Row gutter={16}>
        <Col span={2}>
          <Avatar size={50} icon="user" />
        </Col>
        <Col span={22}>
          <Row>
            <p className="post-title">{post.title}</p>
            <p>Author - Mar 8 (2 hours ago)</p>
          </Row>
        </Col>
      </Row>
      <Row>
        <p className="post-body">{post.body}</p>
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
  );
}

export default Post;
