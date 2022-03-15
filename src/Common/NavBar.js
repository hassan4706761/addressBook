import React from "react";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import UserSearch from "../Component/UserSearch";
import { setUserSearch } from "../Redux/Actions/UserDataActions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (value) => {
    dispatch(setUserSearch(value));
  };
  return (
    <Layout>
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
    </Layout>
  );
};
export default NavBar;
