import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Alert, Row, Col } from "antd";

import SearchBar from "./SearchBar";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        console.log(response);
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
        setError(error);
      })
      .then(function() {
        // always executed
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <Alert type="error" message="Network error" banner />}
      {loading ? (
        <Icon type="loading" />
      ) : (
        <div className="home">
          <Row justify="center" gutter={16}>
            <SearchBar />
          </Row>
          <Row justify="center" gutter={16}>
            <Col className="gutter-row" span={16} offset={4}>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Home;
