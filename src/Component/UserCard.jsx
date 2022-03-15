import React from "react";
import { Card, Space, Typography } from "antd";
const { Paragraph } = Typography;

const UserCard = ({
  image,
  firstName,
  lastName,
  username,
  email,
  onCLick,
  index,
}) => {
  return (
    <Card
      hoverable
      cover={<img className="userCardImage" alt="example" src={image} />}
      onClick={onCLick}
      className="userCard"
    >
      <Space size={"small"}>
        <Paragraph> {firstName}</Paragraph>
        <Paragraph>{lastName}</Paragraph>
      </Space>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{username}</Paragraph>
    </Card>
  );
};
export default UserCard;
