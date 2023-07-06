import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import Logo from "../../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../Container";
import NavBarItem from "./NavBarItem";

import { ICart, ICategoryProduct, IUser } from "../../../interface";

type NavBarProps = {
  onOpen: () => void;
  cart: ICart | null;
  currentUser?: IUser | null;
  listCategories: ICategoryProduct[] | null;
};

const NavBar = ({ currentUser, onOpen, cart, listCategories }: NavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slugs = Array.from(
    new Set(listCategories && listCategories.map((category) => category.slug))
  );

  const bodyPopover = (
    <div className="flex flex-row gap-20 p-5">
      {slugs.map((slug) => (
        <div key={slug}>
          <Link
            to={`list-product?slug=${slug}`}
            className="hover:text-rose-500 font-bold text-lg"
          >
            {slug}
          </Link>

          <div className="flex flex-col mt-3 gap-2">
            {listCategories &&
              listCategories
                .filter((category) => category.slug === slug)
                .map((category) => (
                  <Link
                    key={category._id}
                    className="hover:text-rose-500"
                    to={`list-product?slug=${category.slug}`}
                  >
                    <span className="">{category.name}</span>
                  </Link>
                ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header className="fixed w-full z-10 shadow-sm">
        <div className="py-4 bg-white">
          <Container>
            <div className="flex flex-row items-center justify-between gap-10">
              <Logo />

              <div className="w-full relative">
                <Search />
              </div>

              <UserMenu
                currentUser={currentUser}
                onClick={onOpen}
                cart={cart}
              />
            </div>
          </Container>
        </div>

        {!isScrolled ? (
          <div className="bg-rose-300">
            <Container>
              <div className="flex p-3 justify-center">
                <div className="flex flex-row gap-8">
                  <NavBarItem
                    label="Trang chủ"
                    onClick={() => navigate("/")}
                    active={location.pathname === "/"}
                  />
                  <NavBarItem
                    label="Sản phẩm"
                    active={location.pathname.includes("/list-product/")}
                    bodyPopover={bodyPopover}
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
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default NavBar;
