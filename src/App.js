import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

const App = ({ children }) => (
  <div>
    <NavBar />
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

export default App;
