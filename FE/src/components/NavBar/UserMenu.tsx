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
          <div onClick={toggleOpen} className="flex hidden md:block">
            <div>{currentUser ? currentUser.name : <div>Xin chào!</div>}</div>

            <Avatar src={currentUser?.image} />
          </div>

          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem
                      label="My trips"
                      onClick={() => navigate("/trips")}
                    />
                    <MenuItem
                      label="My favorites"
                      onClick={() => navigate("/favorites")}
                    />
                    <MenuItem
                      label="My reservations"
                      onClick={() => navigate("/reservations")}
                    />
                    <MenuItem
                      label="My properties"
                      onClick={() => navigate("/properties")}
                    />
                    <hr />
                    <MenuItem
                      label="Logout"
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
