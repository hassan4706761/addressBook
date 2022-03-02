import React from "react";
import { Layout, Menu, Anchor } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="/">
          <Link to="/">home</Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to="/setting">Settings</Link>
        </Menu.Item>
        {/*<Menu.Item key="3" className="menuitem3">*/}
        {/*  /!*<UserSearch value={search} onchange={onChangeSearch} />*!/*/}
        {/*</Menu.Item>*/}
      </Menu>
    </Header>
  );
};
export default Nav;
