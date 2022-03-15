import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MenuBar from "./MenuBar";

const Layouts = (props) => {
  const { children } = props;
  return (
    <Layout>
      <MenuBar />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {children}
      </Content>
    </Layout>
  );
};
export default Layouts;
