import React from "react";

import { Input, Col, Button } from "antd";

const Search = Input.Search;

function SearchBar() {
  return (
    <div className="search-bar">
      <Col span={4} />
      <Col span={14}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          size="large"
        />
      </Col>
      <Col span={2}>
        <Button type="primary" icon="edit" className="write-post-btn">
          Write Post
        </Button>
      </Col>
      <Col span={4} />
    </div>
  );
}

export default SearchBar;
