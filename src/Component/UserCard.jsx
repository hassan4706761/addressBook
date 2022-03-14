import React from "react";
import { Card, Space, Typography } from "antd";
const { Paragraph } = Typography;

const UserCard = ({ image, fname, lname, username, email, onCLick, index }) => {
  return (
    <Card
      hoverable
      cover={<img alt="example" src={image} />}
      style={{ height: "400px" }}
      onClick={onCLick}
    >
      <Space size={"small"}>
        {index}
        <Paragraph> {fname}</Paragraph>
        <Paragraph>{lname}</Paragraph>
      </Space>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{username}</Paragraph>
    </Card>
  );
};
export default UserCard;
