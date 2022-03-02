import React from "react";
import { Card } from "antd";

const UserCard = ({ image, fname, lname, username, email, onCLick }) => {
  return (
    <Card hoverable cover={<img alt="example" src={image} />} onClick={onCLick}>
      <p> {fname}</p>
      <p>{lname}</p>
      <p>{email}</p>
      <p>{username}</p>
    </Card>
  );
};
export default UserCard;
