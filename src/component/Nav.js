import React from "react";
import { Layout, Menu, Anchor } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import GetUsers from "./GetUsers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import Line from "antd/es/progress/Line";
import UserSearch from "./UserSearch";

const { Link } = Anchor;

const Nav = () => {
  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="/">home</Menu.Item>
          <Menu.Item key="/settings">Settings</Menu.Item>
          {/*<Menu.Item key="3" className="menuitem3">*/}
          {/*  /!*<UserSearch value={search} onchange={onChangeSearch} />*!/*/}
          {/*</Menu.Item>*/}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      ></Content>
    </Layout>
  );
};
export default Nav;
