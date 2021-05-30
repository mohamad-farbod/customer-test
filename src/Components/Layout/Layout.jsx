import React from "react";
import Login from "../Login/Login";
import Sidebar from "./../Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";

import Navbar from "./../Navbar/Navbar";
import adminPage from "./../adminPage/adminPage";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route path="/admin" component={adminPage} />
        <Route path="/" component={Login} exact />
      </Switch>
    </div>
  );
};

export default Layout;
