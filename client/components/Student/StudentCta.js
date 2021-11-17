import { Button, Col, Image, Row, Space, Statistic } from "antd";
import React from "react";

function StudentCta() {
  return (
    <div>
      <Row justify="end">
        <Space>
          {/* <Button href="/assignments/create" type="primary">
          Add Test Series
        </Button>{" "} */}
          <Button href="/user/" type="primary">
            Explore Courses
          </Button>{" "}
        </Space>
      </Row>
      <Row className="my-5 studentCta wrapper" justify="space-between">
        <Col span={10}>
          <Image
            className="studentsLogo ml-3 p-2 pointer"
            preview={false}
            width={500}
            src="https://cdn.discordapp.com/attachments/873247967623147580/909530906702790686/unknown.png"
          />
        </Col>
        <Col span={14}>
          {" "}
          <h2 className="my-2 mt-4">Welcome Alok !</h2>
          <p className="my-2 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default StudentCta;