import { Outlet } from "react-router-dom";

import NavBar from "../../components/client/NavBar/NavBar";

const BaseClient = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default BaseClient;
