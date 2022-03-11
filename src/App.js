import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/setting" element={<SettingsPage />} />,
      </Routes>
    </Router>
  );
};
export default App;
