import { Outlet } from "react-router-dom";
import { useState } from "react";

import { CartDrawn, Footer, NavBar } from "../../components";

import { carts } from "../../data/carts";

const BaseClient = () => {
  const [openDrawn, setOpenDrawn] = useState(false);

  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
  };

  return (
    <>
      <div className="bg-gray-100">
        <NavBar onOpen={setDrawn} carts={carts} />

        <CartDrawn isOpen={openDrawn} onClose={setDrawn} carts={carts} />

        <main className="pt-36">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
