import { useEffect, useState } from "react";
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
  ListCard,
  ChangePassword,
  Favorite,
  Information,
  Order,
  OrderAddress,
  OrderHistory,
  Payment,
  Voucher,
} from "./components";

import { ICart, ICategoryProduct, IProduct, IUser } from "./interface";

import { users, categories, products, carts } from "./data";

function App() {
  const [cart, setCart] = useState<ICart | null>(null);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [listProducts, seListProducts] = useState<IProduct[] | null>(null);
  const [listCategories, setListCategories] = useState<
    ICategoryProduct[] | null
  >(null);

  useEffect(() => {
    function fetchUsers() {
      const user = users.find((user) => user._id === "user1") || null;
      setCurrentUser(user);
    }

    function fetchCart() {
      setCart(carts);
    }

    function fetchListProducts() {
      seListProducts(products);
    }

    function fetchListCategories() {
      setListCategories(categories);
    }

    fetchCart();
    fetchUsers();
    fetchListProducts();
    fetchListCategories();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BaseClient
                cart={cart}
                currentUser={currentUser}
                listCategories={listCategories}
              />
            }
          >
            <Route
              index
              element={
                <HomePage
                  currentUser={currentUser}
                  listProducts={listProducts}
                />
              }
            />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route
              path="profile"
              element={<ProfilePage currentUser={currentUser} />}
            >
              <Route index element={<Account currentUser={currentUser} />} />
              <Route
                path="account"
                element={<Account currentUser={currentUser} />}
              />
              <Route
                path="information"
                element={<Information currentUser={currentUser} />}
              />
              <Route
                path="change-password"
                element={<ChangePassword currentUser={currentUser} />}
              />
              <Route path="orders" element={<Order />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route path="order-address" element={<OrderAddress />} />
              <Route path="payment" element={<Payment />} />
              <Route path="voucher" element={<Voucher />} />
              <Route path="favorite" element={<Favorite />} />
              <Route
                path="list-card"
                element={<ListCard currentUser={currentUser} />}
              />
            </Route>
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="introduce" element={<IntroducePage />} />
            <Route
              path="list-product"
              element={
                <ListProductPage
                  currentUser={currentUser}
                  listProducts={listProducts}
                  listCategories={listCategories}
                />
              }
            />
            <Route
              path="product-detail/:id"
              element={
                <ProductDetailPage
                  currentUser={currentUser}
                  listProducts={listProducts}
                />
              }
            />
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
