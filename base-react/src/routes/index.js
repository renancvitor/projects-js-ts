import React from "react";
import { Routes } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <MyRoute path="/" element={<Login />} />
      <MyRoute path="*" element={<Page404 />} />
    </Routes>
  );
}
