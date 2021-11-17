import React from "react";
import styles from "../styles/Common.module.css";
import Link from "next/link";
import { Avatar, Badge } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

function ListCard({ course, withImage }) {
  return (
    <Col span={6}>
      <Row className={styles.ListCard}>
        <Space direction="vertical">
          <Avatar
            size={230}
            shape="square"
            src={course.image ? course.image.Location : "/course.png"}
          />
          <div className="media-body pl-2">
            <div className="row">
              <div className="col">
                <Badge count={course.paid ? course.price : "Free"}>
                  <Link
                    href={`/instructor/course/view/${course.slug}`}
                    className="pointer"
                  >
                    <a>
                      <h5 className="mt-2 text-primary">{course.name}</h5>
                    </a>
                  </Link>
                </Badge>
                <p style={{ marginTop: "-10px" }}>
                  {course.lessons.length} Lessons
                </p>

                {course.lessons.length < 5 ? (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-danger"
                  >
                    5 lessons are required to publish
                  </p>
                ) : course.published ? (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-success"
                  >
                    Your course is live in the marketplace
                  </p>
                ) : (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-success"
                  >
                    Your course is ready to be published
                  </p>
                )}
              </div>
              <div className="mt-3 float-right pr-4 text-center">
                {course.published ? (
                  <div>
                    <CheckCircleOutlined className="h5 pointer text-success" />
                    <br />
                    <small className="text-muted">Published</small>
                  </div>
                ) : (
                  <div>
                    <CloseCircleOutlined className="h5 pointer text-warning" />
                    <br />
                    <small className="text-muted">Unpublished</small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link href={`/instructor/course/view/${course.slug}`}>
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
