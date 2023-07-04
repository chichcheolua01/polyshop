import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "../../components/client/NavBar/NavBar";
import Footer from "../../components/client/Footer/Footer";
import CartDrawn from "../../components/client/Cart/CartDrawn";

import { carts } from "../../data/carts";

const BaseClient = () => {
  const [openDrawn, setOpenDrawn] = useState(false);

  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
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
