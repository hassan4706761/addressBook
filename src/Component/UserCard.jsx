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
      cover={<img alt="example" src={image} />}
      style={{ height: "400px" }}
      onClick={onCLick}
    >
      <Space size={"small"}>
        <Paragraph> {firstName}</Paragraph>
        <Paragraph>{lastName}</Paragraph>
      </Space>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{username}</Paragraph>
      {index}
    </Card>
  );
};
export default UserCard;
