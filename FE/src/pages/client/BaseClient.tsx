import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CartDrawn, Footer, NavBar } from "../../components";

import { ICart, ICategoryProduct, IUser } from "../../interface";

type BaseClientProps = {
  cart: ICart | null;
  currentUser: IUser | null;
  listCategories: ICategoryProduct[] | null;
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
