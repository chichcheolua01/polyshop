import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  BaseAuth,
  BaseClient,
  CheckOutPage,
  ContactPage,
  FaqPage,
  HomePage,
  IntroducePage,
  ListProductPage,
  LoginPage,
  ProductDetailPage,
  ProfilePage,
  RegisterPage,
} from "./pages";

import {
  Account,
  ChangePassword,
  Favorite,
  Information,
  Order,
  OrderAddress,
  OrderHistory,
  Payment,
  Voucher,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseClient />}>
            <Route index element={<HomePage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="profile" element={<ProfilePage />}>
              <Route index element={<Account />} />
              <Route path="account" element={<Account />} />
              <Route path="information" element={<Information />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="orders" element={<Order />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route path="order-address" element={<OrderAddress />} />
              <Route path="payment" element={<Payment />} />
              <Route path="voucher" element={<Voucher />} />
              <Route path="favorite" element={<Favorite />} />
            </Route>
            <Route path="checkout" element={<CheckOutPage />} />
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
