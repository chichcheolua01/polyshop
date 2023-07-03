import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseClient from "./pages/client/BaseClient";
import HomePage from "./pages/client/Home/HomePage";
import ProductPage from "./pages/client/Product/ProductPage";

import BaseAuth from "./pages/auth/BaseAuth";
import LoginPage from "./pages/auth/Login/LoginPage";
import RegisterPage from "./pages/auth/Register/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseClient />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductPage />} />
          </Route>

          <Route path="/auth" element={<BaseAuth />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
