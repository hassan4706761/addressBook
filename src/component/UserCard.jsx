import React from "react";
import { Card, Space, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

const UserCard = ({ image, fname, lname, username, email, onCLick }) => {
  return (
    <Card hoverable cover={<img alt="example" src={image} />} onClick={onCLick}>
      <Space size={"small"}>
        <Paragraph> {fname}</Paragraph>
        <Paragraph>{lname}</Paragraph>
      </Space>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{username}</Paragraph>
    </Card>
  );
};
export default UserCard;
