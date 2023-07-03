import { Outlet } from "react-router-dom";

import NavBar from "../../components/client/NavBar/NavBar";

const BaseClient = () => {
  return (
    <>
      <NavBar />
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

export default BaseClient;
