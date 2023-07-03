import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseClient from "./pages/client/BaseClient";
import HomePage from "./pages/client/Home/HomePage";
import IntroducePage from "./pages/client/Introduce/IntroducePage";
import ContactPage from "./pages/client/Contact/ContactPage";
import ListProductPage from "./pages/client/ListProduct/ListProductPage";
import CartPage from "./pages/client/Cart/CartPage";

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
            <Route path="introduce" element={<IntroducePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="list-product" element={<ListProductPage />} />
            <Route path="cart" element={<CartPage />} />
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
