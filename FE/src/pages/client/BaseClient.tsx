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

  return (
    <>
      <NavBar onOpen={setDrawn} />

      <CartDrawn isOpen={openDrawn} onClose={setDrawn} />

      <div className="pt-36">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default BaseClient;
