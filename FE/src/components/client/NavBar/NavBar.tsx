import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../Container";
import NavBarItem from "./NavBarItem";

type NavBarProps = {
  currentUser?: null;
};

const NavBar = ({ currentUser }: NavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3">
              <Logo />

              <div className="w-3/4">
                <Search />
              </div>

              <UserMenu currentUser={currentUser} />
            </div>
          </Container>
        </div>

        <div className="flex flex-row gap-8 justify-center p-3">
          <NavBarItem
            label="Trang chủ"
            onClick={() => navigate("/")}
            active={location.pathname === "/"}
          />
          <NavBarItem
            label="Sản phẩm"
            onClick={() => navigate("/products")}
            active={location.pathname === "/products"}
          />
          <NavBarItem
            label="Giới thiệu"
            onClick={() => navigate("/introduce")}
            active={location.pathname === "/introduce"}
          />
          <NavBarItem
            label="Liên hệ"
            onClick={() => navigate("/contact")}
            active={location.pathname === "/contact"}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
