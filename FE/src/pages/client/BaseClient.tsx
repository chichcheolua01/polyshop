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
        product: {
          _id: "product6",
          name: "Điện thoại Tecno SPARK GO 2023 4GB/64GB - Helio A22 | 5000 mAh | 6,6 HD+| Cảm ứng vân tay | Hàng chính hãng | Bảo hành chính hãng 13 tháng",
          price: 2490000,
          image:
            "https://salt.tikicdn.com/cache/750x750/ts/product/6b/76/cb/ecff31e6f31b96158b9002eb74b76e3b.jpg.webp",
        },
        quantity: 10,
      },
      {
        product: {
          _id: "product3",
          name: "Xiaomi 12T 8GB 128GB",
          price: 9190000,
          image:
            "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg",
        },
        quantity: 5,
      },
    ],
    totalPrice: 11680000,
  };

  return (
    <>
      <NavBar onOpen={setDrawn} carts={carts} />

      <CartDrawn isOpen={openDrawn} onClose={setDrawn} carts={carts} />

      <main className="pt-36">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default BaseClient;
