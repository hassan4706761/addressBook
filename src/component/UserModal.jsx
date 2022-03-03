import { Modal, Button, Typography, Row, Col, Space } from "antd";
import React from "react";
import "../styles/userPage.less"

const { Title, Paragraph } = Typography;

const UserModal = ({
  visible,
  onCancel,
  id,
  streetName,
  streetNumber,
  cell,
  phone,
  city,
  state,
}) => {
  // console.log(streetName);
  return (
    <Modal
      title="More Details..."
      centered
      visible={visible}
      onCancel={onCancel}
      okButtonProps={{ hidden: true }}
    >
      <Row>
        <Col span={24}>
          <Row>
            <Col span={4} offset={2}>
              <Title level={4}>City:</Title>
            </Col>
            <Col span={18} >
              {" "}
              <Paragraph>{city}</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={2}>
              <Title level={4}>State:</Title>
            </Col>
            <Col span={18}>
              {" "}
              <Paragraph>{state}</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={2}>
              <Title level={4}>Phone:</Title>
            </Col>
            <Col span={18}>
              {" "}
              <Paragraph>{phone}</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={2}>
              <Title level={4}>Cell:</Title>
            </Col>
            <Col span={18}>
              {" "}
              <Paragraph>{cell}</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={2}>
              <Title level={4}>Street:</Title>
            </Col>
            <Col span={18}>
              {" "}
              <Space size={"small"}>
                <Paragraph>{streetNumber}</Paragraph>
                <Paragraph>{streetName}</Paragraph>{" "}
              </Space>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
export default UserModal;
