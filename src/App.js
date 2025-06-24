//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import SideMenu from "./page/dashboard/components/SideMenu";
import AppNavbar from "./page/dashboard/components/AppNavbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./page//shared-theme/AppTheme";
import Dashboard from "./page/dashboard/Dashboard";
import Permislist from "./page/permislist/Permislist"; // Example for another page
import Querylist from "./page/querylist/Quertlist"; // Example for another page
import Serverlist from "./page/serverlist/Serverlist"; // Example for another page

function App(props) {
  const [selectedPage, setSelectedPage] = useState("dashboard"); // Default to Dashboard

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "querylist":
        return <Querylist />;
      case "serverlist":
        return <Serverlist />;
      case "permislist":
        return <Permislist />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppTheme {...props}>
          <CssBaseline enableColorScheme />
          <SideMenu onPageChange={handlePageChange} />
          <AppNavbar />
          {renderContent()}
        </AppTheme>
      </header>
    </div>
  );
}

export default App;
