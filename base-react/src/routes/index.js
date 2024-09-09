import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="*" Component={Page404} />
      </Routes>
  )
}
