import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SettingsPage";
import Layout from "./Common/Layout";
import ErrorBoundary from "../src/Common/ErrorBoundary";
import PageNotFound from "./Component/PageNotFound";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/setting" element={<SettingsPage />} />
            <Route exact path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};
export default App;
