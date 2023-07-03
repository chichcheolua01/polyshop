import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseClient from "./pages/client/BaseClient";
import HomePage from "./pages/client/Home/HomePage";
import ProductPage from "./pages/client/Product/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseClient />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
