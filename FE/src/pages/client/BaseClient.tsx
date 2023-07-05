import { Outlet } from "react-router-dom";
import { useState } from "react";

import { CartDrawn, Footer, NavBar } from "../../components";

import { ICart, ICategories, IUser } from "../../interface";

type BaseClientProps = {
  cart: ICart | null;
  currentUser: IUser | null;
  listCategories: ICategories[] | null;
};

const BaseClient = ({ cart, currentUser, listCategories }: BaseClientProps) => {
  const [openDrawn, setOpenDrawn] = useState(false);

  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
  };

  return (
    <>
      <div className="bg-gray-100">
        <NavBar
          onOpen={setDrawn}
          cart={cart}
          listCategories={listCategories}
          currentUser={currentUser}
        />

        <CartDrawn isOpen={openDrawn} onClose={setDrawn} cart={cart} />

        <main className="pt-36">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
