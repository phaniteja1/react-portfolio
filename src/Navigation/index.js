import React, { useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  const getRouteKey = routePath => {
    switch (routePath) {
      case "/":
        return "1";
      case "/coders":
        return "2";
      case "/profile":
        return "3";
      default:
        return "1";
    }
  };

  const [currentRouteKey, setCurrentRouteKey] = useState(["1"]);

  useEffect(() => {
    var routeKey = getRouteKey(props.location.pathname);
    setCurrentRouteKey([routeKey]);
  }, [props.location.pathname]);

  return (
    <div className="navigation">
      <div className="logo">
        <span>Fellow Coders</span>
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={currentRouteKey}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Icon type="home" />
          Home
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="code" />
          Coders
          <Link to="/coders" />
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          Profile
          <Link to="/profile" />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(Navigation);
