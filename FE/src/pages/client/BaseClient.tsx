import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "../../components/client/NavBar/NavBar";
import Footer from "../../components/client/Footer/Footer";
import CartDrawn from "../../components/client/Cart/CartDrawn";

const BaseClient = () => {
  const [openDrawn, setOpenDrawn] = useState(false);

  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
  };

  const carts = {
    products: [
      {
        _id: "product1",
        name: "Samsung Galaxy S20 FE 256GB",
        price: 6990000,
        quantity: 10,
        image:
          "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_4_.jpg",
      },
      {
        _id: "product3",
        name: "Xiaomi 12T 8GB 128GB",
        price: 9190000,
        quantity: 5,
        image:
          "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg",
      },
    ],
    totalPrice: 16180000,
  };

  return (
    <>
      <NavBar onOpen={setDrawn} carts={carts} />

      <CartDrawn isOpen={openDrawn} onClose={setDrawn} carts={carts} />

      <div className="pt-36">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default BaseClient;
