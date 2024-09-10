import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
