import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

type UserMenuProps = {
  currentUser: any | null;
};

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className="hidden md:block text-sm font-semibold py-3 px-4">
            Admin
          </div>

          <div
            onClick={toggleOpen}
            className="md:py-1 md:px-2 border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <Avatar src={currentUser?.image} />
          </div>

          <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
            <div className="flex">
              <FiShoppingCart size={20} />
            </div>
          </div>

          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem
                      label="Thông tin cá nhân"
                      onClick={() => navigate("/trips")}
                    />
                    <MenuItem
                      label="Đơn hàng"
                      onClick={() => navigate("/favorites")}
                    />
                    <hr />
                    <MenuItem
                      label="Đăng xuất"
                      onClick={() => alert("Đăng xuất")}
                    />
                  </>
                ) : (
                  <>
                    <MenuItem
                      label="Đăng nhập"
                      onClick={() => navigate("/auth")}
                    />
                    <MenuItem
                      label="Đăng ký"
                      onClick={() => navigate("/auth/register")}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserMenu;
