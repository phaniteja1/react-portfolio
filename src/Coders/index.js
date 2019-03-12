import React from "react";
import { Row } from "antd";
import CoderCard from "./CoderCard";

function Coders() {
  const profiles = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <Row gutter={16} style={{ margin: "1rem" }}>
        {profiles.map(profile => (
          <CoderCard key={profile} />
        ))}
      </Row>
    </div>
  );
}

export default Coders;
