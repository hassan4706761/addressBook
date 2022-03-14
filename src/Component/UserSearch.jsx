import React from "react";
import { Input } from "antd";
const { Search } = Input;
import "../Styles/userPage.less";

const UserSearch = ({ onSearch }) => {
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
