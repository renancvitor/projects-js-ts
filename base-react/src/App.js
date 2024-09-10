import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from './store';
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Provider>
  );
}

export default App;
