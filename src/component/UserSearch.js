import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

const UserSearch = ({ onSearch }) => {
  // const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
      enterButton
    />
  );
};

export default UserSearch;
