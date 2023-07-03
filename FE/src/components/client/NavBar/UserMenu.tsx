import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";

import { AiOutlineBell } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { ICart } from "../../../interface/cart";

type UserMenuProps = {
  currentUser: any | null;
  onClick: () => void;
  carts: ICart;
};

const UserMenu = ({ currentUser, onClick, carts }: UserMenuProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className="hidden md:block text-black hover:text-rose-500 cursor-pointer transition md:px-5">
            <Badge count={10} size="small" color="#52c41a">
              <AiOutlineBell size={25} />
            </Badge>
          </div>

          <div
            onClick={onClick}
            className="hidden md:block text-black hover:text-rose-500 cursor-pointer transition md:px-5"
          >
            <Badge count={carts?.products?.length} size="small">
              <FiShoppingCart size={25} />
            </Badge>
          </div>

          <div
            onClick={toggleOpen}
            className="md:px-5 md:py-1 border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <Avatar src={currentUser?.image} />
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
