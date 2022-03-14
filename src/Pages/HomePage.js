import React from "react";
import Home from "../Container/Home";
import Nav from "../Container/Nav";
import { Layout } from "antd";

const HomePage = () => {
  return (
    <Layout className="layout">
      <Nav />
      <Home />
    </Layout>
  );
};
export default HomePage;
