import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  const getRouteKey = routePath => {
    switch (routePath) {
      case "/":
        return "1";
      case "/about":
        return "2";
      case "/portfolio":
        return "3";
      case "/projects":
        return "4";
      case "/contact":
        return "5";
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
        <span>PhaniTeja.me</span>
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={currentRouteKey}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          Home
          <Link to="/" />
        </Menu.Item>
        {/* <Menu.Item key="2">
          About
          <Link to="/about" />
        </Menu.Item>
        <Menu.Item key="3">
          Portfolio
          <Link to="/portfolio" />
        </Menu.Item>
        <Menu.Item key="4">
          Projects
          <Link to="/projects" />
        </Menu.Item>
        <Menu.Item key="=5">
          Contact
          <Link to="/contact" />
        </Menu.Item> */}
      </Menu>
    </div>
  );
}

export default withRouter(Navigation);
