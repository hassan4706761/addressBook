import React, { createContext, useState } from "react";
import GetUsers from "./Container/GetUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Container/Nav";
import { Layout } from "antd";
import SettingsComp from "./Container/SettingsComp";

export const userContext = createContext("default value");

const App = () => {
  const [nationality, setNationality] = useState("");
  const [searchText, setSearchText] = useState("");
  console.log("searchText", searchText);
  return (
    <>
      <Layout className="layout">
        <Router>
          <userContext.Provider value={{ searchText, setSearchText }}>
            <Nav />
          </userContext.Provider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <userContext.Provider
                  value={{ nationality, setNationality, searchText }}
                >
                  <GetUsers />{" "}
                </userContext.Provider>
              }
            />
            <Route
              exact
              path="/setting"
              element={
                <userContext.Provider value={{ nationality, setNationality }}>
                  <SettingsComp />{" "}
                </userContext.Provider>
              }
            />
          </Routes>
        </Router>
      </Layout>
    </>
  );
};
export default App;
