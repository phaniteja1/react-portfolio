import React from "react";
import { Row, Col } from "antd";

function About() {
  return (
    <div className="about">
      <Row className="about-content">
        <Col span={24}>
          <h1>About Phani Teja Komaravolu</h1>
          <h3 className="about-desc">
            I am a Full Stack Web and Mobile Application Developer currently
            working for Cincinnati Children's Hospital. I love contributing to
            open-source development. When I don't code, I do photography!
          </h3>
          <h3 className="about-desc">
            My current focus in on developing React Hooks-based Packages and an
            Electron app for workflow management. I actively maintain 5 npm
            packages and many github projects.
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default About;