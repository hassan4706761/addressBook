import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
import "../styles/userPage.less";

const UserSearch = ({ onSearch }) => {
  // const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 300 }}
      enterButton
    />
  );
};

export default UserSearch;
