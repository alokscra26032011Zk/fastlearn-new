import { Button, Row, Space } from "antd";
import React from "react";
import Link from "next/link";

function TutorAtnBtn() {
  return (
    <Row justify="end">
      <Space>
        <Button href="/assignments/create" type="primary">
          Add Test Series
        </Button>{" "}
        <Button href="/courses/create" type="primary">
          Create Course
        </Button>{" "}
      </Space>
    </Row>
  );
}

export default TutorAtnBtn;
