import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
