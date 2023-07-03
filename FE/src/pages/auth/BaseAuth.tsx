import { Outlet, useNavigate } from "react-router-dom";

const BaseAuth = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-full w-full">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BaseAuth;
