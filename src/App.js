import React from "react";
import GetUsers from "./Container/GetUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Container/Nav";
import { Layout } from "antd";
import SettingsComp from "./Container/SettingsComp";

const App = () => {
  return (
    <>
      <Layout className="layout">
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<GetUsers />} />
            <Route exact path="/setting" element={<SettingsComp />} />,
          </Routes>
        </Router>
      </Layout>
    </>
  );
};
export default App;
