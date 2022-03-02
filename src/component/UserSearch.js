import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const UserSearch = ({ value, onchange }) => {
  return (
    <Input
      placeholder="Search user..."
      style={{ width: "100%" }}
      suffix={<SearchOutlined />}
      value={value}
      onChange={onchange}
    />
  );
};

export default UserSearch;
