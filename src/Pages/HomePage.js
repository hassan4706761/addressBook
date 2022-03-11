import React from "react";
import GetUsers from "../Container/GetUsers";
import Nav from "../Container/Nav";
import { Layout } from "antd";

const HomePage = () => {
  return (
    <Layout className="layout">
      <Nav />
      <GetUsers />
    </Layout>
  );
};
export default HomePage;
