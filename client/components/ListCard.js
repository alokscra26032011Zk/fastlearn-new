import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import React from "react";
import styles from "../styles/Common.module.css";
import Link from "next/link";

function ListCard({ name, description, href }) {
  return (
    <Col span={6}>
      <Row className={styles.ListCard}>
        <Space direction="vertical">
          <h1>{name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se</p>
          <Link href={href}>
            <Row justify="end" className="pointer">
              <DoubleRightOutlined className={styles.btnNext} />
            </Row>
          </Link>
        </Space>
      </Row>
    </Col>
  );
}

export default ListCard;
