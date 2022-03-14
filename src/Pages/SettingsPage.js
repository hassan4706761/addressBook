import React from "react";
import SettingsComp from "../Container/SettingsComp";
import Nav from "../Container/Nav";
import { Layout } from "antd";

const SettingsPage = () => {
  return (
    <Layout className="layout">
      <Nav />
      <SettingsComp />
    </Layout>
  );
};
export default SettingsPage;
