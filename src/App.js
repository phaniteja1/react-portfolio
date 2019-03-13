import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from "antd";

import Navigation from "./Navigation";
import Home from "./Home";
import Projects from "./Projects";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Header style={{ background: "#F5F5F5", padding: 0 }}>
            <Navigation />
          </Header>
          <Content>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
