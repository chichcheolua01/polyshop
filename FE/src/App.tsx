import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseClient from "./pages/client/BaseClient";
import HomePage from "./pages/client/Home/HomePage";
import CartPage from "./pages/client/Cart/CartPage";
import ContactPage from "./pages/client/Contact/ContactPage";
import IntroducePage from "./pages/client/Introduce/IntroducePage";
import ListProductPage from "./pages/client/ListProduct/ListProductPage";
import ProductDetailPage from "./components/client/ProductDetail/ProductDetailPage";

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
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="introduce" element={<IntroducePage />} />
            <Route path="list-product" element={<ListProductPage />} />
            <Route path="product-detail/:id" element={<ProductDetailPage />} />
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
