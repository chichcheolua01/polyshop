import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import Logo from "../../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../Container";
import NavBarItem from "./NavBarItem";

import { ICart } from "../../../interface/cart";

import { categories } from "../../../data/categories";

type NavBarProps = {
  currentUser?: any | null | undefined;
  onOpen: () => void;
  carts?: ICart | null | undefined;
};

const NavBar = ({ currentUser, onOpen, carts }: NavBarProps) => {
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
    new Set(categories.map((category) => category.slug))
  );

  const body = (
    <div className="flex flex-row gap-20 p-5">
      {slugs.map((slug) => (
        <div key={slug}>
          <Link
            to={`list-product?slug=${slug}`}
            className="font-bold text-base hover:text-rose-500"
          >
            {slug}
          </Link>

          <div className="flex flex-col mt-3 gap-3">
            {categories
              .filter((category) => category.slug === slug)
              .map((category) => (
                <Link
                  key={category._id}
                  className="text-gray-500 font-normal text-xs hover:text-rose-500"
                  to={`list-product?slug=${category.slug}`}
                >
                  <span className="text-base ">{category.name}</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3">
              <Logo />

              <div className="w-3/4">
                <Search />
              </div>

              <UserMenu
                currentUser={currentUser}
                onClick={onOpen}
                carts={carts}
              />
            </div>
          </Container>
        </div>

        {!isScrolled ? (
          <div className="flex flex-row gap-8 justify-center p-3">
            <NavBarItem
              label="Trang chủ"
              onClick={() => navigate("/")}
              active={location.pathname === "/"}
            />
            <NavBarItem
              label="Sản phẩm"
              active={location.pathname.includes("/list-product/")}
              bodyPopover={body}
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
            <NavBarItem
              label="FAQ"
              onClick={() => navigate("/faq")}
              active={location.pathname === "/faq"}
            />
          </div>
        ) : null}
      </header>
    </>
  );
};

export default NavBar;
