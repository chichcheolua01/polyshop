// Import các thư viện
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Import các component
import {
  Button,
  CartDrawn,
  Footer,
  Input,
  Loading,
  Modal,
  NavBar,
} from "../../components";

// Import các interface
import { ICart, ICategoryProduct } from "../../interface";

// Type để truyền dữ liệu giữa các props
type BaseClientProps = {
  cart: ICart | null;
  isLogin: boolean;
  imageUser: string | undefined;
  listCategories: ICategoryProduct[] | null;
};

// Khởi tạo component
const BaseClient = ({
  isLogin,
  cart,
  imageUser,
  listCategories,
}: BaseClientProps) => {
  // Sử dụng hook
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [openDrawn, setOpenDrawn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mở đóng giở hàng
  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
  };

  // Có phải ở trang chủ không
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Cuộn lên đầu khi thay đổi url
    window.scrollTo(0, 0);

    // Mở loading
    setIsLoading(true);

    // Sau một giây tắt loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Đóng giỏ hàng khi url thay đổi
    setOpenDrawn(false);
  }, [location.pathname]);

  // Truyền vào trong modal
  const bodyModal = (
    <>
      <div className="w-full text-center">
        <h2 className="uppercase font-semibold text-4xl mb-5">
          Giảm giá <span className="text-rose-500">30%</span>
        </h2>

        <span className="text-base text-gray-500">
          Đăng ký nhận thông tin tin để nhận thông tin cập nhật về sản phẩm mới.
        </span>

        <div className="pt-5">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-1">
            <div className="w-full">
              <Input
                id="email"
                value={email}
                label="Nhập email của bạn"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-1/4">
              <Button label="Đăng ký" onClick={() => alert("Đăng ký")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Kiểm tra loading */}

      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="bg-[url(/images/background.avif)] bg-cover bg-fixed bg-center bg-no-repeat">
          {/* Chỉ mở model ở trang chủ */}

          {isHomePage ? (
            <Modal
              isOpen={isOpen}
              body={bodyModal}
              background={true}
              onClose={() => setIsOpen(false)}
            />
          ) : null}

          <NavBar
            onOpen={setDrawn}
            isLogin={isLogin}
            cartCount={cart?.products.length || 0}
            listCategories={listCategories}
            imageUser={imageUser}
          />

          <CartDrawn
            isOpen={openDrawn}
            isLogin={isLogin}
            onClose={setDrawn}
            cart={cart}
          />

          <main className="pt-36">
            <Outlet />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default BaseClient;
