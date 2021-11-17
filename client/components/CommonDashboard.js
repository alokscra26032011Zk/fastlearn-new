import { Col, Image, Row } from "antd";
import React from "react";
import ListCard from "./ListCard";

function CommonDashboard({ courses }) {
  return (
    <div className="container heroSection">
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <h1>Explore India’s best courses </h1>
          <h3 className="text-primary text-muted">
            On-demand Courses built for you by your favorite Tutors{" "}
          </h3>
        </Col>
        <Col span={12}>
          <Image
            className=""
            preview={false}
            width={700}
            src="https://cdn.discordapp.com/attachments/820608670810243133/910533637232001044/unknown.png"
          />
        </Col>
      </Row>
      <Row justify="center">
        <h2 className="text-center mt-5 mb-3">Our courses</h2>
      </Row>
      <Row justify="start">
        {courses && courses.map((course) => <ListCard course={course} />)}
      </Row>
    </div>
  );
}

export default CommonDashboard;
