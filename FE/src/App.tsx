import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AdminCategoryPage,
  AdminDashboardPage,
  AdminProductPage,
  AdminUserPage,
  BaseAdmin,
  BaseAuth,
  BaseClient,
  CheckoutPage,
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
  Payment,
} from "./components";

import { ICart, IUser } from "./interface";

import { users, carts } from "./data";
import { useGetAllProductsQuery } from "./api/products";
import { useGetAllCategoriesQuery } from "./api/categories";

function App() {
  const { data: listProducts } = useGetAllProductsQuery();
  const { data: listCategories } = useGetAllCategoriesQuery();

  const [cart, setCart] = useState<ICart | null>(null);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    function fetchUsers() {
      const user = users.find((user) => user._id === "user1") || null;
      setCurrentUser(user);
    }

    function fetchCart() {
      setCart(carts);
    }

    fetchCart();
    fetchUsers();
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
                isLogin={currentUser !== null}
                imageUser={currentUser?.image.url}
                listCategories={listCategories?.data}
              />
            }
          >
            <Route
              index
              element={
                <HomePage
                  favoriteUser={currentUser?.favorite}
                  listProducts={listProducts?.data}
                  listCategories={listCategories?.data}
                />
              }
            />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route
              path="profile"
              element={
                <ProfilePage
                  nameUser={currentUser?.name}
                  imageUser={currentUser?.image.url}
                />
              }
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
                element={<ChangePassword emailUser={currentUser?.email} />}
              />
              <Route path="orders" element={<Order />} />
              <Route path="order-address" element={<OrderAddress />} />
              <Route path="payment" element={<Payment />} />
              <Route
                path="favorite"
                element={
                  <Favorite
                    favorites={currentUser?.favorite}
                    listProducts={listProducts?.data}
                  />
                }
              />
              <Route
                path="list-card"
                element={<ListCard cardUser={currentUser?.cards} />}
              />
            </Route>
            <Route
              path="checkout"
              element={
                <CheckoutPage cardUser={currentUser?.cards} cart={cart} />
              }
            />
            <Route path="introduce" element={<IntroducePage />} />
            <Route
              path="list-product"
              element={
                <ListProductPage
                  favoriteUser={currentUser?.favorite}
                  listProducts={listProducts?.data}
                  listCategories={listCategories?.data}
                />
              }
            />
            <Route
              path="product-detail/:id"
              element={
                <ProductDetailPage
                  favoriteUser={currentUser?.favorite}
                  listProducts={listProducts?.data}
                />
              }
            />
          </Route>

          <Route path="/auth" element={<BaseAuth />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/admin" element={<BaseAdmin />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route
              path="products"
              element={<AdminProductPage listProducts={listProducts?.data} />}
            />
            <Route
              path="categories"
              element={
                <AdminCategoryPage listCategories={listCategories?.data} />
              }
            />
            <Route path="users" element={<AdminUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
