import { Menu } from "antd";
import { Link } from "react-router-dom";
import UserSearch from "../Component/UserSearch";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserSearch } from "../Redux/Actions/UserDataActions";
import { Header } from "antd/es/layout/layout";

const MenuBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (value) => {
    dispatch(setUserSearch(value));
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
export default MenuBar;
