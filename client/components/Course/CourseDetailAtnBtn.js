import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space } from "antd";
import React, { useState } from "react";
import styles from "../../styles/Courses.module.css";

function CourseDetailAtnBtn() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Row justify="space-between" className={styles.CourseDetailAtnBtn}>
      <Col>
        <h1>Course Name</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se</p>
      </Col>
      <Space>
        <Button icon={<SettingOutlined />} type="dashed"></Button>{" "}
        <Button onClick={showModal} type="primary">
          Add Chapter
        </Button>{" "}
      </Space>
      <Modal
        title="Create Chapter"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <label htmlFor="">Chapter Name</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Chapter Name"
            required
          />
          <label htmlFor="">Chapter Description</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Chapter Description"
            required
          />
          <label htmlFor="">No. of Concepts</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter No. of Concepts"
            required
          />
        </form>
      </Modal>
    </Row>
  );
}

export default CourseDetailAtnBtn;
