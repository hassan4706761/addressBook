import React, { useContext, useState } from "react";
import { Layout, Menu, Anchor } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import UserSearch from "../component/UserSearch";

const Nav = () => {
  const { searchText, setSearchText } = useContext(userContext);
  const onSearchHandler = (value) => {
    setSearchText(value);
  };
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to="/setting">Settings</Link>
        </Menu.Item>
        <Menu.Item key="3" className="menuitem3">
          <UserSearch onSearch={onSearchHandler} />
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default Nav;
