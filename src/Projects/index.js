import React from "react";
import { Row, Col, Icon } from "antd";

function Projects() {
  return (
    <div className="projects">
      <Row className="project-content">
        <Col span={24}>
          <h2>
            Ember VS Code Snippets
            <a href="https://marketplace.visualstudio.com/items?itemName=phanitejakomaravolu.EmberES6Snippets">
              <Icon type="link" />
            </a>
          </h2>
          <p>Ember JS (ES6) and Handlebars code snippets</p>
        </Col>
      </Row>
      <Row className="project-content">
        <Col span={24}>
          <h2>
            React Giphy Package
            <a href="https://www.npmjs.com/package/react-hooks-giphy">
              <Icon type="link" />
            </a>
          </h2>
          <p>Super easy Giphy API support for ReactJS</p>
        </Col>
      </Row>
      <Row className="project-content">
        <Col span={24}>
          <h2>
            React Barcode Package
            <a href="https://www.npmjs.com/package/react-hooks-barcode">
              <Icon type="link" />
            </a>
          </h2>
          <p>Super easy barcode generation for ReactJS</p>
        </Col>
      </Row>
      <Row className="project-content">
        <Col span={24}>
          <h2>
            React CSV Viewer Package
            <a href="https://www.npmjs.com/package/react-csv-viewer">
              <Icon type="link" />
            </a>
          </h2>
          <p>Super easy csv uploader and viewer component for ReactJS</p>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
