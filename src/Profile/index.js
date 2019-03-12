import React from "react";
import { Icon, Avatar, Row, Col, Card, Tag } from "antd";

import Posts from "./Posts";
import Sidebar from "./Sidebar";

function Profile() {
  return (
    <div className="profile">
      <Row gutter={16}>
        <Col span={6}>
          <Sidebar />
        </Col>
        <Col span={18}>
          <Posts />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
