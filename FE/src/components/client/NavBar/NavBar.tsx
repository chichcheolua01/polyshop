// Import các thư viện
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Import các component
import Logo from "../../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../Container";
import NavBarItem from "./NavBarItem";

// Import các interface
import { ICategoryProduct } from "../../../interface";

// Type để truyền dữ liệu giữa các props
type NavBarProps = {
  onOpen: () => void;
  cartCount: number;
  isLogin: boolean;
  imageUser?: string | null;
  listCategories: ICategoryProduct[] | null;
};

// Khởi tạo component
const NavBar = ({
  imageUser,
  isLogin,
  onOpen,
  cartCount,
  listCategories,
}: NavBarProps) => {
  // Sử dụng hook
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [listSlug, setListSlug] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const initialSlug = [
      ...new Set(
        listCategories && listCategories?.map((category) => category.slug)
      ),
    ];

    setListSlug(initialSlug);
  }, [listCategories]);

  const bodyPopover = (
    <div className="flex flex-row gap-20 p-5">
      {listSlug.map((slug) => (
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
                    to={`list-product?slug=${category.slug}?brand=${category.brand}`}
                  >
                    <span className="">{category.brand}</span>
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
                imageUser={imageUser}
                isLogin={isLogin}
                onClick={onOpen}
                cartCount={cartCount}
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
